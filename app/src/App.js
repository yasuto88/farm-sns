import FarmInfo from "./pages/farmInfo/FarmInfo";
import Home from "./pages/home/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return(
	<Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/farmInfo" element={<FarmInfo />} />
      </Routes>
    </Router>
  )
}

export default App;
