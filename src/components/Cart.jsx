/* eslint-disable no-unreachable */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "react-bootstrap";
import DeleteIcon from "@mui/icons-material/Delete";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

// redux
import { useDispatch } from "react-redux";

// cart
import { removeFromCart, clearCart } from "../features/cartSlice";
// favorite
import { deleteFromFavorite } from "../features/favoriteSlice";
import { Link } from "react-router-dom";

import { useState } from "react";
import AlertSnackbar from "./AlertSnackbar";

export default function Cart() {
  const dispatch = useDispatch();
  const products = JSON.parse(localStorage.getItem("cart")) || [];
  const page = "cart";
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

  const clearEntireCart = () => {
    dispatch(clearCart());
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
        {products.length != 0 ? (
          <>
            <div style={{ padding: "50px 0" }}>
              {products.map((product) => (
                <SingleItem
                  key={product.id}
                  image={product.image}
                  category={product.category}
                  description={product.description}
                  price={product.price}
                  quantety={product.quantety}
                  product={product}
                  page={page}
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
                  clearEntireCart();
                  setClear(!clear);
                }}
              >
                Clear Cart
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
                Your cart is empty go to shop to add items!!
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

export function SingleItem({
  image,
  category,
  description,
  price,
  quantety = 1,
  product,
  removeItemFromCart,
  rerenderKey,
  page,
}) {
  // cart ops
  const dispatch = useDispatch();

  return (
    <div
      style={{
        padding: "25px 10px ",
        backgroundColor: "#fafafa",
        margin: "10px 0",
      }}
    >
      <Grid container spacing={3}>
        <Grid lg={2} md={2} sm={12} xs={12} className=" ps-5 ">
          <div>
            <img src={image} className=" img-fluid " />
          </div>
        </Grid>
        <Grid lg={4} md={4} sm={12} xs={12} className=" ps-5 ">
          <div className="centerCartItems">
            <div>
              <h5 className=" text-uppercase ">{category}</h5>
              <p className=" text-black-50 lh-lg">{description}</p>
            </div>
          </div>
        </Grid>
        <Grid lg={2} md={2} sm={4} xs={4} className=" ps-5 ">
          <div className="centerCartItems">Price: ${price}</div>
        </Grid>
        <Grid lg={2} md={2} sm={4} xs={4} className=" ps-5 ">
          <div className="centerCartItems">Quantety : {quantety}</div>
        </Grid>
        <Grid lg={2} md={2} sm={4} xs={4} className=" ps-5 ">
          <div className="centerCartItems">
            <span
              onClick={() => {
                removeItemFromCart(product);
              }}
            >
              <DeleteIcon style={{ color: "red", cursor: "pointer" }} />
            </span>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

// Todos :
// 1- Add delete confermetion dialog
// Send only product as prop
