import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const SideMenu = () => {
  const [Steps, setSteps] = useState("step1");
  const location = useLocation();
  useEffect(() => {
    const path = location.pathname;
    const cleanedPath = path.slice(1);
    console.log(cleanedPath);
    cleanedPath === "" ? setSteps("step1") : setSteps(cleanedPath);
  }, [location, Steps]);
  return (
    <div
      className="w-[30%] h-[620px] 
     bg-[hsl(243,100%,62%)] 
    flex flex-col pl-10 pt-9 rounded-xl gap-7"
    >
      <Link
        onClick={() => {
          setSteps("step1");
        }}
        to="/"
      >
        <div className="flex gap-2 items-center cursor-pointer">
          <div
            className={`${
              Steps === "step1"
                ? "bg-[hsl(217,100%,97%)]"
                : "bg-transparent border-2"
            } flex items-center justify-center w-10 h-10 rounded-full`}
          >
            <h1
              className={`font-bold ${
                Steps === "step1" ? "text-black" : "text-white"
              }`}
            >
              1
            </h1>
          </div>
          <div>
            <h6 className="text-xs text-[hsl(229,24%,87%)]">Step1</h6>
            <h1 className="text-xl text-white hover:underline">Your Info</h1>
          </div>
        </div>
      </Link>

      <Link
        onClick={() => {
          setSteps("step2");
        }}
        to="/step2"
      >
        <div className="flex gap-2 items-center cursor-pointer">
          <div
            className={`${
              Steps === "step2"
                ? "bg-[hsl(217,100%,97%)]"
                : "bg-transparent border-2"
            } flex items-center justify-center w-10 h-10 rounded-full`}
          >
            {" "}
            <h1
              className={`font-bold ${
                Steps === "step2" ? "text-black" : "text-white"
              }`}
            >
              2
            </h1>
          </div>
          <div>
            <h6 className="text-xs text-[hsl(229,24%,87%)]">Step2</h6>
            <h1 className="text-xl text-white hover:underline">Select plan</h1>
          </div>
        </div>
      </Link>
      <Link
        onClick={() => {
          setSteps("step3");
        }}
        to="/step3"
      >
        <div className="flex gap-2 items-center cursor-pointer">
          <div
            className={`${
              Steps === "step3"
                ? "bg-[hsl(217,100%,97%)]"
                : "bg-transparent border-2"
            } flex items-center justify-center w-10 h-10 rounded-full`}
          >
            {" "}
            <h1
              className={`font-bold ${
                Steps === "step3" ? "text-black" : "text-white"
              }`}
            >
              3
            </h1>
          </div>
          <div>
            <h6 className="text-xs text-[hsl(229,24%,87%)]">Step3</h6>
            <h1 className="text-xl text-white hover:underline">Add-Ons</h1>
          </div>
        </div>
      </Link>
      <Link
        onClick={() => {
          setSteps("step4");
        }}
        to="/step4"
      >
        <div className="flex gap-2 items-center cursor-pointer">
          <div
            className={`${
              Steps === "step4"
                ? "bg-[hsl(217,100%,97%)]"
                : "bg-transparent border-2"
            } flex items-center justify-center w-10 h-10 rounded-full`}
          >
            <h1
              className={`font-bold ${
                Steps === "step4" ? "text-black" : "text-white"
              }`}
            >
              4
            </h1>
          </div>
          <div>
            <h6 className="text-xs text-[hsl(229,24%,87%)]">Step4</h6>
            <h1 className="text-xl text-white hover:underline">Summary</h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SideMenu;
