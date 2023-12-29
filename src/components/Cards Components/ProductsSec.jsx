/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

// mui
import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "react-bootstrap";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import AlertSnackbar from "../AlertSnackbar";

// react router
import { Link } from "react-router-dom";

// redux
import { useDispatch } from "react-redux";
import { add } from "../../features/favoriteSlice";

// react
import { useState } from "react";

export default function ProductsSec() {
  return (
    <>
      <div className=" text-center ">
        <h1>Products</h1>
        <p className=" text-black-50 lh-lg pb-2 mt-4">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </p>
      </div>
      <Container>
        <Grid container spacing={2}>
          <Grid lg={3} md={6} sm={6} xs={12}>
            <ProductCard
              title="A winter women addrees that feets all womens around the world"
              category="Women addrees"
              image="https://preview.colorlib.com/theme/winkel/images/product-5.jpg.webp"
            />
          </Grid>
          <Grid lg={3} md={6} sm={6} xs={12}>
            <ProductCard
              title="A winter women addrees that feets all womens around the world"
              category="Women addrees"
              image="https://preview.colorlib.com/theme/winkel/images/product-6.jpg.webp"
            />
          </Grid>
          <Grid lg={3} md={6} sm={6} xs={12}>
            <ProductCard
              title="A winter women addrees that feets all womens around the world"
              category="Women addrees"
              image="https://preview.colorlib.com/theme/winkel/images/product-7.jpg.webp"
            />
          </Grid>
          <Grid lg={3} md={6} sm={6} xs={12}>
            <ProductCard
              title="A winter men jacket that feets all men around the world"
              category="men jacket"
              image="https://preview.colorlib.com/theme/winkel/images/product-8.jpg.webp"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export function ProductCard({
  image,
  category,
  description,
  product,
  id = 1,
  price = 60,
  title,
}) {
  const dispatch = useDispatch();
  // alert state
  const [showAlert, setShowAlert] = useState(false);

  // handeler functions
  const addToFavorite = (productToAdd) => {
    dispatch(add(productToAdd));
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div style={{ borderRadius: "5px" }} className="Allcard">
      <AlertSnackbar
        open={showAlert}
        onClose={handleCloseAlert}
        message="Product has been added to favorite successfully"
        severity="success"
      />
      <div className="imgContaner">
        <div style={{ maxHeight: "250px", overflow: "hidden" }}>
          <img src={image} className=" img-fluid " />
        </div>
        <div className="buttonsDev">
          <Link
            to={`/SingleProduct/${id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <button>
              View <RemoveRedEyeOutlinedIcon />
            </button>
          </Link>

          <button
            onClick={() => {
              addToFavorite(product);
            }}
          >
            Add To Favorit <FavoriteBorderIcon />
          </button>
        </div>
      </div>
      <h5 className="mt-2">{category}</h5>
      <p className=" text-black-50 lh-lg ">{title}</p>
      <div className="d-flex justify-content-between align-items-center ">
        <div>${price}</div>
        <div style={{ padding: "10px 0" }}>
          <StarBorderOutlinedIcon style={{ color: "gold" }} />
          <StarBorderOutlinedIcon style={{ color: "gold" }} />
          <StarBorderOutlinedIcon style={{ color: "gold" }} />
          <StarBorderOutlinedIcon style={{ color: "gold" }} />
          <StarBorderOutlinedIcon style={{ color: "gold" }} />
        </div>
      </div>
    </div>
  );
}
