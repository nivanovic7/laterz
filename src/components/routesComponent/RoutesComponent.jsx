import { Navigate, Route, Routes } from "react-router-dom";
import Socialize from "../../pages/socialize/Socialize";
import Outfits from "../../pages/outfits/Outfits";
import LocalHub from "../../pages/localHub/LocalHub";
import ShoutOuts from "../../pages/shoutOuts/ShoutOuts";
import React from "react";

class RoutesComponent extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Socialize />} />
        {/* <Route path="/socialise" element={<Navigate to="/" replace />} /> */}
        <Route path="/outfits" element={<Outfits />} />
        <Route path="/localhub" element={<LocalHub />} />
        <Route path="/shoutouts" element={<ShoutOuts />} />
      </Routes>
    );
  }
}

export default RoutesComponent;
