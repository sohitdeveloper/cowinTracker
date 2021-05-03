import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Footer from "./Footer";
import Cards from "./Cards";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Home = () => {
  const [pinCode, setPinCode] = useState(0);
  const [Datas, setDatas] = useState();
  const [open, setopen] = useState(false);
  const [Type, setType] = useState("");
  const [Message, setMessage] = useState("");
  const sendGetRequest = async () => {
    const obj = new Date();
    try {
      const resp = await axios.get(
        `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pinCode}&date=${obj.getDate()}-${
          obj.getMonth() + 1
        }-${obj.getFullYear()}`
      );
      // console.log(resp.data.centers);
      if (resp.data.centers.length > 0) {
        setopen(true);
        setType("success");
        setMessage("Data Found");
      } else {
        setopen(true);
        setType("info");
        setMessage(`Cowin data not available for this ${pinCode}`);
      }

      setDatas(resp.data.centers);
    } catch (err) {
      // Handle Error Here
      // console.error(err);
      setopen(true);
      setType("error");
      setMessage("Invalid Pincode");
    }
  };
  const handleClose = () => {
    setopen(false);
    setType("");
    setMessage("");
  };
  const container = {
    display: "flex",
    flexDirection: "column",
  };

  const header = {
    backgroundColor: "#20065f",
    color: "#F8F8FF",
    fontFamily: "Nunito",
    fontSize: 29,
    fontWeight: 600,
    // height: "65px",
    paddingTop: "20px",
  };
  const textfield = {
    alignSelf: "center",
  };
  const btn = { padding: 9, marginLeft: "70px" };
  return (
    <div style={container}>
      <div style={header}>
        Search for Vaccination centers in your area with the PINCODE Only
        "CO_WIN"
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <div style={textfield}>
          <TextField
            id="outlined-helperText"
            label="Enter Your Pincode"
            helperText="Click on submit to get the data"
            variant="outlined"
            fullWidth
            size="medium"
            onChange={(e) => setPinCode(e.target.value)}
          />
        </div>
        <div style={btn}>
          <Button
            variant="contained"
            color="secondary"
            onClick={sendGetRequest}
          >
            SUBMIT
          </Button>
        </div>
      </div>
      <Cards Datas={Datas} />
      <Footer />
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        key={"top" + "right"}
      >
        <Alert onClose={handleClose} severity={Type}>
          {Message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Home;
