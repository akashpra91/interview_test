import React from 'react';
import { getUserDetails } from '../config/axiosInstance';
import { useEffect, useState } from 'react';
import { pickProfileImage, pickUserEmail, pickUserName } from '../utils/storageUtils';
import UserInfo from './UserInfo';
const User = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [email, setemail] = useState('');
  const [imgurl, setImgurl] = useState('');

  useEffect(() => {
    if (count === 0) {
      setName(pickUserName());
      setemail(pickUserEmail());
      setImgurl(pickProfileImage());
    }

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
      {!!name ? (
        <>
          <UserInfo name={name} email={email} url={imgurl} />
          <button onClick={handleRefresh}>Refresh</button>
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default User;
