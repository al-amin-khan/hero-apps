import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import NotFound from "../pages/NotFound/NotFound";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import Installation from "../pages/Installation/Installation";
import CardDetail from "../components/CardDetail/CardDetail";
import AppNotFound from "../pages/NotFound/AppNotFound";

const router = createBrowserRouter([
    {
        path: "/",
        hydrateFallbackElement: <div>Loading...</div>,
        Component: Root,
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
                path: "apps/:id",
                Component: CardDetail
            },
            {
                path: "installation",
                Component: Installation
            },
            {
                path: "apps/*",
                Component: AppNotFound
            },
            {
                path: "*",
                Component: NotFound
            },
            
        ],
    },
]);

export default router;