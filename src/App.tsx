import React from 'react';
import './App.css';
import { getUserDetails } from './config/axiosInstance';
import { useEffect, useState } from 'react';
import { pickProfileImage, pickUserEmail, pickUserName } from './utils/storageUtils';
import UserInfo from './component/UserInfo';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [email, setemail] = useState('');
  const [imgurl, setImgurl] = useState('');

  useEffect(() => {
    return () => {
      getUserDetails()
        .then(() => {
          setName(pickUserName());
          setemail(pickUserEmail());
          setImgurl(pickProfileImage());
        })
        .catch(err => {
          console.log('something went wrong', err);
        });
    };
  }, [count]);

  const handleRefresh = (e: any) => setCount(count + 1);

  return (
    <div className="box">
      <UserInfo name={name} email={email} url={imgurl} />
      <button onClick={handleRefresh}>Refresh</button>
    </div>
  );
}

export default App;
