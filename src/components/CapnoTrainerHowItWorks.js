import React from 'react';
import { Box, Grid, Typography, Card, CardContent } from '@mui/material';
import BreathePattern from "../assets/images/breathe_patterns.png";

const CapnoTrainerHowItWorks = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '608px',
        position: 'relative',
        background: `linear-gradient(to right, rgba(255, 255, 255, 0.9) 50%, rgba(255, 255, 255, 0.5) 70%, rgba(255, 255, 255, 0) 100%), url(${BreathePattern})`,
        backgroundSize: 'cover',
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
        marginTop:'30px'
      }}
    >
      <Box
        sx={{
          flex: 1,
          p: 5,
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Typography
          sx={{ fontWeight: 700, fontSize:'40px', mb: 3 , fontFamily: "'Spectral SC', serif",}}
        >
          HOW THE CAPNOTRAINER® GO WORKS
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Card
              sx={{
                backgroundColor: 'rgba(0, 128, 128, 1)',
                color: 'white',
                borderRadius: '8px',
              }}
            >
              <CardContent>
                <Typography variant="h6">
                  Measure What Matters
                </Typography>
                <Typography variant="body2">
                  Monitor your End-Tidal CO2 (PetCO2) in real time to assess how effectively your breathing supports acid-base balance and health.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Card
              sx={{
                backgroundColor: 'rgba(0, 128, 128, 1)',
                color: 'white',
                borderRadius: '8px',
              }}
            >
              <CardContent>
                <Typography variant="h6">
                  Customized Interventions
                </Typography>
                <Typography variant="body2">
                  Based on your unique breathing habits, receive tailored exercises and interventions to dismantle bad habits and cultivate optimal ones.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Card
              sx={{
                backgroundColor: 'rgba(0, 128, 128, 1)',
                color: 'white',
                borderRadius: '8px',
              }}
            >
              <CardContent>
                <Typography variant="h6">
                  Visualize Your Breathing
                </Typography>
                <Typography variant="body2">
                  See your breathing habits on a capnogram, a dynamic display of your inhalation and exhalation patterns. Pinpoint issues like overbreathing, gasps, or shallow breaths.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Card
              sx={{
                backgroundColor: 'rgba(0, 128, 128, 1)',
                color: 'white',
                borderRadius: '8px',
              }}
            >
              <CardContent>
                <Typography variant="h6">
                  Engage in Practicums
                </Typography>
                <Typography variant="body2">
                  Explore playful self-intervention techniques to realign breathing mechanics with your body’s needs—whether through nose-breathing challenges or CO2 biofeedback training.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ flex: 1 }}></Box>
    </Box>
  );
};

export default CapnoTrainerHowItWorks;
