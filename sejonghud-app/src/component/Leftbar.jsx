import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from "react-router-dom";
import { Subjects, Descriptions } from '../data/SubjectData';
import ActionAreaCard from './Card';
import { IndeterminateCheckBox } from '@mui/icons-material';
// const yaml = require('js-yaml');
// const fs = require('fs');

const Item = ({ title, to, icon, selected, setSelected }) => {
  return (
    <ListItemButton
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </ListItemButton>
  );
};

export default function ClippedDrawer() {
  return (
    <Box sx={{backgroundColor: "#F8F8F8" }}>
      <CssBaseline />
        <Box sx={{ overflow: 'auto',}}>
          <List sx={{padding: 0}}>
            {Subjects.map((subject, index) => (
              <ListItem key={index} disablePadding>
                <ActionAreaCard title={subject.name} description={subject.description}/>
              </ListItem>
            ))}
          </List>
        </Box>
    </Box>
  );
}
