import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import MeditatingWomen from "../assets/images/medidating women.png";
import Headache from "../assets/images/headache.png";
import LowBattery from "../assets/images/low_battery.png";
import MusclePain from "../assets/images/muscle_pain.png";

const BreathingSection = () => {
  return (
    <Box sx={{ marginBottom: "50px" }}>
      <Typography
        sx={{
          mt: 2,
          mb: 4,
          fontWeight: 800,
          fontFamily: "'Spectral SC', serif",
          fontSize: "40px",
          textAlign: "center",
        }}
      >
        Discover the Hidden Power of Your Breath
      </Typography>

      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ maxWidth: "1200px", margin: "0 auto" }}
        spacing={2}
      >
        <Grid item xs={12} sm={12} md={4}>
          <Box
            component="img"
            src={MeditatingWomen}
            alt="Meditating Women"
            sx={{
              width: { xs: "250px", sm: "400px", md: "400px" },
              height: { xs: "300px", sm: "440px", md: "440px" },
              display: "block",
              mx: "auto",
            }}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <Box sx={{display:'flex',flexDirection:'column',marginInline:{xs:'20px',sm:'50px',md:'0px'}}}>
            <Box
              sx={{
                backgroundColor: "#E6F2F2",
                padding: "2rem",
                height: { xs: "auto", sm: "300px", md: "280px" },
                width: { xs: "275px", sm: "550px", md: "520px" },
              }}
            >
              <Typography
                sx={{ fontSize: "16px", fontWeight: 400, color: "#444" }}
              >
                Your breathing isn't just about oxygen in and carbon dioxide
                out—it's a complex behavior shaped by triggers, habits, and
                physiology. When misaligned, these habits can:
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  mt: 3,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                  }}
                >
                  <Box>
                    <img src={Headache} height={44} width={44} alt="Headache" />
                  </Box>
                  <Box>
                    <Typography
                      sx={{ color: "#222", fontSize: "16px", fontWeight: 700 }}
                    >
                      Compromise your health:
                    </Typography>
                    <Typography
                      sx={{ color: "#555", fontSize: "16px", fontWeight: 400 }}
                    >
                      Triggering anxiety, fatigue, and physical discomfort.
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                  }}
                >
                  <Box>
                    <img
                      src={LowBattery}
                      height={44}
                      width={44}
                      alt="LowBattery"
                    />
                  </Box>
                  <Box>
                    <Typography
                      sx={{ color: "#222", fontSize: "16px", fontWeight: 700 }}
                    >
                      Disrupt your performance:
                    </Typography>
                    <Typography
                      sx={{ color: "#555", fontSize: "16px", fontWeight: 400 }}
                    >
                      Causing focus deficits, memory issues, and suboptimal
                      endurance.
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                  }}
                >
                  <Box>
                    <img
                      src={MusclePain}
                      height={44}
                      width={44}
                      alt="MusclePain"
                    />
                  </Box>
                  <Box>
                    <Typography
                      sx={{ color: "#222", fontSize: "16px", fontWeight: 700 }}
                    >
                      Exacerbate existing conditions:
                    </Typography>
                    <Typography
                      sx={{ color: "#555", fontSize: "16px", fontWeight: 400 }}
                    >
                      Like asthma, chronic pain, and even stress-related
                      disorders.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
           
            <Box
              sx={{
                padding: { xs: "20px 15px", sm: "18px 25px", md: "15px 20px" },
                backgroundColor: "#008080",
                color: "#fff",
                height: "auto",
                width: { xs: "340px", sm: "615px", md: "588px" },
                boxSizing: "border-box",
                mr: { xs: 0, sm: 0, md: 0 },
              }}
            >
              <Typography
                sx={{ color: "#fff", fontSize: "16px", fontWeight: 400 }}
              >
                Millions of people suffer the consequences of poor breathing
                habits. But you don’t have to be one of them. With the{" "}
                <span style={{ fontWeight: 700 }}>CapnoTrainer® GO</span>,
                you’ll unlock a scientifically-backed pathway to breathing
                mastery.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BreathingSection;
