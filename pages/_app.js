import React from 'react';
import NavBar from '../frontend/components/NavBar';
import '../frontend/styles/globals.css'


function MyApp({ Component, pageProps }) {

  return (
  <div className="container">
    <NavBar />
    <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    <Component {...pageProps} />
  </div>
  )
}

export default MyApp