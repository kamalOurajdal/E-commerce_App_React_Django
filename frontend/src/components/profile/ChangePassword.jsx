import React from "react";

function ChangePassword() {
  return (
    <div className="p-4">
        <h1 className="font-semibold mb-4">Change password</h1>
      <p className="text-sm ">
        It's a good idea to update your password regularly and to make sure it's
        unique from other passwords you use.
      </p>
      <ul className="mt-4 space-y-4">
        <li>
          <label htmlFor="current_password" className="block text-sm ml-4">Current password</label>
          <input
            type="text"
            id="current_password"
            className="pl-4 w-full border border-gray-300 p-2 rounded-md focus:outline-none"
          />
        </li>
        <li>
          <label htmlFor="new_password" className="block text-sm ml-4">New password</label>
          <input
            type="text"
            id="new_password"
            className="pl-4 w-full border border-gray-300 p-2 rounded-md focus:outline-none"
          />
        </li>
        <li>
          <label htmlFor="confirm_password" className="block text-sm ml-4">Confirm new password</label>
          <input
            type="text"
            id="confirm_password"
            className="pl-4 w-full border border-gray-300 p-2 rounded-md focus:outline-none"
          />
        </li>
      </ul>
      <button
            className=" bg-[#FA462D] text-sm mt-4  text-white px-4 py-2 rounded-md"
            
          >
            Save
          </button>
    </div>
  );
}

export default ChangePassword;
