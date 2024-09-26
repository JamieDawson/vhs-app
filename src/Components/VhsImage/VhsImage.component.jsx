import React from "react";
import "./VhsImage.styles.css";

const VhsImage = ({ src, alt }) => (
  <div className="vhs-static-image">
    <img src={src} alt={alt} className="vhs-image" />
  </div>
);

export default VhsImage;
