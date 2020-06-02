import React from "react";
import "./TopContainer.style.scss";
import bg from "../../images/showcase.jpg";

function TopContainer() {
  return (
    <section className="top-container">
      <div className="showcase">
        {/* <img src={bg} alt="" /> */}

        <p id="text"></p>
        <div className="showcase-text">
          <h1>Your Web Presence</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo unde
            doloribus dolore debitis omnis. Tempore?
          </p>
          <a href="#" className="btn">
            Read more
          </a>
        </div>

        {/* <div className="showcase-bg"></div> */}
      </div>

      <div className="top-box top-box-a">
        <h4>Membership</h4>
        <p className="price">$199/mo</p>
        <a href="#" className="btn">
          Buy now
        </a>
      </div>

      <div className="top-box top-box-b">
        <h4>Pro Membership</h4>
        <p className="price">$299/mo</p>
        <a href="#" className="btn">
          Buy now
        </a>
      </div>
    </section>
  );
}

export default TopContainer;
