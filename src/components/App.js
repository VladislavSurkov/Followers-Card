import { Routes, Route } from "react-router-dom";
import Tweets from "pages/Tweets/Tweets";
import Home from "pages/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
