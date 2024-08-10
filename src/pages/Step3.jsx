import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleAddOn } from "../redux/formSlice"; // Adjust the import path as necessary

const Step3 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addOns = useSelector((state) => state.form.addOns);
  const confirmed = useSelector((state) => state.form.confirmed);
  const handleCheckboxChange = (name, price) => {
    dispatch(toggleAddOn({ name, price }));
  };

  return (
    <div className={`${confirmed && "pointer-events-none opacity-50"} pl-16 pt-9 `} >
      <h1 className="text-4xl text-blue-800 font-bold mb-0">Pick Add-ons</h1>
      <p className="text-slate-500 text-sm font-bold mb-9">
        Add-ons help enhance your gaming experience.
      </p>
      <div className="flex flex-col gap-3">
        <div className="bg-gray-100 h-[100px] w-[500px] rounded-lg shadow-md flex justify-between items-center hover:border-2 hover:border-purple-400">
          <div className="flex items-center">
            <input
              disabled={confirmed}
              type="checkbox"
              className="mx-5 w-5 h-5"
              checked={!!addOns["Online Services"]}
              onChange={() => handleCheckboxChange("Online Services", "$1/mo")}
            />
            <div>
              <h1 className="text-xl text-blue-700 font-bold">
                Online Services
              </h1>
              <p className="text-sm text-gray-500">
                Access to multiplayer services
              </p>
            </div>
          </div>
          <h1 className="mr-5 text-purple-950 text-lg">+$1/mo</h1>
        </div>
        <div className="bg-gray-100 h-[100px] w-[500px] rounded-lg shadow-md flex justify-between items-center hover:border-2 hover:border-purple-400">
          <div className="flex items-center">
            <input
              disabled={confirmed}
              type="checkbox"
              className="mx-5 w-5 h-5"
              checked={!!addOns["Larger Storage"]}
              onChange={() => handleCheckboxChange("Larger Storage", "$2/mo")}
            />
            <div>
              <h1 className="text-xl text-blue-700 font-bold">
                Larger Storage
              </h1>
              <p className="text-sm text-gray-500">Extra 1TB of cloud save</p>
            </div>
          </div>
          <h1 className="mr-5 text-purple-950 text-lg">+$2/mo</h1>
        </div>
        <div className="bg-gray-100 h-[100px] w-[500px] rounded-lg shadow-md flex justify-between items-center hover:border-2 hover:border-purple-400">
          <div className="flex items-center">
            <input
              disabled={confirmed}
              type="checkbox"
              className="mx-5 w-5 h-5"
              checked={!!addOns["Customizable Profile"]}
              onChange={() =>
                handleCheckboxChange("Customizable Profile", "$2/mo")
              }
            />
            <div>
              <h1 className="text-xl text-blue-700 font-bold">
                Customizable Profile
              </h1>
              <p className="text-sm text-gray-500">
                Custom theme on your profile
              </p>
            </div>
          </div>
          <h1 className="mr-5 text-purple-950 text-lg">+$2/mo</h1>
        </div>
        <div className="flex items-center justify-between mt-10">
        <h2
          onClick={() => !confirmed && navigate("/step2")} // Prevent navigation when disabled
          className={`text-lg font-bold cursor-pointer ${
            confirmed ? "text-gray-400 cursor-not-allowed" : "text-green-600"
          }`}
        >
          Go Back
        </h2>
          <button
          disabled={confirmed}
            onClick={() => navigate("/step4")}
            className="bg-blue-800 disabled:bg-green-200 disabled:cursor-not-allowed w-[100px] h-10 px-2 text-white rounded-md cursor-pointer"
            >
            {confirmed ? "Confirmed" : "Next step"} 
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step3;
