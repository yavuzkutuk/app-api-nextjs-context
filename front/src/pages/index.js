import { useState } from 'react';
import { useAuthContext } from 'hook';

export default function Home() {
  const { login, logout, message } = useAuthContext();

  return (
    <>
      <div align="center" style={{ marginTop: '30%' }}>
        {message}
        <br />
        <br />
        {message === 'not login' && <button onClick={login}>login</button>}
        {message === 'login' && <button onClick={logout}>logout</button>}
      </div>
    </>
  );
}
