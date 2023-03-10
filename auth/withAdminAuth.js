import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { setLogout } from '../store/slice/userSlice';
import Loader from '../components/Loader';

export default function withAdminAuth(Component) {
  function WithAdminAuth(props) {
    const router = useRouter();
    const dispatch = useDispatch();
    const { token, tokenPayload } = useSelector((state) => state.user);

    useEffect(() => {
      if (!token) {
        router.push('/signin');
      } else {
        // Convert the expiration time to milliseconds
        const expirationTime = tokenPayload?.exp ? tokenPayload.exp * 1000 : 0;

        // If token has expired
        if (Date.now() > expirationTime) {
          dispatch(setLogout());
          router.replace('/signin');
        }
      }
    }, [token, tokenPayload, router]);

    return (
      <>
        {token && tokenPayload?.isAdmin ? <Component {...props} /> : <Loader />}
      </>
    );
  }

  return WithAdminAuth;
}
