import React, { useState } from "react";
import profile_img from "../media/profile2.jpg";
import { Collapse } from "react-collapse";
import PersonalInfo from "../components/profile/PersonalInfo";
import ChangePassword from "../components/profile/ChangePassword";
import DeleteAccount from "../components/profile/DeleteAccount";
import { Link } from "react-router-dom";

function Profile() {
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  return (
    <section className=" pb-20 pt-10 ">
      <div className=" px-4 lg:px-0 lg:w-[84%] m-auto">
        <div className=" mb-6">
          <h1 className="font-semibold text-4xl mb-6">Hi Kamal!</h1>
          <p className="text-sm">
            Need to change account?{" "}
            <Link to={"/login"} className="font-semibold">
              Log out
            </Link>{" "}
          </p>
        </div>
        <div className=" rounded-md grid  lg:grid-cols-2 gap-4 lg:gap-14">
          <div className=" bg-white pb-6 h-fit  flex flex-col  bg-fixed bg-cover bg-center shadow-md">
            {<img src={profile_img} alt="" className=" rounded-t-md" />}
            <div className="p-4">
              <h3 className="font-bold text-2xl mb-2">
                Welcome to your Kan9ala account!
              </h3>
              Welcome to your exclusive space at Kan9ala, where you have the
              freedom to effortlessly update your information and make it truly
              yours.
            </div>
          </div>

          <div className="bg-white p-4">
            <h1 className="font-semibold mb-4 text-lg">Your profile</h1>
            <hr />
            <div
              className="flex items-center justify-between py-4 border-b cursor-pointer"
              onClick={() => toggle(1)}
            >
              <div className="flex items-center ">
                <i className="fa-solid fa-user mr-5 text-xl "></i>
                <div>
                  <h1>kamal ourajdal</h1>
                  <p className="text-xs">View and edit your information</p>
                </div>
              </div>
              <i className="fa-solid fa-angle-right"></i>
            </div>
            <Collapse isOpened={open === 1}>
              <PersonalInfo />
            </Collapse>
            <div
              className="cursor-pointer flex items-center justify-between py-4 border-b"
              onClick={() => toggle(2)}
            >
              <div className="flex items-center">
                <i className="fa-solid fa-lock mr-5 text-xl"></i>
                <div>
                  <h1>Change password</h1>
                  <p className="text-xs">Require current password</p>
                </div>
              </div>
              <i className="fa-solid fa-angle-right"></i>
            </div>
            <Collapse isOpened={open === 2}>
              <ChangePassword />
            </Collapse>
            <div
              className="cursor-pointer flex items-center justify-between py-4 border-b"
              onClick={() => toggle(3)}
            >
              <div className="flex items-center ">
                <i className="fa-solid fa-trash-can mr-5 text-xl"></i>
                <div>
                  <h1>Delete account</h1>
                  <p className="text-xs">Leave whenever you wish</p>
                </div>
              </div>
              <i className="fa-solid fa-angle-right"></i>
            </div>
            <Collapse isOpened={open === 3}>
              <DeleteAccount />
            </Collapse>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
