import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FactCheckIcon from '@mui/icons-material/FactCheck';

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275,margin: 1, height: 150 }}>
      <CardContent>
        <FactCheckIcon  fontSize="large" /> 
        <Typography sx={{ mb: 1.5, float: "right", fontSize: 30}} color="green">
          52
        </Typography>
        <Typography variant="h6" component="div" color="green">
          Atendimentos
        </Typography>
      </CardContent>
    </Card>
  );
}
