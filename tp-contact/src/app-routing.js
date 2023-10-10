import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import ErrorPage from "./routes/ErrorPage"
import Menu from "./routes/Menu"
import Contact from "./routes/Contact"


const router = createBrowserRouter([
    {path :"/",
    element : <Menu />,
    errorElement : <ErrorPage/>,
    children: [
        {
            path :"/",
            element : <App/>
        },
        {
            path :"/contact",
            element : <Contact/>
        }
    ]},
    // {path :"/form",
    // element : <Form />,
    // errorElement : <ErrorPage/> }
])


export default router