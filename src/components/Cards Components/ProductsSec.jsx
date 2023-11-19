/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "react-bootstrap";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

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
            <ProductCard image="https://preview.colorlib.com/theme/winkel/images/product-5.jpg.webp" />
          </Grid>
          <Grid lg={3} md={6} sm={6} xs={12}>
            <ProductCard image="https://preview.colorlib.com/theme/winkel/images/product-6.jpg.webp" />
          </Grid>
          <Grid lg={3} md={6} sm={6} xs={12}>
            <ProductCard image="https://preview.colorlib.com/theme/winkel/images/product-7.jpg.webp" />
          </Grid>
          <Grid lg={3} md={6} sm={6} xs={12}>
            <ProductCard image="https://preview.colorlib.com/theme/winkel/images/product-8.jpg.webp" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export function ProductCard({ image }) {
  return (
    <div style={{ borderRadius: "5px" }} className="Allcard">
      <div className="imgContaner">
        <img src={image} className=" img-fluid " />
        <div className="buttonsDev">
          <button>
            Add To Crud <ShoppingCartIcon />
          </button>
          <button>
            Add To favorit <FavoriteBorderIcon />
          </button>
        </div>
      </div>
      <h5 className="mt-2">FLORAL JACKQUARD PULLOVER</h5>
      <p className=" text-black-50 lh-lg ">
        Far far away, behind the word mountains, far from the countries
      </p>
      <div className="d-flex justify-content-between align-items-center ">
        <div>$120.00 $80.00</div>
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
