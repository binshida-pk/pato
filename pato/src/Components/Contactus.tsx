import Button from "./Button";

import { useState } from "react";

function Contactus() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  };

  return (
    <>
      <div className="relative max-h-screen  bg-gray-100 px-0 ">
        <img
          src="https://pato-place-seven.vercel.app/static/image/pexels-fotios-photos-1279330.jpg"
          alt="Restaurant"
          className="w-full h-full "
        />

        <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 mt-4 p-5">
          <div className="w-full grid grid-cols-1 ml-5 lg:w-1/2  mt-4 ">
            <input
              className="grid text-black p-2 rounded w-full  sm:grid-cols-1  mt-3 bg-gray-200"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />

            <input
              className=" text-black p-2 rounded w-full mt-3  bg-gray-200"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              className=" text-black p-2 rounded w-full h-30  mt-3  bg-gray-200"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
            />
          </div>
          <div className="   text-red-500 grid sm:grid-cols-1 font-semibold justify-center  mt-5">
            <div>
              ADDRESS
              <br />
              The Palms Shopping Mall, 1, Bisway Street, Oniru, <br />
              Victoria Island, Lagos, Nigeria.
            </div>
            <div className="text-red-500 font-semibold mt-5">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-red-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19.0225 4 14 8.98132m0 0 3.03.00002M14 8.98132V5.99998m4.2327 8.51492-1.1431-1.1439c-1.143-1.1439-1.9758-.3696-2.8382.4565-.3159.3161-.7443.4936-1.1911.4936-.4467 0-.8751-.1775-1.191-.4936L9.998 11.9549c-.65643-.6564-.92477-1.4591 0-2.38383.8488-.86837 1.6837-1.61177.4926-2.8037L9.2995 5.57544c-.90492-.90556-1.99137-.383-2.61843.23625-3.13257 3.1118-1.72021 6.77001 1.41066 9.90141s6.78747 4.5465 9.90477 1.4254c.1744-.1461.551-.565.6473-.7712.0962-.2062.1461-.4311.1461-.6587 0-.2277-.0499-.4525-.1461-.6588-.0963-.2062-.2366-.3888-.4111-.5349Z"
                />
              </svg>
              PHONE
              <br />
              +2349048582274
            </div>
            <div className="text-red-500  font-semibold mt-5">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-red-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7H5a2 2 0 0 0-2 2v4m5-6h8M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m0 0h3a2 2 0 0 1 2 2v4m0 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6m18 0s-4 2-9 2-9-2-9-2m9-2h.01"
                />
              </svg>
              EMAIL
              <br />
              ayomiposo5@gmail.com
            </div>
          </div>
        </div>

        <div className="grid justify-center mb-5">
          <Button
            classes={"bg-orange-500 h-10 w-30 rounded hover:bg-red-600"}
            label="Submit"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </>
  );
}

export default Contactus;
