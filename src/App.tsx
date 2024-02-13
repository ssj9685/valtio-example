import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TodoPage from "./pages/TodoPage";
import { StrictMode } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TodoPage />,
  },
]);

const App = () => (
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

export default App;
