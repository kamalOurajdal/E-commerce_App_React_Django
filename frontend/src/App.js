import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Card from "./pages/Cart";
import Help from "./pages/Help";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Favourites from "./pages/Favourites";
import Data from "./components/home/Data";
import { useEffect, useState } from "react";
import ProductDetails from "./pages/ProductDetails";
import NewProducts from "./components/product/NewProducts";
import SearchResult from "./pages/SearchResult";
import { useQuery, gql } from "@apollo/client";
import Test from "./pages/Test";

function App() {
  const GET_PRODUCTS = gql`
    {
      allProducts {
        id
        rating
        isPromotion
        promotionPrice
        price
        name
        cover
        countInStock
        createdAt
        description

        images {
          image
        }
        colors {
          color
        }
        categories {
          category
        }
        brands {
          brand
        }
        sizes {
          size
        }
      }
    }
  `;
  const GET_PROMOTIONS = gql`
    {
      promotions {
        isPromotion
        id
        promotionPrice
        rating
        price
        name
        cover
        countInStock
        createdAt
        description

        images {
          image
        }
        colors {
          color
        }
        categories {
          category
        }
        brands {
          brand
        }
        sizes {
          size
        }
      }
    }
  `;

  const [products, setProducts] = useState([]);
  // products that has promotions
  const [promotions, setPromotions] = useState([]);
  const { loading: loadingProducts, error: errorProducts, data: dataProducts } = useQuery(GET_PRODUCTS);

  useEffect(() => {
    if (dataProducts) {
      setProducts(dataProducts.allProducts);
      console.log("data", products);
    }

    if (loadingProducts) console.log("loading ......");
    if (errorProducts) console.log("error ......");
  }, [dataProducts]);

  const { productItems } = Data;
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    const productExist = cartItem.find((item) => item.id === product.id);
    if (productExist) {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExist, qty: productExist.qty + 1 }
            : item
        )
      );
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }]);
    }
  };

  const decrementQty = (product) => {
    const productExist = cartItem.find((item) => item.id === product.id);
    if (productExist.qty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExist, qty: productExist.qty - 1 }
            : item
        )
      );
    }
  };

  const addToFavourite = (product) => {
    const productExist = favouriteItem.find((item) => item.id === product.id);
    if (!productExist) {
      setFavouriteItem([...favouriteItem, { ...product, listName: "" }]);
    }
  };

  const [favouriteItem, setFavouriteItem] = useState([]);
  const [selectedListName, setSelectedListName] = useState("All");

  const changeListTo = (product, listName) => {
    const productExist = favouriteItem.find((item) => item.id === product.id);
    if (productExist) {
      setFavouriteItem(
        favouriteItem.map((item) =>
          item.id === product.id
            ? { ...productExist, listName: listName }
            : item
        )
      );
    }
  };
  const favouriteItemsWithList = (listName) => {
    if (listName === "All") {
      return favouriteItem;
    }
    return favouriteItem.filter((item) => item.listName === listName);
  };

  return (
    <div className=" w-screen font-[poppins] ">
      <Header nbrItem={cartItem.length} />
      <Routes>
        <Route path="/" exact>
          <Route path="test" element={<Test products={products} />} />
          <Route
            index
            element={
              <Home
                productItems={products}
                addToCart={addToCart}
                addToFavourite={addToFavourite}
              />
            }
          />
          <Route
            path="card"
            element={
              <Card
                decrementQty={decrementQty}
                cartItem={cartItem}
                addToCart={addToCart}
                setCartItem={setCartItem}
                addToFavourite={addToFavourite}
              />
            }
          />
          <Route path="help" element={<Help />} />
          <Route path="about" element={<About />} />
          <Route path="search" element={<SearchResult />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route
            path="favourites"
            element={
              <Favourites
                favouriteItem={favouriteItem}
                setFavouriteItem={setFavouriteItem}
                addToCart={addToCart}
                setSelectedListName={setSelectedListName}
                selectedListName={selectedListName}
                changeListTo={changeListTo}
                favouriteItemsWithList={favouriteItemsWithList}
              />
            }
          />
        </Route>
        <Route path="product_details" element={<ProductDetails addToCart={addToCart}/>} />
        <Route path="products">
          <Route
            path="new"
            element={
              <NewProducts
                addToCart={addToCart}
                addToFavourite={addToFavourite}
              />
            }
          />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
