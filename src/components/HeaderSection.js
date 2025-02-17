import React from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import BreatheMattersLogo from "../assets/images/BreatheMattersLogo.png";
import Device from "../assets/images/device.png";

const HeaderSection = () => {
  return (
    <Box>
      <Box
        sx={{
          background: "linear-gradient(135deg,#6BB5B5,#008080)",
          height: { xs: "auto", sm: "auto", md: "440px" },
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
            padding: { xs: "10px 20px", md: "20px 40px" },
          }}
        >
          <Box
            component="img"
            src={BreatheMattersLogo}
            alt="BreatheMattersLogo"
            sx={{
              height: "58px",
              width: "260px",
              mb: { xs: 2, md: 0 },
              marginLeft: { xs: "0", md: "40px" },
            }}
          />

          <Button
            variant="contained"
            sx={{
              bgcolor: "#006D5B",
              color: "white",
              fontWeight: 600,
              fontSize: "16px",
              textTransform: "none",
              width: "121px",
              height: "43px",
              borderRadius: "8px",
              "&:hover": {
                bgcolor: "#005a4c",
              },
            }}
          >
            Book Now
          </Button>
        </Box>

        <Box>
          <Grid container>
            <Grid item xs={12}>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "28px", sm: "32px", md: "40px" },
                  lineHeight: 1.2,
                  mb: 2,
                  fontFamily: "'Spectral SC', serif",
                  color: "#fff",
                  textAlign: { xs: "center", md: "left" },
                  margin: { xs: "15px 20px", md: "15px 40px" },
                }}
              >
                Transform Your Life with the Revolutionary CapnoTrainer® GO
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  borderRadius: "8px",
                  textAlign: "left",
                  color: "#fff",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: "22px", sm: "24px", md: "36px" },
                    margin: { xs: "5px 20px", md: "5px 40px" },
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Breathe Smarter, Live Better
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: "14px", sm: "16px" },
                    lineHeight: 1.6,
                    mb: 4,
                    fontWeight: 400,
                    padding: { xs: "0px 20px", md: "0px 40px" },
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Breathing is more than just an unconscious action—it's a
                  foundation of health, performance, and emotional well-being.
                  But what if your breathing habits are silently holding you
                  back? Enter the CapnoTrainer® GO, the groundbreaking tool that
                  merges science, psychology, and technology to revolutionize
                  your breathing habits and transform your life.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  padding: { xs: "0", md: "1rem" },
                  borderRadius: "8px",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={Device}
                  alt="CapnoTrainer Device"
                  style={{
                    width:'auto',
                    maxWidth: "400px",
                    height: {xs:'100%', sm:'340px', md:'380px'},
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box
        sx={{
          background: "linear-gradient(135deg,#008080,#001A1A)",
          height: "110px",
        }}
      />
    </Box>
  );
};

export default HeaderSection;
