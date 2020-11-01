import React from "react";

const FontAwesomeIcon = ({ icon = "ellipsis-h", text = false }) => (
  <>
    <span className={`fas fa-${icon}`} />
    {Boolean(text) && <span> &nbsp; {text}</span>}
  </>
);

export default FontAwesomeIcon;