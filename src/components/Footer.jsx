/* eslint-disable no-unused-vars */
import { Container } from "react-bootstrap";
import Grid from "@mui/material/Unstable_Grid2";

// icons
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import AddIcCallOutlinedIcon from "@mui/icons-material/AddIcCallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Footer() {
  return (
    <div
      style={{
        padding: "100px 0 15px",
        maxWidth: "99%",
        background: "#fafafa",
      }}
      className=" text-center text-sm-start  "
    >
      <Container>
        <Grid container spacing={2}>
          <Grid lg={3} md={6} sm={6} xs={12}>
            <h5 className=" pb-4 ">WINKEL</h5>
            <p className=" text-black-50 lh-lg pb-4">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia.
            </p>
            <div className="socialIcons">
              <span>
                <InstagramIcon />
              </span>
              <span>
                <TwitterIcon />
              </span>
              <span>
                <YouTubeIcon />
              </span>
            </div>
          </Grid>
          <Grid lg={3} md={6} sm={6} xs={12}>
            <h5 className=" pb-4 ">MENU</h5>
            <ul className=" list-unstyled ">
              <li className=" pt-2">Shop</li>
              <li className=" pt-2">Card</li>
              <li className=" pt-2">About</li>
              <li className=" pt-2">Contact</li>
              <li className=" pt-2">Login</li>
            </ul>
          </Grid>
          <Grid lg={3} md={6} sm={6} xs={12}>
            <h5 className=" pb-4 ">HELP</h5>
            <ul className=" list-unstyled ">
              <li className=" pt-2">Shipping Information</li>
              <li className=" pt-2">Returns & Exchange</li>
              <li className=" pt-2">Terms & Conditions</li>
              <li className=" pt-2">Privacy Policy</li>
              <li className=" pt-2">FAQs</li>
            </ul>
          </Grid>
          <Grid lg={3} md={6} sm={6} xs={12}>
            <h5 className=" pb-4 ">HAVE A QUESTIONS?</h5>
            <div className=" d-flex gap-4 justify-content-center justify-content-sm-start ">
              <span>
                <PlaceOutlinedIcon />
              </span>
              <p> 203 Fake St. Mountain View, San Francisco, California, USA</p>
            </div>
            <div className=" d-flex gap-4 justify-content-center justify-content-sm-start ">
              <span>
                <AddIcCallOutlinedIcon />
              </span>
              <p> +2 392 3929 210</p>
            </div>
            <div className=" d-flex gap-4 justify-content-center justify-content-sm-start ">
              <span>
                <EmailOutlinedIcon />
              </span>
              <p>WINKEL@gmail.com</p>
            </div>
          </Grid>
        </Grid>
        <h5 className=" pt-4  text-center  text-black-50 lh-lg  ">
          Copyright ©2023 All rights reserved | This site is made with{" "}
          <span style={{ color: "#d10000" }}>
            <FavoriteIcon />
          </span>{" "}
          by Omer Bashry
        </h5>
      </Container>
    </div>
  );
}
