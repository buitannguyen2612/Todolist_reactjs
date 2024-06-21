import { Alert, Snackbar } from "@mui/material";
import useActions from "hooks/useAction.js";
import useShallowEquelSelector from "hooks/userShallowEquelSelector.js";
import React from "react";
import { snackBarAction } from "../../redux/snackbar.js";

function SnackBarCustom() {
  const { hide } = useActions(snackBarAction);
  const snackbarManage = useShallowEquelSelector(
    (state) => state.snackbarManage
  );
  const { open, severity, message, autoHideDuration } = snackbarManage;
  const handleClose = () => {
    hide();
    // dispatch(show({message: 'Thanh cong', severity: 'success'}))
  };
  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      autoHideDuration={autoHideDuration}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      <Alert variant="filled" onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
}

export default SnackBarCustom;
