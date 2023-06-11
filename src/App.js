import React from "react";
import ReactDom,{createRoot} from "react-dom/client"
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import Todo from "./components/todo";

const AppLayout=()=>{

    return(
        <>
           <Todo/>
        </>
    )

}

const root = ReactDom.createRoot(document.getElementById('root'))

root.render(<AppLayout/>)