/* eslint-disable no-unused-vars */
import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "react-bootstrap";
import TextField from "@mui/material/TextField";

export default function Contact() {
  return (
    <>
      <div
        style={{
          padding: "50px 0 15px",
          maxWidth: "99%",
          background: "rgb(231 231 231)",
        }}
      >
        <Container>
          <Grid container spacing={2} className=" pb-5 ">
            <Grid lg={3} md={3} sm={6} xs={12}>
              <div
                style={{
                  background: "white",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <p className=" lh-lg  text-black-50 ">
                  Address: 198 West 21th Street, Suite 721 New York NY 10016
                </p>
              </div>
            </Grid>
            <Grid lg={3} md={3} sm={6} xs={12}>
              <div
                style={{
                  background: "white",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <p>
                  <span className=" text-black-50 ">Phone : </span>+ 1235 2355
                  98
                </p>
              </div>
            </Grid>
            <Grid lg={3} md={3} sm={6} xs={12}>
              {" "}
              <div
                style={{
                  background: "white",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <p>
                  <span className=" text-black-50 ">Email : </span>
                  YourEmail@gmail.com
                </p>
              </div>
            </Grid>
            <Grid lg={3} md={3} sm={6} xs={12}>
              <div
                style={{
                  background: "white",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <p>
                  <span className=" text-black-50 ">Website : </span>
                  YourWebsite.com
                </p>
              </div>
            </Grid>
          </Grid>
        </Container>
        <div>
          <Container>
            <Grid container spacing={2} className=" pb-4">
              <Grid lg={6} md={6} xs={0} sm={0}>
                <div>
                  <img
                    src="https://pics.craiyon.com/2023-07-12/6c8da0f7e3374a0b8a16c8627cacb984.webp"
                    width={"100%"}
                    height={"100%"}
                  />
                </div>
              </Grid>
              <Grid lg={6} md={6} xs={12} sm={12}>
                <div
                  className=" text-center "
                  style={{
                    background: "white",
                    padding: " 30px",
                    borderRadius: "5px",
                  }}
                >
                  <form action="">
                    <TextField
                      className=" w-100 mb-3 "
                      id="outlined-basic"
                      label="First Name"
                      variant="outlined"
                    />
                    <TextField
                      className=" w-100 mb-3 "
                      id="outlined-basic"
                      label=" Last Name"
                      variant="outlined"
                    />
                    <TextField
                      className=" w-100 mb-3 "
                      id="outlined-basic"
                      label=" Email"
                      variant="outlined"
                    />
                    <TextField
                      className=" w-100 mb-3 "
                      id="outlined-basic"
                      label=" Subject"
                      variant="outlined"
                    />
                    <TextField
                      className=" w-100 mb-3 "
                      id="outlined-multiline-static"
                      label="Message"
                      multiline
                      rows={4}
                    />
                    <button className="main-button">Send Message</button>
                  </form>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </>
  );
}

// Todos :-
// 1- Fix Link Error
