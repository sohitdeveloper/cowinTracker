import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#ff6f62",
        bottom: 0,
        position: "fixed",
        width: "100%",
      }}
    >
      <div style={{ color: "#ffffff", fontFamily: "Nunito" }}>
        Designed By 💓- SOHIT KUMAR
      </div>
      <div style={{ fontSize: "15px", color: "#ffffff", fontFamily: "Nunito" }}>
        © All data are served by the CoWIN Portal of India and it's API.
      </div>
    </div>
  );
};

export default Footer;
