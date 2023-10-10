import React from "react";
import { Link } from "react-router-dom";

function DeleteAccount() {
  return (
    <div className="p-4">
      <h1 className="font-semibold mb-4">Delete account</h1>
      <p>
        Is it time to bid farewell? We genuinely appreciate your presence with
        us, and we'll miss you! When you choose to delete your account at
        Kan9ala, please be aware of the following:
      </p>
      <ul className="mt-8 leading-8 text-gray-700 text-sm">
        <li>
          <i className="fa-solid fa-circle fa-xs mr-2 text-gray-400"></i>All your
          personal information and shopping lists will be securely deleted.
        </li>
        <li>
          <i className="fa-solid fa-circle fa-xs mr-2 text-gray-400"></i>
          Regrettably, you won't have access to your Kan9ala Family membership
          or its associated benefits any longer.
        </li>
        <li>
          <i className="fa-solid fa-circle fa-xs mr-2 text-gray-400"></i>For legal
          and tax purposes, we will retain your purchase history, as required.
        </li>
      </ul>
      <h6 className="mt-8 text-sm mb-4">
        Remember that you are always welcome back!
      </h6>
      <h1 className="font-semibold">Any questions?</h1>
      <h4 className="text-sm mt-2">
        Contact{" "}
        <Link to={"/contact"} className="underline">
          customer service{" "}
        </Link>{" "}
      </h4>
      <hr className="my-4" />
      <div className="space-y-4">
        <h1 className="font-bold">password</h1>
        <p className="text-sm ">
          Confirm with your password to continue and delete your account.
        </p>
        <label htmlFor="password" className="block text-sm ml-4">password</label>
        <input
          type="password"
          id="password"
          className="pl-4 w-full border border-gray-300 p-2 rounded-md focus:outline-none"
        />
        <button
            type="submit"
            className=" pl-4  text-white border bg-red-500 px-4 py-2 rounded-md mt-4"
            >
            Delete account
        </button>
      </div>
    </div>
  );
}

export default DeleteAccount;
