import { useState } from "react";
import Button from "./Button";

function Reservation() {
  // const [Date, setDate] = useState("");
  const [Time, setTime] = useState("");
  const [People, setPeople] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log("Date:", Date);
    console.log("Time:", Time);
    console.log("People:", People);
    console.log("Name:", name);
    console.log("phoneNumber:", phoneNumber);
    console.log("Email:", email);
  };

  return (
    <div className=" relative  h-screen w-full bg-gray-100 sm:max-h-screen">
      <img
        className=" max-w-screen h-full "
        src="https://pato-place-seven.vercel.app/static/image/pexels-mikhail-nilov-7820325.jpg"
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center px-4 text-white text-center">
        <div className="font-bold text-7xl sm:text-4xl  lg:text-6xl mb-4">
          RESERVATION
        </div>
      </div>
      <div className="grid  justify-center mt-3">
        <h4>Reservation</h4>
        <h3> BOOK TABLE</h3>
      </div>

      <div className=" grid  grid-cols-3 justify-center   lg:ml-20 lg:mr-20 gap-5">
        {/* <label>
          Date
          <input
            className="grid sm:grid-cols-1 justify-center text-black p-2 rounded  sm:w-full bg-gray-200 border border-gray-400"
            type="text"
            value={Date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="Enter Your Date"
          />
        </label> */}

        <label>
          Time
          <input
            className="grid justify-center text-black p-2 rounded  sm:w-full sm:grid-cols-1 border  bg-gray-200"
            type="text"
            value={Time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="Time"
          />
        </label>
        <label>
          People
          <input
            className="grid  justify-center text-black p-2 rounded  sm:w-full items-center sm:grid-cols-1 border  bg-gray-200"
            type="text"
            value={People}
            onChange={(e) => setPeople(e.target.value)}
            placeholder="People"
          />
        </label>
        <label>
          Name
          <input
            className="grid  justify-center text-black p-2  rounded  sm:w-full sm:grid-cols-1  border bg-gray-200"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </label>
        <label>
          phoneNumber
          <input
            className="grid  justify-center text-black p-2  rounded  sm:w-full sm:grid-cols-1 border  bg-gray-200"
            type="text"
            value={phoneNumber}
            onChange={(e) => setphoneNumber(e.target.value)}
            placeholder="PhoneNumber"
          />
        </label>
        <label>
          Email
          <input
            className="grid  justify-center text-black p-2  rounded   sm:grid-cols-1 sm:w-full border bg-gray-200"
            type="text"
            value={name}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </label>
      </div>
      <div className=" grid justify-center mt-5 mb-5">
        <Button
          classes={"bg-orange-500 h-10 w-30 rounded hover:bg-red-600"}
          label="Submit"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}

export default Reservation;
