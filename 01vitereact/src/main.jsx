import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const MyApp = ()=>{
  return(
    <div>
      <h1>Custom App || Singh Rajput </h1>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <App />
      <MyApp />
    </>
  </React.StrictMode>
)
