import { Route, Router, Routes } from "react-router-dom";
import Socialize from "./pages/socialise/Socialize";
import LocalHub from "./pages/localHub/localHub";
import ShoutOuts from "./pages/shoutOuts/ShoutOuts";
import Outfits from "./pages/outfits/Outfits";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Socialize />} />
        <Route path="/outfits" element={<Outfits />} />
        <Route path="/local-hub" element={<LocalHub />} />
        <Route path="/shout-outs" element={<ShoutOuts />} />
      </Routes>
    </Router>
  );
}

export default App;
