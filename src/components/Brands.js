
import React from "react";
import { Box, Grid } from "@mui/material";
import Knosis from "../assets/images/knosis_logo.png";
import DrCruz from "../assets/images/dr_cruz.png";
import Airway from "../assets/images/airway.png";
import Conspire from "../assets/images/conspire.png";

const Brands = () => {
  return (
    <Box sx={{ margin: "10px 30px", padding: "10px 40px" }}>
      <Grid container spacing={8} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6} md={3}>
          <img src={Knosis} width="218px" height="158px" alt="Knosis" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <img src={DrCruz} width="126px" height="126px" alt="DrCruz" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <img src={Airway} width="197px" height="93px" alt="Airway" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <img src={Conspire} width="248px" height="81px" alt="Conspire" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Brands;
