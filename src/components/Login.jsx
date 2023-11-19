/* eslint-disable no-unused-vars */
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import TextField from "@mui/material/TextField";
import { Container } from "react-bootstrap";

export default function Login() {
  return (
    <Container>
      <div className=" d-flex justify-content-center gap-4 pt-5 pb-5 ">
        <div style={{ maxWidth: "300px" }} className="login-img">
          <img
            src="https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            className=" img-fluid h-100 display-xs-none "
          />
        </div>
        <div
          style={{
            maxWidth: "300px",
          }}
          className="login-text-div"
        >
          <h3>
            <span className=" text-black-50 ">We are </span> WINKEL
          </h3>
          <p className=" text-black-50 lh-lg pb-5  ">
            Welcome back! Log in to your account to view todays clients:
          </p>
          <div>
            <div className=" d-flex align-items-center gap-2">
              <span className=" text-black-50 p-2 ">
                <MailOutlineIcon />
              </span>
              <span>
                <TextField
                  id="standard-basic"
                  label="Email"
                  variant="standard"
                />
              </span>
            </div>
            <div className=" d-flex align-items-center gap-2">
              <span className=" text-black-50 p-2 ">
                <LockOutlinedIcon />
              </span>
              <span>
                <TextField
                  id="standard-basic"
                  label="password"
                  type=" password"
                  variant="standard"
                />
              </span>
            </div>
          </div>
          <div style={{ float: "right" }}>
            <button className="login-button">Login</button>
          </div>
        </div>
      </div>
    </Container>
  );
}
