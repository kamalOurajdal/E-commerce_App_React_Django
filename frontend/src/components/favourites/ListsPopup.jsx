import React, { useState } from "react";

function ListsPopup({
  product,
  closeListNamesPopup,
  changeListTo,
  handleAddListName,
  listNames,
}) {
  const [isAddListPopupOpen, setIsAddListPopupOpen] = useState(false);
  const openAddListPopup = () => {
    setIsAddListPopupOpen(true);
  };
  const closeAddListPopup = () => {
    setIsAddListPopupOpen(false);
  };

  const [listName, setListName] = useState("");
  const onChangeHandler = (e) => {
    const newListName = e.target.value;
    setListName(newListName);
  };

  const handleAddListButton = () => {
    //check if the listName already exist in the listNames
    const isListNameExist = listNames.find(
      (list) => list.name.toLowerCase() === listName.toLowerCase()
    );
    if (isListNameExist) {
      alert("list name already exist");
    } else {
      if (isAddListPopupOpen) {
        if (listName) {
          handleAddListName(listName);
          closeAddListPopup();
          setListName("");
        }
      } else {
        openAddListPopup();
      }
    }
  };
 
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-black opacity-10 "></div>

        <div className="bg-white z-50 w-80 lg:w-1/3 rounded-lg pb-4">
          <div className=" flex justify-between items-center border-b py-2 px-4">
            <h1 className=" font-semibold ">Move to another list</h1>
            <i
              className="fa-solid fa-xmark text-gray-400 cursor-pointer text-2xl"
              onClick={closeListNamesPopup}
            ></i>
          </div>

          <div className=" h-52 overflow-y-auto w-full">
            <div
              className={`${
                isAddListPopupOpen ? "justify-between " : "justify-center"
              } flex rounded border-b`}
            >
              <input
                type="text"
                value={listName}
                placeholder="list name"
                className={`${
                  isAddListPopupOpen ? "flex-grow pl-12 border-r " : ""
                } w-0 outline-none text-sm text-center `}
                onChange={onChangeHandler}
              />
              <button
                className={`${
                  isAddListPopupOpen ? "bg-[#e94560] bg-opacity-20" : "w-full"
                }   text-center text-[#e94560]  p-2 px-4  cursor-pointer `}
                onClick={() => {
                  handleAddListButton();
                }}
              >
                <i
                  className="fa-solid fa-circle-plus mr-1"
                  onClick={() => {}}
                ></i>
                <span className={`${isAddListPopupOpen ? "hidden" : ""}`}>
                  Add list
                </span>
              </button>
            </div>
            {listNames.map((list, index) => {
              const handleListNamesPopup = () => {
                closeListNamesPopup();
                changeListTo(product, list.name);
              };
              return (
                <button
                  key={index}
                  className=" w-full  bg-white text-sm flex justify-center items-center border-b p-2 text-center rounded cursor-pointer hover:bg-[#e94560] hover:bg-opacity-20 duration-300 ease-in-out"
                  onClick={handleListNamesPopup}
                >
                  {list.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListsPopup;
