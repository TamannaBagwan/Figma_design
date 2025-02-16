import React from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import Person from "../assets/images/Person.png";

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#008080",
        color: "#fff",
        padding: { xs: 2, md: 4 },
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        height: { xs: "auto", sm: "auto", md: "500px" },
        width: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={2}
          alignItems="center"
          sx={{
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "row",
            },
          }}
        >
          <Grid
            item
            xs={12}
            md={3}
            sm={12}
            sx={{
              display: {
                xs: "none",
                sm: "block",
              },
            }}
          >
            <img
              src={Person}
              alt="Person"
              style={{
                width: "426px",
                height: "490px",
              }}
            />
          </Grid>

          <Grid item xs={12} md={9} sm={12}>
            <Box
              sx={{
                textAlign: { xs: "center", md: "right" },
                padding: { xs: 1, md: 2 },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "30px", sm: "55px", md: "60px" },
                  fontFamily: "'Spectral SC', serif",
                  textDecoration: "underline wavy #fff 2px",
                }}
              >
                TAKE CONTROL OF YOUR <br /> BREATH TODAY!
              </Typography>
            </Box>

            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "block",
                },
                width: "80%",
                padding: "30px",
                marginLeft: "140px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  margin: "0px 0px 0px -60px",
                  textAlign: { sm: "center" },
                }}
              >
                Invest in the Science of Better Breathing.
              </Typography>
              <Typography
                sx={{
                  fontSize: "1rem",
                  margin: "0px -90px 50px 80px",
                }}
              >
                For a limited time, get your CapnoTrainer®GO at an exclusive
                launch price!
              </Typography>
            </Box>

            <Box
              sx={{
                width: { xs: "auto", md: "575px" },
                height: {xs:'80px',sm:'110px',md:'120px'},
                backgroundColor: "black",
                display: "flex",
                justifyContent:'center',
                alignItems: "center",
                marginLeft:{xs:'10px',sm:'30px',md:'350px'}
              }}
            >
              <Button
                variant="contained"
                sx={{
                  margin: { xs: 2, sm: 5, md: "10px" },
                  backgroundColor: "#fff",
                  padding: {xs:'0px',sm:'15px', md:'10px'},
                  fontWeight: 700,
                  fontSize: { xs: "10px", sm: "16px", md: "16px" },
                  color: "#008080",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#f0f0f0",
                  },
                }}
              >
                Order now and receive a FREE personalized breathing evaluation
                plan!
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
