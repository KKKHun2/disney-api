import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import NotFound from "./routes/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "character/:characterId",
        element: <Detail />
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  }
]);

export default router;
