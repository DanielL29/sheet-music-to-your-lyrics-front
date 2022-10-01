import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './assets/styles/GlobalStyle';
import { TeacherProvider } from './contexts/TeacherContext';
import { UserProvider } from './contexts/UserContext';
import Router from './Router';

export default function App() {
  return (
    <TeacherProvider>
      <UserProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </UserProvider>
    </TeacherProvider>
  );
}
