/* eslint-disable no-unused-vars */
import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "react-bootstrap";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Cart() {
  return (
    <>
      <Container>
        <div style={{ padding: "50px 0" }}>
          <SingleItem />
          <SingleItem />
          <SingleItem />
          <SingleItem />
        </div>
      </Container>
    </>
  );
}

function SingleItem() {
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
            <img
              src="https://preview.colorlib.com/theme/winkel/images/product-4.jpg.webp"
              className=" img-fluid "
            />
          </div>
        </Grid>
        <Grid lg={4} md={4} sm={12} xs={12} className=" ps-5 ">
          <div className="centerCartItems">
            <div>
              <h5>YOUNG WOMAN WEARING DRESS</h5>
              <p className=" text-black-50 lh-lg">
                Far far away, behind the word mountains, far from the countries
              </p>
            </div>
          </div>
        </Grid>
        <Grid lg={2} md={2} sm={4} xs={4} className=" ps-5 ">
          <div className="centerCartItems">Price: $4.90</div>
        </Grid>
        <Grid lg={2} md={2} sm={4} xs={4} className=" ps-5 ">
          <div className="centerCartItems">Pieces: 10</div>
        </Grid>
        <Grid lg={2} md={2} sm={4} xs={4} className=" ps-5 ">
          <div className="centerCartItems">
            <span>
              <DeleteIcon style={{ color: "red", cursor: "pointer" }} />
            </span>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
