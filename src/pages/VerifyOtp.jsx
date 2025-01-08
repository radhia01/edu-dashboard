import { useRef, useState } from "react";
import { axiosInstance } from "../api/axios";
import { useParams, useNavigate } from "react-router-dom";
import Error from "./Error";

function VerifyOtp() {
  const { id } = useParams();
  const navigate = useNavigate();
  const inputRef = useRef([]);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState(false);

  const handleChange = (index, e) => {
    const { value } = e.target;
    const newOTP = [...otp];
    newOTP[index] = value;
    setOtp(newOTP);
    if (value.length === 1 && inputRef.current[index + 1]) {
      inputRef.current[index + 1].focus();
    }
  };

  const handleSubmit = async () => {
    const idUser = parseInt(id);
    const finalOTP = parseInt(otp.join(""));
    try {
      const response = await axiosInstance.post("/verify/otp", {
        otp: finalOTP,
        id: idUser,
      });
      if (response) {
        navigate("/reset/password");
      }
    } catch (error) {
      setError(error?.response?.data?.message);
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-full max-w-lg rounded border border-gray-400 flex flex-col gap-4">
        <div className="flex justify-center w-full bg-gray-400 p-4 text-white">
          <h1 className="text-xl font-bold">Verify Your OTP</h1>
        </div>
        <div className="flex gap-4 justify-center items-center p-10">
          {[1, 2, 3, 4].map((element, index) => (
            <input
              key={index}
              ref={(el) => (inputRef.current[index] = el)} // Assigning each input to the ref
              maxLength={1}
              value={otp[index]}
              className="text-black h-12 w-12 bg-gray-300 text-lg text-center"
              onChange={(e) => handleChange(index, e)}
            />
          ))}
        </div>
        <div className="flex py-4 justify-center">
          <button
            className="bg-black rounded text-white py-4 px-2 w-1/2 hover:bg-orange-500"
            onClick={handleSubmit}
          >
            SEND
          </button>
        </div>
      </div>
      {error && <Error message={error} />}
    </div>
  );
}

export default VerifyOtp;
