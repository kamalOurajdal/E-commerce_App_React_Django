import React, { useState } from "react";

function AddListPopup({ closeAddListPopup, handleAddListName}) {
  // onchange handler
  const [listName, setListName] = useState("")
  const onChangeHandler = (e) =>{
    const newListName = e.target.value;
    setListName(newListName)
  }
  return (
    <>
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black bg-opacity-50 "></div>

          <div className="bg-white z-50 w-80 lg:w-1/3 rounded-lg px-4 pb-4">
            <div className=" rounded-lg ">
              <div className="flex justify-between items-center">
                <h1 className=" font-semibold">Add to list</h1>
                <i
                  className="fa-solid text-gray-400 fa-xmark cursor-pointer text-2xl"
                  onClick={closeAddListPopup}
                ></i>
              </div>
              <hr />
            </div>
            <div className=" mt-4 flex flex-col items-center space-y-1">
              <div className="text-left w-full">
                <label className="block text-sm ml-4">List name</label>
                <input
                  type="text"
                  className="pl-4 w-full border border-gray-300 p-2 rounded-md focus:outline-none"
                  onChange={onChangeHandler}
                />
                <h6 className="text-xs text-right mt-1">0/50</h6>
                
              </div>
                <button
                  className="w-24  px-4 py-2 rounded-md bg-[#e94560] text-white hover:scale-[1.02] hover:shadow-md duration-200 ease-in-out"
                  onClick={() => {handleAddListName(listName);closeAddListPopup()}}
                >
                  save
                </button>
            </div>
          </div>
        </div>
    </>
  );
}

export default AddListPopup;
