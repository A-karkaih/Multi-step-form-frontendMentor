import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setPlan, setIsYearly } from "../redux/formSlice"; 

const Step2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { plan, isYearly , confirmed } = useSelector((state) => state.form);

  const handleToggle = (e) => {
    const isChecked = e.target.checked;
    dispatch(setIsYearly(isChecked));
    console.log(isChecked);
  };

  const handlePlanChange = (plan,price) => {
    dispatch(setPlan({plan,price}));
  };

  return (
    <div className={`${confirmed && "pointer-events-none opacity-50"} pl-16 pt-9 `} >
      <h1 className="text-4xl text-blue-800 font-bold mb-0">
        Select your plan
      </h1>
      <p className="text-slate-500 text-sm font-bold mb-9">
        You have the option of monthly or yearly billing.
      </p>
      <div className="flex gap-4 w-[530px]">
        <div
          onClick={() => handlePlanChange("Arcade" , `${isYearly ? "$19/y" : "$9/mo"}`)}
          className={`${
            plan === "Arcade"
              ? "bg-green-300"
              : "bg-transparent hover:border-blue-700 hover:bg-slate-50"
          } h-[200px] flex-1 rounded-md border-2 cursor-pointer`}
        >
          <div className=" bg-transparent ml-4 mt-6 mb-12">
            <img className=" w-14 h-14" src="/icon-arcade.svg" alt="Arcade" />
          </div>
          <div className="ml-4">
            <h2 className="text-green-900 font-extrabold text-lg">Arcade</h2>
            <p className="text-[16px] text-gray-500">
              {isYearly ? "$19/y" : "$9/mo"}
            </p>
          </div>
        </div>
        <div
          onClick={() => handlePlanChange("Advanced",`${isYearly ? "$22/y" : "$12/mo"}`)}
          className={`${
            plan === "Advanced"
              ? "bg-green-300"
              : "bg-transparent hover:border-blue-700 hover:bg-slate-50"
          } h-[200px] flex-1 rounded-md border-2 cursor-pointer`}
        >
          <div className="  ml-4 mt-6 mb-12 bg-transparent">
            <img
              className="w-14 h-14"
              src="/icon-advanced.svg"
              alt="Advanced"
            />
          </div>
          <div className="ml-4">
            <h2 className="text-green-900 font-extrabold text-lg">Advanced</h2>
            <p className="text-[16px] text-gray-500">
              {isYearly ? "$22/y" : "$12/mo"}
            </p>
          </div>
        </div>
        <div
          onClick={() => handlePlanChange("Pro",`${isYearly ? "$25/y" : "$15/mo"}`)}
          className={`${
            plan === "Pro"
              ? "bg-green-300"
              : "bg-transparent hover:border-blue-700 hover:bg-slate-50"
          } h-[200px] flex-1 rounded-md border-2 cursor-pointer`}
        >
          <div className="   ml-4 mt-6 mb-12 bg-transparent">
            <img className="w-14 h-14" src="/icon-pro.svg" alt="Pro" />
          </div>
          <div className="ml-4">
            <h2 className="text-green-900 font-extrabold text-lg">Pro</h2>
            <p className="text-[16px] text-gray-500">
              {isYearly ? "$25/y" : "$15/mo"}
            </p>
          </div>
        </div>
      </div>
      <div className="w-[530px] h-14 bg-slate-200 mt-5 rounded-md flex justify-center items-center gap-3">
        <span>Monthly</span>
        <label className="inline-flex items-center cursor-pointer">
          <input
            checked={isYearly}
            type="checkbox"
            onChange={handleToggle}
            className="sr-only peer"
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
        <span>Yearly</span>
      </div>
      <div className="flex items-center justify-between mt-10">
        <h2
          onClick={() => !confirmed && navigate("/")} 
          className={`text-lg font-bold cursor-pointer ${
            confirmed ? "text-gray-400 cursor-not-allowed" : "text-green-600"
          }`}
        >
          Go Back
        </h2>
          <button
          disabled={confirmed}
            onClick={() => navigate("/step3")}
            className="bg-blue-800 disabled:bg-green-200 disabled:cursor-not-allowed w-[100px] h-10 px-2 text-white rounded-md cursor-pointer"
            >
            {confirmed ? "Confirmed" : "Next step"} 
          </button>
        </div>
    </div>
  );
};

export default Step2;
