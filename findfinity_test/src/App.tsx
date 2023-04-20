import React from 'react';
import './App.css';
import { getUserDetails } from './config/axiosInstance';
import { useEffect, useState } from 'react';
import { pickProfileImage, pickUserEmail, pickUserName } from './utils/storageUtils';
import UserInfo from './component/UserInfo';

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    return () => {
      getUserDetails();
    }
  }, [count])

  const handleRefresh = (e:any) => setCount(count+1);
  
  
  return (
    <div className="box">
      <UserInfo name= {pickUserName()} email={pickUserEmail()} url= {pickProfileImage()}/>
      <button onClick={handleRefresh}>Refresh</button>
    </div>
  );
}

export default App;
