
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "react-big-calendar/lib/css/react-big-calendar.css"
import {BrowserRouter} from "react-router-dom"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
