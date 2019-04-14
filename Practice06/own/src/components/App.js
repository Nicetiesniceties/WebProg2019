import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import './../styles.css';
import Blog from './../components/Blog'

export default () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Blog />
      </div>
    </BrowserRouter>
  )
}
