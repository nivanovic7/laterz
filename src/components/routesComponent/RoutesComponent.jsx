import { Route, Routes } from "react-router-dom";
import Socialize from "../../pages/socialize/Socialize";
import Outfits from "../../pages/outfits/Outfits";
import LocalHub from "../../pages/localHub/localHub";
import ShoutOuts from "../../pages/shoutOuts/ShoutOuts";

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Socialize />} />
      <Route path="/outfits" element={<Outfits />} />
      <Route path="/local-hub" element={<LocalHub />} />
      <Route path="/shout-outs" element={<ShoutOuts />} />
    </Routes>
  );
}

export default RoutesComponent;
