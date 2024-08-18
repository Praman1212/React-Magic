import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Usestate from './Usestate.jsx'
import Props from './Props.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Usestate />
    {/* we can send the data for each components called as props */}
    <Props firstName="Praman" lastName="Ghimire"/>
  </StrictMode>,
)
