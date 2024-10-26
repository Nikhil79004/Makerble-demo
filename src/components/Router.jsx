import Router from "./Router"; // Ensure you use .jsx if needed.
import Home from "./Home";
import Root from "./Root";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        }
      ],
    },
  ]);

export default Router;