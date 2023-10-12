import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import ErrorPage from "./routes/ErrorPage"
import Detail from "./routes/Detail";
import Panier from "./routes/Panier";
import ListeArticles from "./ListeArticles";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/Detail/:id",
        element: <Detail />
    },
    {
        path: "/Panier/",
        element: <Panier />
    },
    {
        path: "/ListeArticles",
        element: <ListeArticles/>
    }
])


export default router;