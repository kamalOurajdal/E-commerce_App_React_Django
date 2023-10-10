import React, { useState } from "react";

function PersonalInfo() {
  const [EditInfo, setEditInfo] = useState(false);
  const EditHandler = () => {
    setEditInfo(!EditInfo);
  };

  const [EditNews, setEditNews] = useState(false)
    const EditNewsHandler = () => {
        setEditNews(!EditNews);
    };

  const [name, setName] = useState("kamal ourajdal");
  const [birthday, setBirthday] = useState("2000-06-28");
  const [email, setEmail] = useState("kamalourajdal@gmail.com");
  const [phone, setPhone] = useState("+212607715898");
  const onchangeHandler = (e) => {
    console.log(e.target.value);
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "birthday":
        setBirthday(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "phone":
        setPhone(e.target.value);
        break;
      default:
        break;
    }
  };
  return (
    <div className="p-4">
      <div className="flex justify-between items-start">
        <div className="lg:w-1/3">
          <h1 className="font-semibold mb-4">Personal information</h1>
          <ul className="space-y-3">
            <li>
              <label htmlFor="name" className="flex flex-col">
                Full Name
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  readOnly={!EditInfo}
                  className="bg-transparent outline-none"
                  onChange={onchangeHandler}
                />
              </label>
            </li>
            <li>
              <label htmlFor="date" className="flex flex-col">
                Birthday
                <input
                  type="date"
                  name="date"
                  id="date"
                  value={birthday}
                  readOnly={!EditInfo}
                  className="bg-transparent outline-none "
                  onChange={onchangeHandler}
                />
              </label>
            </li>
            <li>
              <label htmlFor="email" className="flex flex-col">
                Email
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  readOnly={!EditInfo}
                  className="bg-transparent outline-none "
                  onChange={onchangeHandler}
                />
              </label>
            </li>
            <li>
              <label htmlFor="phone" className="flex flex-col">
                Phone number
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={phone}
                  readOnly={!EditInfo}
                  className="bg-transparent outline-none "
                  onChange={onchangeHandler}
                />
              </label>
            </li>
          </ul>
          <button
            className={`${
              EditInfo ? "" : "hidden"
            } bg-[#FA462D] text-sm mt-4  text-white px-4 py-2 rounded-md`}
            onClick={EditHandler}
          >
            Save
          </button>
        </div>

        <button
          className="border text-sm border-gray-500  px-4 py-2 rounded-md"
          onClick={EditHandler}
        >
          <i className="fa-solid fa-pen-to-square"></i> <span>Edit</span>
        </button>
      </div>
      <hr className="my-6 " />
      <div className="flex justify-between items-start ">
        <div className="">
          <h1 className="font-semibold mb-4">Newsletter preferences</h1>
          <p>Subscribe to receive news, tips and offers from Kan9ala.</p>
          <ul className="mt-4 flex flex-col space-y-2  ">
            <li>
              <label
                htmlFor="by_email"
                className=" relative text-sm flex items-center space-x-2 text-gray-500 cursor-pointer"
              >
                <input
                  type="checkbox"
                  name="by_email"
                  id="by_email"
                  disabled={!EditNews}
                  className="  outline-none  w-5 h-5 appearance-none border border-gray-500 rounded-sm checked:bg-[#FA462D] peer"
                />
                <i className="fa-solid fa-check absolute -left-1 font-bold opacity-0 text-white peer-checked:opacity-100  "></i>
                <p>By email</p>
              </label>
            </li>
            <li>
              <label
                htmlFor="by_sms"
                className="relative text-sm flex items-center space-x-2 text-gray-500 cursor-pointer"
              >
                <input
                  type="checkbox"
                  name="by_sms"
                  id="by_sms"
                  disabled={!EditNews}
                  className="  outline-none  w-5 h-5 appearance-none border border-gray-500 rounded-sm checked:bg-[#FA462D] peer"
                />
                <i className="fa-solid fa-check absolute -left-1 font-bold opacity-0 text-white peer-checked:opacity-100  "></i>
                <p>By SMS</p>
              </label>
            </li>
          </ul>
          <button
            className={`${
              EditNews ? "" : "hidden"
            } bg-[#FA462D] text-sm mt-4  text-white px-4 py-2 rounded-md`}
            onClick={EditNewsHandler}
          >
            Save
          </button>
        </div>
        <button
          className="border text-sm border-gray-500  px-4 py-2 rounded-md"
          onClick={EditNewsHandler}
        >
          <i className="fa-solid fa-pen-to-square"></i> <span>Edit</span>
        </button>
      </div>
    </div>
  );
}

export default PersonalInfo;
