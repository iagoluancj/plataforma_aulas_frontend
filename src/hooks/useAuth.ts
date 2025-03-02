import { useState, useEffect } from 'react';

const useAuth = () => {
  const [auth, setAuth] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setAuth(true);
    }
  }, []);

  const login = (token: string) => {
    localStorage.setItem('authToken', token);
    setAuth(true);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setAuth(false);
  };

  return { auth, login, logout };
};

export default useAuth;
