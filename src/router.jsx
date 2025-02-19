import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Tools from "./pages/Tools";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/settings",
        element: <Settings />,
    },
    {
        path: "/tools",
        element: <Tools />,
    }
]);
