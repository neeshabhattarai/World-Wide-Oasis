import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {ErrorBoundary} from 'react-error-boundary'
import App from './App.jsx'
import './index.css'
function ErrorBoundarys({error,resetErrorBoundary}){
  return<>
  <h1>An error Occured</h1>
  <h1>{error.message}</h1>
  <button onClick={()=>resetErrorBoundary()}>Back</button></>;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary fallbackRender={ErrorBoundarys} onReset={()=>window.location.replace('/')} >
    <App />
    </ErrorBoundary>
   

  </StrictMode>,
)
