const jwt = require("jsonwebtoken")

const userAuth = async (req, res, next) => {
    // Safely extract token from cookie or Authorization header
    const tokenFromCookie = req.cookies && req.cookies.token;
    const tokenFromHeader = req.headers && req.headers.authorization && req.headers.authorization.split(" ")[1];
    const token = tokenFromCookie || tokenFromHeader;

    
    if (!token) {
        return res.json({ success: false, message: "Not Authorized. login again" })
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET)

        if (tokenDecode.id) {
            req.body = req.body || {}
            req.body.userId = tokenDecode.id;
            req.userId = tokenDecode.id;
        } else {
            return res.json({ success: false, message: 'Not Authorized, try Again' })
        }
        next();

    } catch (error) {
        return res.json({ success: false, message: error.message })
    }
}

module.exports = userAuth;