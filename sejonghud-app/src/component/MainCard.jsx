import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Subjects from '../data/SubjectData';

export default function MainCard({selectedSubject}) {
  return (
    <Card sx={{width: "100%",mt: 2, mr: 2, ml: 2, mb: 2}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {selectedSubject.prop}
        </Typography>
      </CardContent>
    </Card>
  );
}