import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './routes/Home.jsx'
import Alunos from './routes/Alunos.jsx'
import Saibamais from './routes/Saibamais.jsx'
import Sobre from './routes/Sobre.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/alunos",
        element:<Alunos/>
      },
      {
        path:"/sobre",
        element:<Sobre/>
      },
      {
        path:"/saibamais",
        element:<Saibamais/>
      }      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
