import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Static from './components/Statics/Static';
import Blog from './components/Blog/Blog';
import Topics from './components/Topics/Topics';
import Home from './components/Home/Home';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/home',
          loader: () =>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
       {
        path: '/topics',
        element: <Topics></Topics>
       },
       {
        path: '/static',
        element: <Static></Static>
       },
       {
        path: '/blog',
        element: <Blog></Blog>
       }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
