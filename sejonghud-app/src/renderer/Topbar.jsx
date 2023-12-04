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

const drawerWidth = 400;

export default function Topbar() {
  return(
    <AppBar sx={{ width: `calc(100% - ${drawerWidth}px)`}}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            SejongHud - 20010984 권세준 데이터사이언스학과
          </Typography>
        </Toolbar>
    </AppBar>
  );
}
