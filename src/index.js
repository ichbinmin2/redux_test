import React from "react";
import ReactDOM from "react-dom";
import FriendMain from "./friend/container/friendMain";
import TimelineMain from "./timeline/container/timelineMain";

ReactDOM.render(
  <div>
    <FriendMain />
    <TimelineMain />
  </div>,
  document.getElementById("root")
);
