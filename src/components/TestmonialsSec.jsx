/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Container } from "react-bootstrap";
import Grid from "@mui/material/Unstable_Grid2";
export default function TestmonialsSec() {
  return (
    <Container>
      <div className=" text-center ">
        <h2>Our satisfied customer says</h2>
        <p className=" text-black-50 lh-lg pb-2 mt-4">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in
        </p>
      </div>
      <div className="pt-4">
        <Container>
          <Grid container spacing={2}>
            <Grid lg={3} md={6} sm={6} xs={12}>
              <TestmonialsBox
                image={
                  "https://preview.colorlib.com/theme/winkel/images/person_2.jpg.webp"
                }
                job={"WEB DEVOLOPER"}
                name="Jode Belengham"
              />
            </Grid>
            <Grid lg={3} md={6} sm={6} xs={12}>
              <TestmonialsBox
                image={
                  "https://preview.colorlib.com/theme/winkel/images/person_1.jpg.webp"
                }
                job={"UI/UX DESINER"}
                name="Tyron Lannester"
              />
            </Grid>
            <Grid lg={3} md={6} sm={6} xs={12}>
              <TestmonialsBox
                image={
                  "https://preview.colorlib.com/theme/winkel/images/person_3.jpg.webp"
                }
                job={"CEO"}
                name="Jhon Snow"
              />
            </Grid>
            <Grid lg={3} md={6} sm={6} xs={12}>
              <TestmonialsBox
                image={
                  "https://preview.colorlib.com/theme/winkel/images/person_2.jpg.webp"
                }
                job={"AI AGENT "}
                name="Gareeth Smith"
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </Container>
  );
}
function TestmonialsBox({ image, job, name }) {
  return (
    <div className="text-center text-sm-start">
      <div style={{ position: "relative" }}>
        <img
          src={image}
          width={100}
          height={100}
          className=" img-fluid "
          style={{ borderRadius: "50px" }}
        />
      </div>
      <div
        style={{ borderLeft: "2px solid #ccc", padding: "10px 10px 10px 20px" }}
      >
        <p className=" text-black-50 lh-lg pb-2 mt-4 position-relative commentP">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
        <h5>{name}</h5>
        <span className=" text-black-50 pb-2">{job}</span>
      </div>
    </div>
  );
}
