import React from "react";

function Hero() {
  return (
    <section className="container-fluid " id="supportHero">
      <div className=" p-5" id="supportWapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>

      <div className="row p-3   text-left " id="heroRow" style={{ marginLeft: "11%"}}>
        <div className="col-6 p-3 ">
          <h1 className="fs-4 pb-2" style={{ width: "75%", lineHeight: "1.5" }}>
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            className="mb-2"
            placeholder="Eg: how do i activate F&O, why is may order getting rejected.."
          />
          <br />
          <a href="">Track account opening</a>&nbsp; &nbsp;
          <a href="">Track segment activation</a>&nbsp;&nbsp;
          <a href="">
            Intraday <br />
            margins
          </a>
          &nbsp;&nbsp;
          <a href="">Kite user manual</a>
        </div>
        <div className="col-6 p-3">
          <h4>Featured</h4>
          <ol className="pt-2 text-left">
            <li>
              {" "}
              <a  href="">Current Takeovers and Delisting-January 2024</a>
            </li>
            <li className="pt-2">
              <a href="">Latest Intrady leverages - Mis & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
