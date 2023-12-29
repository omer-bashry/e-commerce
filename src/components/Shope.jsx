/* eslint-disable no-unused-vars */
// mui
import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "react-bootstrap";
import { ProductCard } from "./Cards Components/ProductsSec";
import CircularProgress from "@mui/material/CircularProgress";

// redux
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  fetchCategories,
  fetchProductsByCategory,
} from "../features/productsSlice";

// react router
import { Link } from "react-router-dom";

// components
import Error from "./Erorr";

export default function Shop() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const categories = useSelector((state) => state.products.categories);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
      dispatch(fetchCategories());

      // setIsLoading(false);
    }
  }, [dispatch, status]);
  if (status === "loading") {
    // setIsLoading(true);
  }

  if (status === "failed") {
    // console.log(error);
    return <Error />;
  }

  const handleCategoryClick = (category) => {
    dispatch(fetchProductsByCategory(category));
  };

  return (
    <div style={{ padding: "40px 0", backgroundColor: "#fafafa" }}>
      <Container>
        <Grid container spacing={3}>
          <Grid lg={3} md={3} sm={12} xs={12}>
            <div className=" text-center text-md-start">
              <div className="p-4 bg-light ">
                <div>
                  <h5 className=" mt-4 mb-2 text-uppercase ">categories</h5>
                  <ul className=" list-unstyled  text-black-50  shoplist">
                    <li
                      onClick={() => {
                        dispatch(fetchProducts());
                        dispatch(fetchCategories());
                      }}
                      className=" text-uppercase "
                    >
                      All products
                    </li>
                    {categories.map((category) => (
                      <li
                        key={category}
                        onClick={() => handleCategoryClick(category)}
                        className=" text-uppercase "
                      >
                        {category}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Grid>
          <Grid lg={9} md={9} sm={12} xs={12}>
            <div>
              <Grid container spacing={3}>
                {status === "loading" ? (
                  <div
                    style={{
                      height: "90vh",
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CircularProgress />
                  </div>
                ) : (
                  products.map((product) => (
                    <Grid item lg={4} md={6} sm={6} xs={12} key={product.id}>
                      {/* <Link
                        to={`/SingleProduct/${product.id}`}
                        style={{ textDecoration: "none", color: "black" }}
                      > */}
                      <div>
                        <ProductCard
                          product={product}
                          image={product.image}
                          title={product.title}
                          category={product.category}
                          description={product.description}
                          id={product.id}
                          price={product.price}
                        />
                      </div>
                      {/* </Link> */}
                    </Grid>
                  ))
                )}
                {status === "failed" ? <div>network error</div> : ""}
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
