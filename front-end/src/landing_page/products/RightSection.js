import React from "react";

function RigthSection({imageURL, productName, productDescription, learnMore}) {
  return (
    <div className="container ">
      <div className="row">
        

        <div className="col-6 p-5   mt-5 fs-5 text-muted" >
          <h1 style={{ fontSize: "1.8rem", color: "#3d3d3d" }}>
            {productName}
          </h1>
          <p className="mt-4" style={{ width: "70%" }}>
            {productDescription}
          </p>
          <div className="mb-4 mt-4">
            
            <a
              href={learnMore}
              style={{ marginRight: "60px", textDecoration: "none" }}
            >
              Learn More <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
         
        </div>

        <div className="col-6 p-5">
          <img style={{ width: "80%" }} src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RigthSection;
