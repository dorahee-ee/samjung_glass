import "./App.css";

import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import MainPage from "./Page/MainPage/MainPage";
import About from "./Page/About/About";
import Products from "./Page/Products/Products";
import Machines from "./Page/Machines/Machines";
import Board from "./Page/Board/Board";
import Contact from "./Page/Contact/Contact";


function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/machines",
        element: <Machines />,
      },
      {
        path: "/board",
        element: <Board />,
      },
      {
        path: "/contact",
        element: <Contact />,
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
