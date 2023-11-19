/* eslint-disable no-unused-vars */
// bootstrab
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Container } from "react-bootstrap";

//mui
import Grid from "@mui/material/Unstable_Grid2";
import PolicyIcon from "@mui/icons-material/Policy";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HighQualityIcon from "@mui/icons-material/HighQuality";

// components
import Sellers from "./Cards Components/Sellers";
import Collections from "./Collections";
import ProductsSec from "./Cards Components/ProductsSec";
import TestmonialsSec from "./TestmonialsSec";

export default function Home() {
  return (
    <>
      <Carousel className="mt-2 mb-2 ">
        <Carousel.Item interval={1000} style={{ maxHeight: "400px" }}>
          <Grid container>
            <Grid xs={12} md={6}>
              <div className="content-container one text-center">
                <p className="text-black-50 fst-italic">
                  WINKEL ECOMMERCE SHOP
                </p>
                <h1>Chatch Your Own</h1>
                <h1>Stylish & Look</h1>
                <p className="text-black-50">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country.
                </p>
                <button className="main-button">Discover More</button>
              </div>
            </Grid>
            <Grid xs={12} md={6} className="image-container">
              <img
                src="https://crossroadstrading.com/wp-content/uploads/2019/03/Mariano-di-Vaio.png"
                alt="Slide 1"
                style={{ maxWidth: "85%" }}
              />
            </Grid>
          </Grid>
        </Carousel.Item>
        <Carousel.Item interval={1000} style={{ maxHeight: "400px" }}>
          <Grid container>
            <Grid xs={12} md={6}>
              <div className="content-container two text-center">
                <p className="text-black-50 fst-italic">
                  WINKEL ECOMMERCE SHOP
                </p>
                <h1>Chose Evrythigs</h1>
                <h1> You Love</h1>
                <p className="text-black-50">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country.
                </p>
                <button className="main-button">Discover More</button>
              </div>
            </Grid>
            <Grid xs={12} md={6} className="image-container">
              <img
                src="https://crossroadstrading.com/wp-content/uploads/2019/03/Phil-Cohen.png"
                alt="Slide 1"
                style={{ maxWidth: "85%" }}
              />
            </Grid>
          </Grid>
        </Carousel.Item>
      </Carousel>
      <div style={{ padding: "100px 0", maxWidth: "99%" }}>
        <Container>
          <Grid container spacing={4}>
            <Grid lg={6} md={6}>
              <img
                src="https://pics.craiyon.com/2023-07-12/6c8da0f7e3374a0b8a16c8627cacb984.webp"
                className=" img-fluid h-100 cartImage"
                style={{ borderRadius: "10px" }}
              />
            </Grid>
            <Grid lg={6} md={6} xs={12}>
              <div className="text-center text-md-start">
                <h1>Better Way to Ship Your Products</h1>
                <p className=" text-black-50 lh-lg ">
                  But nothing the copy said could convince her and so it didn’t
                  take long until a few insidious Copy Writers ambushed her,
                  made her drunk with Longe and Parole and dragged her into
                  their agency, where they abused her for their.
                </p>
                <div
                  style={{ display: "flex", gap: "5px" }}
                  className="  flex-column flex-md-row"
                >
                  <div className="box text-center ">
                    <PolicyIcon
                      style={{
                        fontSize: "80px",
                        color: "#ffa45c",
                        marginBottom: "20px",
                      }}
                    />
                    <h5>REFUND POLICY</h5>
                    <p className=" text-black-50 lh-lg ">
                      Even the all-powerful Pointing has no control about the
                      blind texts it is an almost unorthographic.
                    </p>
                  </div>
                  <div className="box text-center ">
                    <LocalShippingIcon
                      style={{
                        fontSize: "80px",
                        color: "#ffa45c",
                        marginBottom: "20px",
                      }}
                    />
                    <h5> PACKAGING</h5>
                    <p className=" text-black-50 lh-lg ">
                      Even the all-powerful Pointing has no control about the
                      blind texts it is an almost unorthographic.
                    </p>
                  </div>
                  <div className="box text-center ">
                    <HighQualityIcon
                      style={{
                        fontSize: "80px",
                        color: "#ffa45c",
                        marginBottom: "20px",
                      }}
                    />
                    <h5>SUPERIOR QUALITY</h5>
                    <p className=" text-black-50 lh-lg ">
                      Even the all-powerful Pointing has no control about the
                      blind texts it is an almost unorthographic.
                    </p>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="text-center " style={{ paddingBottom: "100px" }}>
        <h1>Best Sellers</h1>
        <p className=" text-black-50 lh-lg pb-2 mt-4">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </p>
        <Container>
          <div className=" d-flex  justify-content-center align-items-center gap-3 flex-wrap ">
            <Sellers
              image="https://preview.colorlib.com/theme/winkel/images/product-1.jpg.webp"
              imageHeight="140"
            />
            <Sellers
              image="https://preview.colorlib.com/theme/winkel/images/product-2.jpg.webp"
              imageHeight="140"
            />
            <Sellers
              image="https://preview.colorlib.com/theme/winkel/images/product-3.jpg.webp"
              imageHeight="140"
            />
          </div>
        </Container>
      </div>
      <div style={{ paddingBottom: "100px" }}>
        <Collections />
      </div>
      <div style={{ paddingBottom: "100px", maxWidth: "99%" }}>
        <ProductsSec />
      </div>
      <div
        style={{
          padding: "100px 0 ",
          marginBottom: "100px ",
          maxWidth: "99%",
          backgroundImage:
            "url(https://preview.colorlib.com/theme/winkel/images/bg_4.jpg.webp)",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <Grid container spacing={2} className="  text-center ">
            <Grid lg={3} md={6} sm={6} xs={12}>
              <div>
                <h2>790</h2>
                <span className=" text-black-50 ">HAPPY CUSTOMERS</span>
              </div>
            </Grid>
            <Grid lg={3} md={6} sm={6} xs={12}>
              <div>
                <h2>800</h2>
                <span className=" text-black-50 ">HAPPY CUSTOMERS</span>
              </div>
            </Grid>
            <Grid lg={3} md={6} sm={6} xs={12}>
              {" "}
              <div>
                <h2>78</h2>
                <span className=" text-black-50 ">PARTNER</span>
              </div>
            </Grid>
            <Grid lg={3} md={6} sm={6} xs={12}>
              <div>
                <h2>1,200</h2>
                <span className=" text-black-50 ">AWARDS</span>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div style={{ paddingBottom: "100px", maxWidth: "99%" }}>
        <TestmonialsSec />
      </div>
      <div style={{ padding: "100px 0" }} className=" text-center ">
        <h1>Subcribe to our Newsletter</h1>
        <div style={{ paddingTop: "50px" }}>
          <input
            type="email"
            placeholder="Enter Email Address"
            className="emailInput"
          />
          <button className="SubmitBtn">SUBMIT</button>
        </div>
      </div>
    </>
  );
}

// images
//https://crossroadstrading.com/wp-content/uploads/2019/03/Mariano-di-Vaio.png
//https://crossroadstrading.com/wp-content/uploads/2019/03/Matthew-Zorpas.png
// https://crossroadstrading.com/wp-content/uploads/2019/03/Phil-Cohen.png

// https://preview.colorlib.com/theme/winkel/images/product-5.jpg.webp

// Gui Todos :
// 1- Center carousel text and add overly.
// 2- Add overlay to stats section.
// 3- Add svg to the footer.
// 4- Create subscribtion alrt.
// 5- Footer spacing in small screens.
// 6- Change products buttons from hover state to solid state.
