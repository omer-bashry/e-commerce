/* eslint-disable no-unused-vars */
import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "react-bootstrap";
import DeleteIcon from "@mui/icons-material/Delete";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// redux
import { useDispatch } from "react-redux";

// components
import { SingleItem } from "./Cart";

import { Link } from "react-router-dom";
import { useState } from "react";
import AlertSnackbar from "./AlertSnackbar";

// cart
import { removeFromCart, clearCart } from "../features/cartSlice";
// favorite
import { deleteFromFavorite } from "../features/favoriteSlice";

export default function Favorite() {
  const dispatch = useDispatch();
  const favorites = JSON.parse(localStorage.getItem("favorite")) || [];
  const page = "favorite";
  // alert
  const [showAlert, setShowAlert] = useState(false);
  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  //clear cart
  const [clear, setClear] = useState(true);

  // cart opration handler functions
  const removeItemFromCart = (item) => {
    console.log(page);
    if (page == "favorite") {
      dispatch(deleteFromFavorite(item));
    } else if (page == "cart") {
      dispatch(removeFromCart(item));
    }
    setShowAlert(true);
  };
  return (
    <>
      <Container>
        <AlertSnackbar
          open={showAlert}
          onClose={handleCloseAlert}
          message={`Product has been deleted from the ${page} successfully`}
          severity="success"
        />
        {favorites.length != 0 ? (
          <>
            <div style={{ padding: "50px 0" }}>
              {favorites.map((favorite) => (
                <SingleItem
                  key={favorite.id}
                  image={favorite.image}
                  category={favorite.category}
                  description={favorite.description}
                  price={favorite.price}
                  quantety={favorite.quantety}
                  product={favorite}
                  page="favorite"
                  removeItemFromCart={removeItemFromCart}
                />
              ))}
            </div>
            <div className=" d-flex justify-content-center mb-3  ">
              <button
                style={{
                  backgroundColor: "red",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "20px",
                }}
                onClick={() => {
                  localStorage.setItem("favorite", JSON.stringify([])) || [];
                  setClear(!clear);
                }}
              >
                Clear Favorits
              </button>
            </div>
          </>
        ) : (
          <div className=" vh-100 d-flex justify-content-center align-items-center text-center">
            <div>
              <AddShoppingCartIcon
                style={{ fontSize: "200px", color: "#ccc" }}
              />
              <h3 className=" lh-lg mb-3 mt-3 ">
                Your favorite list is empty go to shop to add items!!
              </h3>
              <Link to="/shop">
                <button className="sedcond-button pt-3 ps-4 pe-4 pb-3 mt-3 ">
                  Go to shop
                </button>
              </Link>
            </div>
          </div>
        )}
      </Container>
    </>
  );
}
