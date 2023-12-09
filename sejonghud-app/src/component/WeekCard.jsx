import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({week,}) {
  return (
    <Card sx={{ width: "500px", height: 300 ,margin:2}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {week}
        </Typography>
      </CardContent>
    </Card>
  );
}
