import React from "react";
import { Box, Paper, Typography } from "@mui/material";

const TableBox = ({ id }) => {
  return (
    <Paper
      elevation={10}
      sx={{
        background: "#f6edd8",
        height: "100px",
        width: "200px",
        marginTop: "2vh",
        marginBottom: "2vh",
        marginRight: "2vw",
        marginLeft: "2vw",
        borderRadius: "10px",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        display: "flex",
        pointerEvents: "none",
        padding: "5px",
      }}
    >
      <Typography sx={{ fontSize: "1.2em" }}>{id}</Typography>
    </Paper>
  );
};

function Orders() {
  var tables = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        backgroundColor: "lightgrey",
        height: "100%",
        width: "100%",
      }}
    >
      {tables.map((id) => {
        return <TableBox id={id} />;
      })}
    </Box>
  );
}

export default Orders;
