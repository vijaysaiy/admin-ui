import {createBrowserRouter} from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import Categories from "./pages/Categories.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    }, {
        path: "/categories",
        element: <Categories/>
    }])