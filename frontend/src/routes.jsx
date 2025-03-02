    import {createBrowserRouter,RouterProvider} from "react-router-dom";
    import App from "./App";
    import Create from "./components/Create";
    import Read from "./components/Read";
    import Edit from "./components/Edit";

    let routes = createBrowserRouter([{
        path:"/",
        element:<App/>,
    },
    {
        path:"/create",
        element:<Create/>
    },
    {
    path:"/read/:id",
    element:<Read/>
    },
{
    path:"/edit/:id",
    element:<Edit/>
}])

    export default routes;