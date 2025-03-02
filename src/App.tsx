import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import useAuth from './hooks/useAuth';
import Aulas from './components/TesteInicial';
import { theme } from './styles/theme';
import Nav from './components/nav';
import Sidebar from './components/sidebar';
import Login from './pages/login';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/configGlobal';
import Dashboard from './pages/Dashboard';
import ManageClasses from './pages/manageClasses';
import { ClassProvider } from './store/classesContext';
import AvailableClasses from './pages/availableClasses';
import Profile from './pages/profile';

function App() {
  const { auth } = useAuth();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ClassProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            {/* Pendencias: 
              - Retirar "!" e validar rota no backend.
              - Inserir '/auth/' 
            */}
            <Route
              path="/dashboard"
              element={!auth ? <Dashboard /> : <Navigate to="/login" />}
            />
            <Route
              path="/manage-classes"
              element={!auth ? <ManageClasses /> : <Navigate to="/login" />}
            />
            <Route
              path="/available-classes"
              element={!auth ? <AvailableClasses /> : <Navigate to="/login" />}
            />
            <Route
              path="/profile"
              element={!auth ? <Profile /> : <Navigate to="/login" />}
            />
            <Route path="*" element={<Navigate to={auth ? "/dashboard" : "/login"} />} />
          </Routes>
        </Router>
      </ClassProvider>
    </ThemeProvider>

  );
}

export default App;


// <Aulas />
// <Enrollments />