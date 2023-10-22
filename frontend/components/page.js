import React from 'react';
import NavBar from '../components/NavBar';
import '../../app/styles/globals.css'


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