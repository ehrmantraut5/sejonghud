import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Subjects from '../data/SubjectData';
import Fullcalendar from './Fullcalendar';
import WeekCard from './WeekCard';
import Box from '@mui/material/Box';

export default function MainCard({selectedSubject, showFullcalendar}) {
  return (

    <Card sx={{width: "100%",mt: 2, mr: 2, ml: 2, mb: 2}}>
      <CardContent>
      {showFullcalendar ? (
          <Fullcalendar />
        ) : (
          <>
            {/* <Typography gutterBottom variant="h5" component="div">
              {selectedSubject ? selectedSubject.name : "Select a subject"}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {selectedSubject ? selectedSubject.description : "No subject selected"}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {selectedSubject && selectedSubject.prop ? selectedSubject.prop : ""}
            </Typography> */}
            <Box sx={{display:"flex", justifyContent:"space-between"}}>
              <WeekCard week = {"week1"}/>
              <WeekCard week = {"week2"}/>
              <WeekCard week = {"week3"}/>
              <WeekCard week = {"week4"}/>
            </Box>

            <Box sx={{display:"flex", justifyContent:"space-between"}}>
              <WeekCard week = {"week5"}/>
              <WeekCard week = {"week6"}/>
              <WeekCard week = {"week7"}/>
              <WeekCard week = {"week8"}/>
            </Box>
          </>
        )}
      </CardContent>
    </Card>
  );
}
