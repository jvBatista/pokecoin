import { ThemeProvider } from 'styled-components';
import Router from "./routes";
import "./index.css";

import theme from './global/styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  )
}

export default App
