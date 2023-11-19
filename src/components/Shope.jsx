/* eslint-disable no-unused-vars */
import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "react-bootstrap";
import { ProductCard } from "./Cards Components/ProductsSec";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

export default function Shop() {
  return (
    <div style={{ padding: "40px 0", backgroundColor: "#fafafa" }}>
      <Container>
        <Grid container spacing={3}>
          <Grid lg={3} md={3} sm={12} xs={12}>
            <div className=" text-center text-md-start">
              <div className="p-4 bg-light ">
                <div>
                  <h5 className=" mt-4 mb-2 ">CLOTHING</h5>
                  <ul className=" list-unstyled  text-black-50  shoplist">
                    <li>Shirts & Tops</li>
                    <li>Dresses</li>
                    <li>Shorts & Skirts </li>
                    <li>Jackets</li>
                    <li>Coats</li>
                    <li>Sleeveless</li>
                    <li>Trousers</li>
                    <li>Winter</li>
                    <li>Coats</li>
                    <li>Jumpsuits</li>
                  </ul>
                </div>
              </div>
              <div className="p-4 bg-light ">
                <div>
                  <h5 className=" mt-4 mb-2 ">JEANS</h5>
                  <ul className=" list-unstyled  text-black-50  shoplist">
                    <li>Shirts & Tops</li>
                    <li>Dresses</li>
                    <li>Shorts & Skirts </li>
                    <li>Jackets</li>
                    <li>Coats</li>
                    <li>Sleeveless</li>
                    <li>Trousers</li>
                    <li>Winter</li>
                    <li>Coats</li>
                    <li>Jumpsuits</li>
                  </ul>
                </div>
              </div>
              <div className="p-4 bg-light ">
                <h5 className=" mt-4 mb-2 ">BAGS ACCESSORIES</h5>
              </div>
              <div className="p-4 bg-light ">
                <div>
                  <h5 className=" mt-4 mb-2 ">SHOES</h5>
                  <ul className=" list-unstyled  text-black-50  shoplist">
                    <li>Nike</li>
                    <li>Adidas</li>
                    <li>Shorts & Skirts </li>
                    <li>Jackets</li>
                    <li>Coats</li>
                  </ul>
                </div>
              </div>
            </div>
          </Grid>
          <Grid lg={9} md={9} sm={12} xs={12}>
            <div>
              <Grid container spacing={3}>
                <Grid lg={4} md={6} sm={6} xs={12}>
                  <ProductCard image="https://preview.colorlib.com/theme/winkel/images/product-8.jpg.webp" />
                </Grid>
                <Grid lg={4} md={6} sm={6} xs={12}>
                  <ProductCard image="https://preview.colorlib.com/theme/winkel/images/product-8.jpg.webp" />
                </Grid>
                <Grid lg={4} md={6} sm={6} xs={12}>
                  <ProductCard image="https://preview.colorlib.com/theme/winkel/images/product-8.jpg.webp" />
                </Grid>
                <Grid lg={4} md={6} sm={6} xs={12}>
                  <ProductCard image="https://preview.colorlib.com/theme/winkel/images/product-8.jpg.webp" />
                </Grid>
                <Grid lg={4} md={6} sm={6} xs={12}>
                  <ProductCard image="https://preview.colorlib.com/theme/winkel/images/product-8.jpg.webp" />
                </Grid>
                <Grid lg={4} md={6} sm={6} xs={12}>
                  <ProductCard image="https://preview.colorlib.com/theme/winkel/images/product-8.jpg.webp" />
                </Grid>
                <Grid lg={4} md={6} sm={6} xs={12}>
                  <ProductCard image="https://preview.colorlib.com/theme/winkel/images/product-8.jpg.webp" />
                </Grid>
                <Grid lg={4} md={6} sm={6} xs={12}>
                  <ProductCard image="https://preview.colorlib.com/theme/winkel/images/product-8.jpg.webp" />
                </Grid>
                <Grid lg={4} md={6} sm={6} xs={12}>
                  <ProductCard image="https://preview.colorlib.com/theme/winkel/images/product-8.jpg.webp" />
                </Grid>
              </Grid>
            </div>
            <div className="numberIcons">
              <span>
                <KeyboardDoubleArrowLeftIcon fontSize="small" />
              </span>
              <span className="active">1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>
                <KeyboardDoubleArrowRightIcon fontSize="small" />
              </span>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
