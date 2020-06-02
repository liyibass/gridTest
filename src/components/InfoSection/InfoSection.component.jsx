import React from "react";
import "./InfoSection.style.scss";
import img1 from "../../images/img1.jpg";

function InfoSection() {
  return (
    <section className="info info--out">
      <img src={img1} alt="" />
      <div>
        <h2>Your Business On The Web</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          omnis quas molestiae vitae aliquam perspiciatis laborum id repudiandae
          voluptatem incidunt minima dolore illo, tempora iusto similique.
          Facere fugiat placeat blanditiis.
        </p>
        <a href="" className="btn">
          Learn more
        </a>
      </div>
    </section>
  );
}

export default InfoSection;
