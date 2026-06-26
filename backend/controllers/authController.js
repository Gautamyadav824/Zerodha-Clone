const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel =require('../model/usersModel');
const passport = require('passport');
const transporter = require("../config/nodemailer.js");
const { text } = require('body-parser');

const register = async(req, res) => {
    const {name,email, password} = req.body;

    if(!name || !email ||!password){
        return res.json({success:false, message:"Messing details"});
    }
    try{
        const existingUser = await userModel.findOne({email});

        if(existingUser){
            return res.json({success:false, message:"user already exists"});
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const user = new userModel({name, email, password:hashPassword})
        await user.save();

        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET,{expiresIn: '7d'})

         res.cookie('token', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
            path: '/',
            maxAge: 7*24*60*60*1000
        });

       res.json({
      success: true,
      message: "User Registered Successfully",
    });

    }catch(error){
        return res.json({success:false , message:error.message});
    }

}

const login = async(req, res) => {
    const {email, password} = req.body;
      console.log("Email received:", email);

    if(!email || !password){
        return res.json({success:false, message:'Missing details!'})
    }
    try{

        const user = await userModel.findOne({email})
       
        if(!user){
            return res.json({success:false, message:"Invalid email"})
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.json({success:false, message: "Invalid password"})
        }

                const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, { expiresIn: '7d' })

                // set token as HTTP-only cookie and return token + user info
            res.cookie('token', token, {
            httpOnly: true,
            secure: true,
            sameSite:  'none',
            path:'/',
            maxAge: 7*24*60*60*1000
        });

                res.json({
                    success: true,
                    message: 'User logged in successfully',
                   
                })

    }catch(error){
        return res.json({success:false, message: error.message})
    }

}

const logout = async(req, res) => {
    try{
        res.clearCookie('token', {
            httpOnly: true,
            secure:true,
            sameSite: 'none',
            path:'/',
        });
        return res.json({success:true, message: "Logged Out"})
    }catch(error) {
        return res.json({success: false, message: error.message})
    }
}

const sendVerifyOtp = async(req, res) =>{
    try{
        const userId = req.userId;

        const user = await userModel.findById(userId);

        if(user.isAccountVerified){
            return res.json({success:false, message:"Account already verified"})
        }

       
        const otp = String(Math.floor(100000 + Math.random() * 900000));

        user.verifyOtp = otp;
        user.verifyOtpExpireAt= Date.now()+ 24*60*60*1000;
        await user.save();

        const mailOption = {
            from: process.env.SENDER_EMAIL,
            to: user.email,
            subject :"Account verification OTP",
            text:`Your OTP is ${otp}. Verify your account using this OTP`
        }

        await transporter.sendMail(mailOption);

         res.json({success:true, message:"Verification OTP send on email"})

    }catch(error){
        return res.json({success:false, message: error.message})
    }
}

const verifyEmail = async(req, res) => {
    const {userId, otp} = req.body;

    if(!userId || !otp){
        return res.json({success:false, message:"Missing Details"});
    }

    try{
        const user = await userModel.findById(userId);

        if(!user){
            return res.json({success: false, message:"User not found"})
        }

        if(user.verifyOtp === '' || user.verifyOtp !== otp){
            return res.json({success: false, message:"Invaild OTP"})
        }

        if(user.verifyOtpExpireAt < Date.now()){
            return res.json({success: false, message:" OTP Expired "})
        }

        user.verifyOtp=''
        user.verifyOtpExpireAt = 0
        user.isAccountVerified=true

         await user.save()

         return res.json({success: true, message: 'Email verified successfully'})

    }catch(error){
        return res.json({success: false, message:error.message})
    }
}

const isAuthenticated = async(req, res) => {
    try{
        return res.json({success:true})
    }catch(error){
        return res.json({success: false, message:error.message})
    }
}

const sendResetOtp = async(req, res) => {
    const {email} = req.body;

    if(!email){
        return res.json({success: false, message:'Email required'})
    }

    try{
        const user = await userModel.findOne({email})

        if(!user){
            return res.json({success: false, message:'User not found'})
        }

        const otp = String(Math.floor(100000 + Math.random() * 900000));

        user.resetOtp = otp;
        user.resetOtpExpireAt = Date.now() + 15 *60 *1000;

        await user.save();

        const mailOption = {
            from: process.env.SENDER_EMAIL,
            to:email,
            subject:'Password reset OTP',
            text:`Your OTP  for resetting your password is ${otp}. Use this OTP to proceed with resetting your password.`
        }
        
        await transporter.sendMail(mailOption);
        return res.json({success:true, message:"OTP send to your email"})

    }catch(error){
        return res.json({success:false, message: error.message})
    }
}

const resetPassword = async (req, res)=>{
    const{email, otp, newPassword} = req.body

    if(!email || !otp ||!newPassword){
        return res.json({success: false, message: 'email, otp and newPassword are required'})
    }

    try{
        const user = await userModel.findOne({email})

        if(!user){
            return res.json({success: false, message: 'User not found'})
        }

        if(user.resetOtp === '' || user.resetOtp !== otp){
            return res.json({success:false, message: 'Invaild OTP'})
        }

        if(user.resetOtpExpireAt < Date.now()){
            return res.json({success:false, message:"OTP Expired"})
        }

        const hashPassword = await bcrypt.hash(newPassword, 10)

        user.password = hashPassword;
        user.resetOtp = '';
        user.resetOtpExpireAt=0;

        await user.save();

        return res.json({success:true, message:"password has been reset successfully"});



    }catch(error){
        return res.json({success: false, message: error.message})
    }
}

module.exports = {register, login, logout, sendVerifyOtp, verifyEmail, sendResetOtp, isAuthenticated, resetPassword, logout};