import React, { useState } from "react";
import { Card, CardContent, TextField, Button } from "@material-ui/core";
import ColorizeIcon from "@material-ui/icons/Colorize";
import ControlPointIcon from "@material-ui/icons/ControlPoint";

const Login = (props) => {
  const [Phone, setPhone] = useState("");
  const [Valid, setValid] = useState(false);

  const container = {
    display: "flex",
    justifyContent: "center",
    marginTop: "40px",
  };
  const card = {
    alignItems: "center",
    border: "1px solid grey",
    boxShadow: "1px 1px grey",
  };
  const cardContent = {
    padding: "30px 40px",
  };
  const head = {
    fontSize: "31px",
  };
  const welcome = {
    color: "#20065f",
    fontFamily: "Nunito",
    fontSize: 14,
    fontWeight: 600,
  };
  const btnStyle = {
    width: "320px",
    height: "48px",
    borderRadius: "8px",
    backgroundColor: "#20065f",
    color: "#fff",
    margin: "25px auto",
  };

  const signIn = () => {
    if (Phone === "" || Phone === null) {
      setValid(true);
    }
  };
  const OnPressEnter = (e) => {
    if (e.key === "Enter" && Phone !== "") {
      signIn();
    }
    if (Phone === "" || Phone === null) {
      setValid(true);
    }
  };

  return (
    <div style={container}>
      <Card style={card}>
        <CardContent style={cardContent}>
          <div style={head}>
            C<ControlPointIcon style={{ fontSize: "24px" }} />
            WIN <ColorizeIcon />
          </div>
          <div style={welcome}>Register or SignIn for Vaccination</div>
          <div style={{ color: "#2e2e2e", fontSize: "18px" }}>
            We will send you a One Time Password on your phone number
          </div>
          <div>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              size="medium"
              label="Mobile Number"
              error={Valid && (Phone === "" || Phone === null)}
              onChange={(event) => setPhone(event.target.value)}
              onKeyPress={(e) => OnPressEnter(e)}
            />
          </div>
          <div style={{ display: "flex" }}>
            <Button
              variant="contained"
              style={btnStyle}
              onClick={() => signIn()}
            >
              GET OTP
            </Button>
            <div style={{ color: "red", fontFamily: "Nunito" }}>
              {props.msg ? "Email or Password not valid !!" : ""}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
