/* eslint-disable no-unused-vars */
import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "react-bootstrap";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CircularProgress from "@mui/material/CircularProgress";

// redux
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchSingleProduct } from "../features/productsSlice";
// cart
import { addToCart, selectCart } from "../features/cartSlice";

//routers
import { useParams } from "react-router-dom";

// components
import Error from "./Erorr";
import AlertSnackbar from "./AlertSnackbar";

export default function SingleProduct() {
  // get single product
  const { productId } = useParams();
  const dispatch = useDispatch();
  const singleProduct = useSelector((state) => state.products.singleProduct);
  const status = useSelector((state) => state.products.status);

  // add to cart
  const cart = useSelector(selectCart);
  console.log(cart);
  const [quantety, setQuantety] = useState(1);
  const cartObject = {
    ...singleProduct,
    quantety,
    price: singleProduct.price * quantety,
  };

  // alert state
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    dispatch(fetchSingleProduct(productId));
  }, [dispatch, productId]);

  if (status === "loading") {
    // return <div>Loading...</div>;
  }

  if (!singleProduct) {
    return <div>Product not found</div>;
  }

  // cart handler methods
  const addItemToCart = (item) => {
    dispatch(addToCart(item));
    setShowAlert(true);
  };

  // alert

  const handleCloseAlert = () => {
    setShowAlert(false);
  };
  return (
    <>
      {/* alert  */}
      <AlertSnackbar
        open={showAlert}
        onClose={handleCloseAlert}
        message="Product has been added to cart successfully"
        severity="success"
      />

      {status === "succeeded" && singleProduct != undefined ? (
        <div
          style={{
            padding: "50px 0 15px",
            maxWidth: "97%",
          }}
        >
          <Container>
            <Grid container spacing={5}>
              <Grid lg={6} md={4} sm={12} xs={12}>
                <img src={singleProduct.image} className=" img-fluid " />
              </Grid>
              <Grid lg={6} md={8} sm={12} xs={12}>
                <div>
                  <h2>{singleProduct.title} </h2>
                  <div className=" d-flex gap-5 align-items-center pb-3  ">
                    <span style={{ color: "#d79d08" }}>
                      {singleProduct.rating.rate}
                      <StarBorderOutlinedIcon />
                      <StarBorderOutlinedIcon />
                      <StarBorderOutlinedIcon />
                      <StarBorderOutlinedIcon />
                      <StarBorderOutlinedIcon />
                    </span>
                    <span>
                      {singleProduct.rating.rate}{" "}
                      <span className=" text-black-50 ">Rating</span>
                    </span>
                    <span>
                      {singleProduct.rating.count}{" "}
                      <span className=" text-black-50 ">Solid</span>
                    </span>
                  </div>
                  <div>
                    <h3>${singleProduct.price}</h3>
                    <p className=" lh-lg text-black-50 pt-3 ">
                      {singleProduct.description}
                    </p>
                    <div style={{ width: "50%", marginBottom: "20px" }}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Size
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          //   value={age}
                          label="Size"
                          //   onChange={handleChange}
                        >
                          <MenuItem value={10}>Small</MenuItem>
                          <MenuItem value={20}>Mediam</MenuItem>
                          <MenuItem value={30}>Large</MenuItem>
                          <MenuItem value={30}>Extra Large</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div style={{ width: "50%" }}>
                      <input
                        type="number"
                        min={1}
                        max={singleProduct.rating.count}
                        className="piecesNumberInpit"
                        value={quantety}
                        onChange={(e) => {
                          setQuantety(+e.target.value);
                        }}
                      />
                    </div>
                    <p>{singleProduct.rating.count} piece available</p>
                    <button
                      className="sedcond-button"
                      onClick={() => {
                        addItemToCart(cartObject);
                      }}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      ) : (
        <div className=" vh-100 d-flex justify-content-center align-items-center">
          {status === "failed" ? <Error /> : <CircularProgress />}
        </div>
      )}
    </>
  );
}
