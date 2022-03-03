import React from "react";
import NotFound from "./404";
import ServerContent from "./ServerContent";

const Name = window.location.pathname.split("/")[4];

const ServerName = () => {
  console.log(typeof Name);
  if (Name == "codedamn") {
    return <ServerContent />;
  } else {
    return <NotFound />;
  }
};

export default ServerName;
