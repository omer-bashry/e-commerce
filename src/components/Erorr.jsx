/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import SignalWifiStatusbarConnectedNoInternet4Icon from "@mui/icons-material/SignalWifiStatusbarConnectedNoInternet4";
export default function Error() {
  return (
    <div className=" vh-100 d-flex justify-content-center align-items-center text-center  ">
      <div>
        <div>
          <SignalWifiStatusbarConnectedNoInternet4Icon
            style={{ fontSize: "200px", color: "#ccc" }}
          />
        </div>
        <h3 className=" text-uppercase ">Somthing went wrong!!</h3>
        <p className=" lh-lg  text-black-50 ">
          There is no internet conection please conect to internet and reload
          the page
        </p>
        <button
          className="sedcond-button pt-3 ps-4 pe-4 pb-3 mt-3 "
          onClick={() => {
            window.location.reload();
          }}
        >
          Reload
        </button>
      </div>
    </div>
  );
}
