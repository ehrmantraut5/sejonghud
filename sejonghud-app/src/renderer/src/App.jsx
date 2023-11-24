import Versions from './components/Versions'
import icons from './assets/icons.svg'
import { ColorModeContext, useMode} from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from './scenes/global/Topbar';
import Dashboard from "./scenes/dashboard";
import Sidebar from "./scenes/dashboard";
import Sidebar from "./scenes/dashboard";
import Sidebar from "./scenes/dashboard";
import Sidebar from "./scenes/dashboard";
import Sidebar from "./scenes/dashboard";
import Sidebar from "./scenes/dashboard";
import Sidebar from "./scenes/dashboard";
import Sidebar from "./scenes/dashboard";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div classname = "app">
          <main className="content">
            <Topbar />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;