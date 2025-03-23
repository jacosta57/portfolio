import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App.jsx'
import Blog from './pages/Blog.jsx'
import Contact from './pages/Contact.jsx'
import ProjectList from './pages/ProjectList.jsx'
import Resume from './pages/Resume.jsx'
import Timeline from './pages/Timeline.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom';
import Project from './pages/Project.jsx'
import RootLayout from './pages/RootLayout.jsx'

const router = createBrowserRouter(
  createRoutesFromElements((
    <Route path='/' element={<RootLayout />}>
      <Route path='/' element={<App />} />
      <Route path='/projects' element={<ProjectList />} />
      <Route path='/resume' element={<Resume />} />
      <Route path='/timeline' element={<Timeline />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/projects/:project' element={<Project />} />
    </Route>
  ))
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
