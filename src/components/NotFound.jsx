import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      className=" d-flex  justify-content-center align-items-center p-4 "
      style={{ backgroundColor: "#f7f7f7" }}
    >
      <div>
        <img
          src="https://www.pngitem.com/pimgs/m/255-2550411_404-error-images-free-png-transparent-png.png"
          className=" img-fluid"
          style={{ maxHeight: " 300px" }}
        />
        <p className=" text-black-50 lh-lg text-center p-3 w-50 m-auto pb-2 ">
          We cant find the page youre looking for !!
        </p>
        <Link to="/" style={{ textDecoration: "none" }}>
          <button className=" text-capitalize text-center m-auto d-block sedcond-button mt-3 ">
            back to home page
          </button>
        </Link>
      </div>
    </div>
  );
}
