/* eslint-disable no-unused-vars */
// mui
import Grid from "@mui/material/Grid";
import { useMediaQuery, useTheme } from "@mui/material";
import { Container } from "react-bootstrap";

// react route
import { Link } from "react-router-dom";

export default function Collections() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Container>
      <Grid container spacing={2} style={{ paddingBottom: "20px" }}>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <div
            style={{
              height: isSmallScreen ? "100vh" : "50vh",
            }}
          >
            <img
              src="https://preview.colorlib.com/theme/winkel/images/about-1.jpg.webp"
              className=" img-fluid h-100 w-100 "
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <div>
            <h2>NEW WOMENS CLOTHING SUMMER COLLECTION 2019</h2>
            <p className=" text-black-50 lh-lg pb-2 ">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <Link to="/Shop" style={{ textDecoration: "none" }}>
              <button className=" main-button" style={{ margin: "0" }}>
                shop now
              </button>
            </Link>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <div
            style={{
              background: "lightblue",
              height: isSmallScreen ? "100vh" : "50vh",
            }}
          >
            <img
              src="https://preview.colorlib.com/theme/winkel/images/about-2.jpg.webp"
              className=" img-fluid h-100 w-100 "
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <div>
            <h2>NEW MENS CLOTHING COLLECTION 2019</h2>
            <p className=" text-black-50 lh-lg pb-2 ">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <Link to="/Shop" style={{ textDecoration: "none" }}>
              <button className=" main-button" style={{ margin: "0" }}>
                shop now
              </button>
            </Link>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
