import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Loader from '../components/Loader';

export default function withLogoutAuth(Component) {
  function WithLogoutAuth(props) {
    const router = useRouter();
    const { token } = useSelector((state) => state.user);

    useEffect(() => {
      if (token) {
        router.push('/dashboard');
      }
    }, [token]);

    return <>{token ? <Loader /> : <Component {...props} />}</>;
  }

  return WithLogoutAuth;
}
