import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Paper } from "@mui/material";

const MenuItem = ({ name, fullPrice, halfPrice, quaterPrice }) => {
  /* 
    dish name: str,
    price: int,

    action:
    add to main bill
    */
  console.log(name, fullPrice, halfPrice, quaterPrice);
  return (
    <Paper
      className="SelectPriceOption"
      sx={{
        backgroundColor: "rgba(212,175,155,0.3)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: "10px",
        width: "95%",
        padding: "10px",
        margin: "5px",
        height: "30px",
      }}
    >
      <Typography fontWeight={600}>{name}</Typography>
      {fullPrice !== undefined ? (
        <Typography>Full: {fullPrice}</Typography>
      ) : (
        <></>
      )}
      {halfPrice !== undefined ? (
        <Typography>Half: {halfPrice}</Typography>
      ) : (
        <></>
      )}
      {quaterPrice !== undefined ? (
        <Typography>Quater: {quaterPrice}</Typography>
      ) : (
        <></>
      )}
    </Paper>
  );
};

const FoodCategory = ({ categoryname, items }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        height: "95%",
        width: "30%",
        background: "#f6edd8",
        margin: "2vh",
        overflowY: "auto",
      }}
    >
      <Typography sx={{}}>{categoryname}</Typography>

      <MenuItem
        name="Biryani"
        fullPrice={100}
        halfPrice={70}
        quaterPrice={50}
      />
      <MenuItem name="Rice" fullPrice={100} halfPrice={70} />
      <MenuItem name="Roti" fullPrice={100} />
      <MenuItem name="Roti" fullPrice={100} />
      <MenuItem name="Roti" fullPrice={100} />
      <MenuItem name="Roti" fullPrice={100} />
      <MenuItem name="Roti" fullPrice={100} />
      <MenuItem name="Roti" fullPrice={100} />
      <MenuItem name="Roti" fullPrice={100} />

      <Button> Add Items</Button>
    </Box>
  );
};

function Menu() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        backgroundColor: "lightgrey",
        height: "100%",
        width: "100%",
        overflowX: "auto",
      }}
    >
      <FoodCategory categoryname="Main Course" />
      <FoodCategory categoryname="Starter" />
      <FoodCategory categoryname="Veg" />
      <FoodCategory categoryname="Non-Veg" />
    </Box>
  );
}

export default Menu;
