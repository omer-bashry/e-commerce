/* eslint-disable no-unused-vars */
import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "react-bootstrap";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SingleProduct() {
  return (
    <>
      <div
        style={{
          padding: "50px 0 15px",
          maxWidth: "99%",
        }}
      >
        <Container>
          <Grid container spacing={5}>
            <Grid lg={6} md={4} sm={12} xs={12}>
              <img
                src="https://preview.colorlib.com/theme/winkel/images/product-1.jpg"
                className=" img-fluid "
              />
            </Grid>
            <Grid lg={6} md={8} sm={12} xs={12}>
              <div>
                <h2>Young Woman Wearing Dress</h2>
                <div className=" d-flex gap-5 align-items-center pb-3  ">
                  <span style={{ color: "#d79d08" }}>
                    5.0
                    <StarBorderOutlinedIcon />
                    <StarBorderOutlinedIcon />
                    <StarBorderOutlinedIcon />
                    <StarBorderOutlinedIcon />
                    <StarBorderOutlinedIcon />
                  </span>
                  <span>
                    100 <span className=" text-black-50 ">Rating</span>
                  </span>
                  <span>
                    500 <span className=" text-black-50 ">Solid</span>
                  </span>
                </div>
                <div>
                  <h3>$120.00</h3>
                  <p className=" lh-lg text-black-50 pt-3 ">
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences fly into your
                    mouth. On her way she met a copy. The copy warned the Little
                    Blind Text, that where it came from it would have been
                    rewritten a thousand times and everything that was left from
                    its origin would be the word and and the Little Blind Text
                    should turn around and return to its own, safe country. But
                    nothing the copy said could convince her and so it didnt
                    take long until a few insidious Copy Writers ambushed her,
                    made her drunk with Longe and Parole and dragged her into
                    their agency, where they abused her for their.
                  </p>
                  <div style={{ width: "50%", marginBottom: "20px" }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Size
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        //   value={age}
                        label="Size"
                        //   onChange={handleChange}
                      >
                        <MenuItem value={10}>Small</MenuItem>
                        <MenuItem value={20}>Mediam</MenuItem>
                        <MenuItem value={30}>Large</MenuItem>
                        <MenuItem value={30}>Extra Large</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div style={{ width: "50%" }}>
                    <input
                      type="number"
                      min={0}
                      max={99}
                      className="piecesNumberInpit"
                      defaultValue={0}
                    />
                  </div>
                  <p>80 piece available</p>
                  <button className="sedcond-button">Add To Cart</button>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}
