import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setConfirmed } from "../redux/formSlice"; 
const Step4 = () => {
  const { plan, isYearly, price, addOns ,confirmed} = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const hadleDisable = () => {
    dispatch(setConfirmed(true))
  };
  return (
    <div className="pl-16 pt-9">
      <h1 className="text-4xl text-blue-800 font-bold mb-0">Finishing up</h1>
      <p className="text-slate-500 text-sm font-bold mb-9">
        Double-check everything looks OK before confirming.
      </p>
      <div className="bg-gray-200 h-[200px] w-[500px] shadow-md rounded-md pl-4 pt-2 pr-2">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-semibold text-blue-900 text-lg">
              {plan} ({isYearly ? "Yearly" : "Monthly"})
            </h1>
            <a className="text-blue-500 hover:underline" href="/step2">
              change
            </a>
          </div>
          <h1 className="text-purple-900 text-lg font-semibold ">{price}</h1>
        </div>
        <div>
          <hr className="h-[2px] bg-black mt-1" />
        </div>
        <div className="flex flex-col gap-3 mt-4 ">
          {Object.keys(addOns).map((key, index) => {
            return (
              <div key={index} className=" flex justify-between">
                <h1> {key}</h1>
                <h1 className="">{addOns[key]}</h1>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-between px-3 mt-4">
        <h1>Total (per month) </h1>
        <h1 className="text-xl text-blue-700 font-bold">$12/mo</h1>
      </div>
      <div className="flex items-center justify-between mt-10">
        <h2
          onClick={() => !confirmed && navigate("/step3")} // Prevent navigation when disabled
          className={`text-lg font-bold cursor-pointer ${
            confirmed ? "text-gray-400 cursor-not-allowed" : "text-green-600"
          }`}
        >
          Go Back
        </h2>
        <button
          disabled={confirmed}
          onClick={hadleDisable}
          className="bg-blue-800 disabled:bg-green-200 disabled:cursor-not-allowed w-[100px] h-10 px-2 text-white rounded-md cursor-pointer"
        >
        {confirmed ? "Confirmed" : "Confirme"}  
        </button>
      </div>
    </div>
  );
};

export default Step4;
