import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFormData } from "../redux/formSlice";
const Step1 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form);
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    dispatch(setFormData({ name: e.target.name, value: e.target.value }));
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Check if each field is empty and set the corresponding error
    if (!formData.name) newErrors.name = "This field is required";
    if (!formData.email) newErrors.email = "This field is required";
    if (
      !formData.phone ||
      !/^(\+212\s?[6|7]\d{2}\s?\d{3}\s?\d{3})$/.test(formData.phone)
    ) {
      newErrors.phone = "Please enter a valid Moroccan phone number";
    }
    console.log(formData);
    // If there are errors, update the error state
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // If no errors, navigate to the next step
      navigate("/step2");
    }
  };

  return (
    <div className="pl-16 pt-9">
      <h1 className="text-4xl text-blue-800 font-bold mb-0">Personal Info</h1>
      <p className="text-slate-500 text-sm font-bold mb-9">
        please provide your name ,email address , and phoneNumber.{" "}
      </p>
      <form
        action="post"
        onSubmit={handleSubmit}
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col gap-2">
          <div className="flex - justify-between">
            <span>Name</span>
            {errors.name && (
              <span className="text-red-500 text-sm">{errors.name}</span>
            )}
          </div>

          <input
            className="border-2  pl-3 py-2 rounded-md"
            type="text"
            name="name"
            placeholder="your Name"
            onChange={handleChange}
            value={formData.name}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex - justify-between">
            <span>EmailAddress</span>
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email}</span>
            )}
          </div>

          <input
            className="border-2 pl-3 py-2 rounded-md"
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            value={formData.email}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex - justify-between">
            <span>PhoneNmber</span>
            {errors.phone && (
              <span className="text-red-500 text-sm">{errors.phone}</span>
            )}
          </div>

          <input
            className="border-2 pl-3 py-2 rounded-md"
            type="text"
            name="phone"
            placeholder="e.g. +212 6XX XXX XXX"
            onChange={handleChange}
            value={formData.phone}
          />
        </div>
        <div className="flex justify-end">
          <button className="bg-blue-800 w-[100px] h-10 px-2 text-white rounded-md cursor-pointer">
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step1;
