import React, { useEffect, useState } from 'react';
import './App.css';
import User from './component/User';
import { getUserDetails } from './config/axiosInstance';

function App() {
  const [isLoding, setIsLoading] = useState(true);
  useEffect(() => {
    getUserDetails()
      .then(() => {
        setIsLoading(false);
      })
      .catch(err => {
        console.log('something went wrong', err);
      });
  }, []);

  return isLoding ? <>Loading....</> : <User />;
}

export default App;
