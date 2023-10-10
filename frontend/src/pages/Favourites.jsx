import React, { useEffect, useState } from "react";
import LikedItem from "../components/favourites/LikedItem";
import AddListPopup from "../components/favourites/AddListPopup";
import { listNames as MyList } from "../components/favourites/Data";
import RecommendedProduct from "../components/RecommendedProduct";
import { Collapse } from "react-collapse";

function Favourites({
  favouriteItem,
  setFavouriteItem,
  addToCart,
  setSelectedListName,
  selectedListName,
  changeListTo,
  favouriteItemsWithList,
}) {
  const [listNames, setListNames] = useState(MyList);
  const [showAddListPopup, setShowAddListPopup] = useState(false);

  const removeFavouriteItem = (item) => {
    const updatedFavouriteItem = favouriteItem.filter(
      (product) => product.id !== item.id
    );
    setFavouriteItem(updatedFavouriteItem);
  };

  const addToFavourite = (product) => {
    const productExist = favouriteItem.find((item) => item.id === product.id);
    if (!productExist) {
      setFavouriteItem([...favouriteItem, { ...product, listName: "" }]);
    }
  };

  const openAddListPopup = () => {
    setShowAddListPopup(true);
  };
  const closeAddListPopup = () => {
    setShowAddListPopup(false);
  };

  const handleAddListName = (newListName) => {
    setListNames([...listNames, { name: newListName }]);
  };
  const deleteListName = (listName) => {
    const updatedLists = listNames.filter((list) => list.name !== listName);
    setListNames(updatedLists);
  };

  const [collapseIsOpen, setCollapseIsOpen] = useState(false);

  const toggleCollapse = () => {
    setCollapseIsOpen(!collapseIsOpen);
  };

  return (
    <section className="bg-[#f6f9fc] pb-32 pt-12">
      <div className="px-4 lg:px-0 lg:w-[84%] m-auto">
        {favouriteItem.length !== 0 ? (
          <>
            <h1 className="text-3xl font-semibold mb-9">Favourites</h1>
            <div className="flex flex-col lg:flex-row lg:space-x-8 mt-4">
              <div className=" lg:w-1/4 h-fit mb-6 lg:mb-0  text-center rounded-md">
                <h1
                  className="font-bold text-gray-600 border-b py-2 flex items-center justify-between px-4 lg:px-0"
                  onClick={toggleCollapse}
                >
                  My lists <i className="fa-solid fa-caret-down lg:hidden"></i>
                </h1>
                <div className="lg:hidden">
                  <Collapse isOpened={collapseIsOpen}>
                    <div className="space-y-2 pt-4 ">
                      {listNames.map((list, index) => {
                        return (
                          <div
                            key={index}
                            className="w-full bg-white shadow-md flex justify-between items-center border p-2 rounded cursor-pointer hover:bg-[#FFECEA] duration-300 ease-in-out "
                          >
                            <button
                              className=" w-full mr-2 text-left"
                              onClick={() => {
                                setSelectedListName(list.name);
                                toggleCollapse()
                              }}
                            >
                              <h1>{list.name}</h1>
                              <h6 className="text-xs text-gray-500">
                                {favouriteItemsWithList(list.name).length} items
                              </h6>
                            </button>
                            <button
                              className="w-8 h-8"
                              onClick={() => deleteListName(list.name)}
                            >
                              <i className="fa-solid fa-trash-can cursor-pointer text-gray-500 hover:text-black"></i>
                            </button>
                          </div>
                        );
                      })}
                      <button
                        className="text-center text-[#e94560] w-full  bg-white shadow-md  border p-2 rounded cursor-pointer hover:scale-105 duration-500 ease-in-out "
                        onClick={openAddListPopup}
                      >
                        <i className="fa-solid fa-circle-plus mr-1"></i>Add list
                      </button>
                      {showAddListPopup && (
                        <AddListPopup
                          closeAddListPopup={closeAddListPopup}
                          handleAddListName={handleAddListName}
                        />
                      )}
                    </div>
                  </Collapse>
                </div>

                <div className="space-y-2 pt-4 hidden lg:flex lg:flex-col">
                  {listNames.map((list, index) => {
                    return (
                      <div
                        key={index}
                        className="w-full bg-white shadow-md flex justify-between items-center border p-2 rounded cursor-pointer hover:bg-[#FFECEA] duration-300 ease-in-out "
                      >
                        <button
                          className=" w-full mr-2 text-left"
                          onClick={() => {
                            setSelectedListName(list.name);
                          }}
                        >
                          <h1>{list.name}</h1>
                          <h6 className="text-xs text-gray-500">
                            {favouriteItemsWithList(list.name).length} items
                          </h6>
                        </button>
                        <button
                          className="w-8 h-8"
                          onClick={() => deleteListName(list.name)}
                        >
                          <i className="fa-solid fa-trash-can cursor-pointer text-gray-500 hover:text-black"></i>
                        </button>
                      </div>
                    );
                  })}
                  <button
                    className="text-center text-[#e94560] w-full  bg-white shadow-md  border p-2 rounded cursor-pointer hover:scale-105 duration-500 ease-in-out "
                    onClick={openAddListPopup}
                  >
                    <i className="fa-solid fa-circle-plus mr-1"></i>Add list
                  </button>
                  {showAddListPopup && (
                    <AddListPopup
                      closeAddListPopup={closeAddListPopup}
                      handleAddListName={handleAddListName}
                    />
                  )}
                </div>
              </div>
              <div className="flex-grow">
                <div className="bg-white rounded-md shadow-md  space-x-6 flex justify-between items-center border-b px-4 border-[#e4e4e4] py-4">
                  <div
                    className="flex items-center
                space-x-2"
                  >
                    <input
                      type="checkbox"
                      name="select-all"
                      id="select-all"
                      className="w-5 h-5"
                    />
                    <label htmlFor="select-all">Select all</label>
                  </div>
                  <h4> list</h4>
                  <div className="flex items-center space-x-2">
                    <p>Sort by:</p>
                    <select name="sort" id="sort">
                      <option value="price">Price</option>
                      <option value="name">Name</option>
                    </select>
                  </div>
                </div>
                <div className="flex pt-4 ">
                  <div className="space-y-4 w-full">
                    {favouriteItemsWithList(selectedListName).map(
                      (product, index) => {
                        return (
                          <LikedItem
                            key={index}
                            product={product}
                            removeFavouriteItem={removeFavouriteItem}
                            addToCart={addToCart}
                            changeListTo={changeListTo}
                            handleAddListName={handleAddListName}
                            listNames={listNames}
                          />
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-semibold mb-9">
              You don’t seem to have any favourites yet
            </h1>
            <h6 className="mb-8">
              Save and arrange the best bits of your future home here until
              you’re ready for them.
            </h6>
            <div className="space-y-6 font-semibold text-sm lg:text-xl">
              <p className="space-x-2 lg:space-x-6">
                <i className="fa-regular fa-heart"></i>
                <span className="">Use the heart icon to save products</span>
              </p>
              <p className="space-x-2 lg:space-x-6">
                <i className="fa-solid fa-list "></i>
                <span>Save your products to different listNames</span>
              </p>
              <p className="space-x-2 lg:space-x-6">
                <i className="fa-regular fa-user "></i>
                <span>
                  Stay logged in to view saved items on different devices
                </span>
              </p>
            </div>
            <button
              className="text-center text-[#e94560] w-44 mt-8 bg-white shadow-md  border p-2 rounded cursor-pointer hover:scale-105 duration-500 ease-in-out "
              onClick={openAddListPopup}
            >
              <i className="fa-solid fa-circle-plus mr-1"></i>Add list
            </button>
            {showAddListPopup && (
              <AddListPopup
                closeAddListPopup={closeAddListPopup}
                handleAddListName={handleAddListName}
              />
            )}
          </>
        )}
        <RecommendedProduct
          addToCart={addToCart}
          addToFavourite={addToFavourite}
        />
      </div>
    </section>
  );
}

export default Favourites;
