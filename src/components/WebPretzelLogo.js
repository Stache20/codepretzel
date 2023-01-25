import React from "react";

function WebPretzel(props) {
  return (
    <img
      src={require("../images/logowebpretzel.png")}
      width={props.width}
      height={props.height}
      className="logo"
      alt="Web Pretzel Logo"
    />
  );
}

export default WebPretzel;
