import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App.jsx'
import Blog from './pages/Blog.jsx'
import Contact from './pages/Contact.jsx'
import Projects from './pages/Projects.jsx'
import Resume from './pages/Resume.jsx'
import Timeline from './pages/Timeline.jsx'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/projects', element: <Projects />},
  {path: '/resume', element: <Resume />},
  {path: '/timeline', element: <Timeline />},
  {path: '/blog', element: <Blog />},
  {path: '/contact', element: <Contact />}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
