import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {NextUIProvider} from "@nextui-org/react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {RecoilRoot} from "recoil";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <NextUIProvider>
      <RecoilRoot>
          <RouterProvider router={router} />
      </RecoilRoot>
  </NextUIProvider>,
)
