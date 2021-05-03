import React from "react";
import { Card, CardContent } from "@material-ui/core";
import PinDropIcon from "@material-ui/icons/PinDrop";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const Cards = ({ Datas }) => {
  // console.log(Datas);
  const feeType = {
    backgroundColor: "#20065f",
    color: "#ffffff",
    fontFamily: "Nunito",
    width: "113px",
    borderRadius: "50px",
    textAlign: "center",
    fontSize: "20px",
    letterSpacing: "3px",
    marginLeft: "auto",
  };
  const address = { textAlign: "start", marginTop: "10px" };
  const available = {
    color: "white",
    backgroundColor: "#ff6f62",
    padding: "10px",
    borderRadius: "9px",
    fontSize: "16px",
    fontFamily: "nunito",
  };
  return (
    <div style={{ marginBottom: "40px" }}>
      {Datas &&
        Datas.map((res, i) => (
          <Card style={{ marginBottom: "20px" }}>
            <CardContent>
              <div style={{ display: "flex" }}>
                <span>
                  <PinDropIcon />
                </span>
                CenterName :- {""}
                {res.name} {""}
                <span style={feeType}>{res.fee_type}</span>
              </div>
              <div style={address}>
                Address :- {res.block_name} , {res.district_name},{" "}
                {res.state_name} ,{res.pincode}
              </div>
            </CardContent>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Available Capacity</TableCell>
                    <TableCell align="right">Slot1</TableCell>
                    <TableCell align="right">Slot2</TableCell>
                    <TableCell align="right">Slot3</TableCell>
                    <TableCell align="right">Slot4</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {res.sessions.map((row) => (
                    <TableRow key={row.date}>
                      <TableCell component="th" scope="row">
                        {row.date}{" "}
                      </TableCell>
                      <TableCell align="left">
                        <span style={available}>{row.available_capacity}</span>
                      </TableCell>
                      {row.slots.map((slot) => (
                        <TableCell align="right">{slot}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <div
              style={{
                backgroundColor: "#14948b",
                color: "#ffffff",
                fontFamily: "nunito",
              }}
            >
              FROM : {res.from} To : {res.to}
            </div>
          </Card>
        ))}
    </div>
  );
};

export default Cards;
