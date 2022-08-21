import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Home, Login, Welcome } from './pages';
import { Layout } from './shared/Layout';
import { fetchMe } from './store/features';
import store from './store/store';

function App() {

  useEffect(() => {
    store.dispatch(fetchMe());
  })

  return (
    <Provider store={store}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/welcome" element={<Welcome />} />
          </Route>
        </Routes>
    </Provider>
    
  );
}

export default App;
