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
import { Subjects } from '../data/SubjectData';
import ActionAreaCard from './Card';
const yaml = require('js-yaml');
const fs = require('fs');

const drawerWidth = 420

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
            {Subjects.map((text, index) => (
              <ListItem key={text} disablePadding sx={{backgroundColor: "#F2F2F2", }}>
                <ActionAreaCard title={text}/>
              </ListItem>
            ))}
          </List>
        </Box>
    </Box>
  );
}
