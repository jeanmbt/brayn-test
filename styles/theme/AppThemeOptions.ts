import { blueGrey} from '@mui/material/colors';
import { ThemeOptions } from '@mui/material/styles';

const AppThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: { main: blueGrey[800] },
    secondary: { main: "#ff0000" },
  },
};

export default AppThemeOptions;
