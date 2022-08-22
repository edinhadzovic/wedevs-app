import React, { useEffect } from 'react';
import { Provider, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Discover, Home, Jobs, Login, NewPost, UserProfile, Welcome } from './pages';
import { Layout } from './shared/Layout';
import { fetchMe, selectMe } from './store/features';
import store from './store/store';


const LoadingIndicator = () => {
  const {loading} = useSelector(selectMe);


  if (loading) {
    return (
      <div>loading...</div>
    )
  }

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/new-post" element={<NewPost />} />
        <Route path="/users/:username" element={<UserProfile />} />
        <Route path="/welcome" element={<Welcome />} />
      </Route>
    </Routes>
  );
}

function App() {
  
  useEffect(() => {
    store.dispatch(fetchMe());
  })

  return (
    <Provider store={store}>
        <LoadingIndicator />
    </Provider>
    
  );
}

export default App;
