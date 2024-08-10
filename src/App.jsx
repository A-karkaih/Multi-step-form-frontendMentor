import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideMenu from "./components/SideMenu";
import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import Step3 from "./pages/Step3";
import Step4 from "./pages/Step4";
const App = () => {
  return (
    <div className="w-[950px] h-[650px] bg-white flex gap-2 p-4 shadow-lg rounded-[15px]   ">
  <BrowserRouter >
      <SideMenu />
      <Routes>
        <Route path="/" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3 />} />
        <Route path="/step4" element={<Step4 />} />
      </Routes>
    </BrowserRouter>
    </div>
  
  );
};

export default App;
