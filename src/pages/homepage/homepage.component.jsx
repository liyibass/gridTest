import React from "react";
import "./homepage.style.scss";
import Navbar from "../../components/nav/nav.component";
import TopContainer from "../../components/TopContainer/TopContainer.component";
import BoxesSection from "../../components/BoxesSection/BoxesSection.component";

import Portfolio from "../../components/Portfolio/Portfolio.component";
import InfoSection from "../../components/InfoSection/InfoSection.component";
import Footer from "../../components/Footer/Footer.component";

function Homepage() {
  return (
    <div className="homepage">
      <Navbar />
      {/* Top container */}
      <TopContainer />
      {/* Boxes Section */}
      <BoxesSection />
      {/* Info Section */}

      <InfoSection />
      {/* Portfolio  */}
      <Portfolio />
      <Footer />
    </div>
  );
}

export default Homepage;
