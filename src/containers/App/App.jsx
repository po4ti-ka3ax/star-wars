import routesConfig from '@routes/routesConfig';
import Header from '@components/Header/Header';

import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import s from './App.module.css';



const App = () => {
  return (
    <div className={s.header}>
      <Router>
        <div className={s.wrapper}>
          <Header />
          <Routes>
            {routesConfig.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                element={route.element} />
            ))};
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
