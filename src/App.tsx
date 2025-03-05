import { BrowserRouter as Router } from 'react-router-dom';
import { theme } from './styles/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/configGlobal';
import { ClassProvider } from './store/classesContext';
import { AuthProvider } from './store/authContext';
import AppRoutes from './routes/appRoutes';
import ToastProvider from './services/toastProvider';
//
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToastProvider>
        <AuthProvider>
          <ClassProvider>
            <Router>
              <AppRoutes />
            </Router>
          </ClassProvider>
        </AuthProvider>
      </ToastProvider>

    </ThemeProvider>

  );
}

export default App;
