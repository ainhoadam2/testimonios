import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './Testimonio.css';

const Testimonio = ({ nombre, cargo, empresa, imagen, altImagen, testimonio }) => {
  const [meGusta, setMeGusta] = useState(false);

  const handleMeGusta = () => {
    setMeGusta(!meGusta);
  };

  return (
    <Card className="testimonio-card">
      <CardMedia
        component="img"
        height="300"
        image={imagen}
        alt={altImagen}
      />
      <CardContent>
        <Box className="card-header">
          <Box className="card-info">
            <Typography variant="h5" component="div" gutterBottom>
              {nombre}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              {cargo} en {empresa}
            </Typography>
          </Box>
          <IconButton 
            onClick={handleMeGusta} 
            color="error"
            aria-label="me gusta"
            className="like-button"
          >
            {meGusta ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </Box>
        <Typography variant="body1" className="testimonio-texto">
          "{testimonio}"
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Testimonio;