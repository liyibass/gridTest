import React from "react";
import "./BoxesSection.style.scss";

function BoxesSection() {
  return (
    <section className="boxes" id="about-section">
      <div className="box box-jump box-fadeIn">
        <i className="fas fa-chart-pie fa-4x"></i>
        <h3>Analytics</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, ipsa?
        </p>
      </div>
      <div className="box box-jump box-fadeIn">
        <i className="fas fa-globe fa-4x"></i>
        <h3>Marketing</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, ipsa?
        </p>
      </div>
      <div className="box box-jump box-fadeIn">
        <i className="fas fa-cog fa-4x"></i>
        <h3>Development</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, ipsa?
        </p>
      </div>
      <div className="box box-jump box-fadeIn">
        <i className="fas fa-users fa-4x"></i>
        <h3>Support</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, ipsa?
        </p>
      </div>
    </section>
  );
}

export default BoxesSection;
