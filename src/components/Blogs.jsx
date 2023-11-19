/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "react-bootstrap";
import TextField from "@mui/material/TextField";

// icons
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

export default function Blogs() {
  return (
    <>
      <div style={{ maxWidth: "99%", paddingTop: "40px" }}>
        <Container>
          <Grid container spacing={4}>
            <Grid lg={8} md={12} sm={12} xs={12}>
              <Blog image="https://preview.colorlib.com/theme/winkel/images/image_1.jpg.webp" />
              <Blog image="https://preview.colorlib.com/theme/winkel/images/image_2.jpg.webp" />
              <Blog image="https://preview.colorlib.com/theme/winkel/images/image_3.jpg.webp" />
              <Blog image="https://preview.colorlib.com/theme/winkel/images/image_5.jpg.webp" />
              <Blog image="https://preview.colorlib.com/theme/winkel/images/image_1.jpg.webp" />
              <Blog image="https://preview.colorlib.com/theme/winkel/images/image_6.jpg.webp" />
            </Grid>
            <Grid lg={4} md={12} sm={12} xs={12}>
              <div>
                <TextField
                  className=" w-100 mb-3 "
                  id="outlined-basic"
                  label=" Serch Catigories"
                  variant="outlined"
                />
              </div>
              <div className=" pt-5 ">
                <h5 className=" pb-3 ">CATEGORIES</h5>
                <div>
                  <div className=" d-flex justify-content-between p-2 border-bottom ">
                    <span>Bags</span>{" "}
                    <span className=" text-black-50 ">(12)</span>
                  </div>
                  <div className=" d-flex justify-content-between p-2 border-bottom  mb-2 ">
                    <span>Shoes</span>{" "}
                    <span className=" text-black-50 ">(27)</span>
                  </div>
                  <div className=" d-flex justify-content-between p-2 border-bottom  mb-2 ">
                    <span>Dress</span>{" "}
                    <span className=" text-black-50 ">(37)</span>
                  </div>
                  <div className=" d-flex justify-content-between p-2 border-bottom  mb-2 ">
                    <span>Accessories</span>{" "}
                    <span className=" text-black-50 ">(42)</span>
                  </div>
                  <div className=" d-flex justify-content-between p-2 border-bottom  mb-2 ">
                    <span>Makeup</span>{" "}
                    <span className=" text-black-50 ">(14)</span>
                  </div>
                  <div className=" d-flex justify-content-between p-2 border-bottom  mb-2  ">
                    <span>Beauty</span>{" "}
                    <span className=" text-black-50 ">(140)</span>
                  </div>
                </div>
              </div>
              <div className=" pt-5 ">
                <h5 className=" pb-3 ">RECENT BLOG</h5>
                <div>
                  <RecentBlog image="https://preview.colorlib.com/theme/winkel/images/image_5.jpg.webp" />
                  <RecentBlog image="https://preview.colorlib.com/theme/winkel/images/image_3.jpg.webp" />
                  <RecentBlog image="https://preview.colorlib.com/theme/winkel/images/image_2.jpg.webp" />
                </div>
              </div>
              <div className=" pt-5 ">
                <h5 className=" pb-3 ">TAG CLOUD</h5>
                <div className="blogTags">
                  <span>SHOP</span>
                  <span>PRODUCTS</span>
                  <span>SHIRT</span>
                  <span>JEANS</span>
                  <span>SHOES</span>
                  <span>DRESS</span>
                  <span>COATS</span>
                  <span>JUMPSUITS</span>
                </div>
              </div>
              <div className=" pt-5 ">
                <h5 className=" pb-3 ">PARAGRAPH</h5>
                <p className=" text-black-50 lh-lg ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus itaque, autem necessitatibus voluptate quod mollitia
                  delectus aut, sunt placeat nam vero culpa sapiente consectetur
                  similique, inventore eos fugit cupiditate numquam!
                </p>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

function Blog({ image }) {
  return (
    <Grid container spacing={3} className=" pb-4 ">
      <Grid lg={4} md={4} sm={5} xs={12}>
        <img src={image} className=" img-fluid " style={{ height: "100%" }} />
      </Grid>
      <Grid lg={8} md={8} sm={7} xs={12}>
        <div>
          <span style={{ fontSize: "12px", color: "rgb(204, 204, 204)" }}>
            APRIL 9, 2019 ADMIN{" "}
            <span>
              <ChatBubbleIcon fontSize="small" />
            </span>{" "}
            3
          </span>
          <h5>
            Even the all-powerful Pointing has no control about the blind texts.
          </h5>
          <p className=" text-black-50 lh-lg ">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <button className="sedcond-button" style={{ padding: "10px 20px" }}>
            {" "}
            Read More
          </button>
        </div>
      </Grid>
    </Grid>
  );
}

function RecentBlog({ image }) {
  return (
    <Grid container spacing={3} className=" pb-4 ">
      <Grid lg={3} md={2} sm={3} xs={3}>
        <img src={image} className=" img-fluid " style={{ height: "100%" }} />
      </Grid>
      <Grid lg={9} md={10} sm={9} xs={9}>
        <p className=" text-black-50 lh-lg">
          Even the all-powerful Pointing has no control about the blind texts
        </p>
        <div style={{ fontSize: "10px" }}>
          <span>
            <CalendarMonthIcon fontSize="small" />{" "}
            <span className=" pe-2 ">April 09, 2019</span>
          </span>
          <span>
            <PermIdentityIcon fontSize="small" />
            <span className=" pe-2 ">Admin</span>
          </span>
          <span>
            <ChatBubbleOutlineOutlinedIcon fontSize="small" />
            <span className=" pe-2 ">19</span>
          </span>
        </div>
      </Grid>
    </Grid>
  );
}
