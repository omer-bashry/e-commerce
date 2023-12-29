/* eslint-disable react/prop-types */

import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const AlertSnackbar = ({ message, severity, open, onClose }) => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
      <Alert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AlertSnackbar;
