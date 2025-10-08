import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import NotFound from "../pages/NotFound/NotFound";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import Installation from "../pages/Installation/Installation";

const router = createBrowserRouter([
    {
        path: "/",
        hydrateFallbackElement: <div>Loading...</div>,
        Component: Root,
        errorElement: <NotFound />, 
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "home",
                Component: Home
            },
            {
                path: "apps",
                Component: Apps
            },
            {
                path: "installation",
                Component: Installation
            },
        ],
    },
]);

export default router;