import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './assets/styles/GlobalStyle';
import { TeacherProvider } from './contexts/TeacherContext';
import { UserProvider } from './contexts/UserContext';
import Header from './layouts/Header/Header';
import Router from './Router';

export default function App() {
  return (
    <TeacherProvider>
      <UserProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <Router />
        </BrowserRouter>
      </UserProvider>
    </TeacherProvider>
  );
}
