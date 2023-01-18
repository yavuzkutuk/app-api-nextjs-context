import { createContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export default AuthContext;

export const AuthContextProvider = ({ children }) => {
  const [message, setMessage] = useState('not login');

  // LOGIN
  const login = async () => {
    await axios.get('http://localhost:3002/').then((user) => {
      if (user) {
        localStorage.setItem('accessToken', 'dqfqsdfqsdfqsdfsqdfqsdfqsdfsqdf');
        setMessage(user.data.message);
      } else {
        setMessage('erreur');
      }
    });
  };

  // LOGOUT
  const logout = async () => {
    localStorage.removeItem('accessToken');
    setMessage('not login');
  };

  return (
    <AuthContext.Provider value={{ login, logout, message }}>
      {children}
    </AuthContext.Provider>
  );
};
