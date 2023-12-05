import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';

const events = [
  //{ title: 'Meeting', start: new Date() },
  { title: 'Soccer', start: new Date() }
]

export default function Fullcalendar() {
  return (
      <Card sx={{ mt: 2, mr: 2, ml: 2, mb: "2px"}}>
      <CardContent>
        <div>
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView='dayGridMonth'
            weekends={true}
            events={events}
            eventContent={renderEventContent}
          />
        </div>
      </CardContent>
      </Card>
  )
}

// a custom render function
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}
