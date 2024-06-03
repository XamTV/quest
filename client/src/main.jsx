import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";

import myAxios from "./services/myAxios";

import App from "./App";
import Categories from "./pages/Categories";
import CategoryDetails from "./pages/CategoryDetails";
import CategoryEdit from "./pages/CategoryEdit";
import Programs from "./pages/Programs";
import ProgramsDetails from "./pages/ProgramDetail";
import ProgramEdit from "./pages/ProgramEdit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/categories",
        element: <Categories />,
        loader: async () => {
          const response = await myAxios.get("/api/categories");

          return response.data;
        },
        action: async ({ request }) => {
          const formData = await request.formData();

          const name = formData.get("name");

          const response = await myAxios.post("/api/categories", { name });

          return redirect(`/categories/${response.data.insertId}`);
        },
      },
      {
        path: "/categories/:id",
        element: <CategoryDetails />,
        loader: async ({ params }) => {
          const response = await myAxios.get(`/api/categories/${params.id}`);

          return response.data;
        },
      },
      {
        path: "/categories/:id/edit",
        element: <CategoryEdit />,
        loader: async ({ params }) => {
          const response = await myAxios.get(`/api/categories/${params.id}`);

          return response.data;
        },
        action: async ({ request, params }) => {
          const formData = await request.formData();

          switch (request.method.toLowerCase()) {
            case "put": {
              await myAxios.put(`/api/categories/${params.id}`, {
                name: formData.get("name"),
              });

              return redirect(`/categories/${params.id}`);
            }
            case "delete": {
              await myAxios.delete(`/api/categories/${params.id}`);

              return redirect("/categories");
            }
            default:
              throw new Response("", { status: 405 });
          }
        },
      },
      {
        path: "/programs",
        element: <Programs />,
        loader: async () => {
          const response = await myAxios.get("/api/programs");

          return response.data;
        },
        action: async ({ request }) => {
          const formData = await request.formData();

          const name = formData.get("name");

          const response = await myAxios.post("/api/programs", { name });

          return redirect(`/programs/${response.data.insertId}`);
        },
      },
      {
        path: "/programs/:id",
        element: <ProgramsDetails />,
        loader: async ({ params }) => {
          const response = await myAxios.get(`/api/programs/${params.id}`);

          return response.data;
        },
      },
      {
        path: "/programs/:id/edit",
        element: <ProgramEdit />,
        loader: async ({ params }) => {
          const response = await myAxios.get(`/api/programs/${params.id}`);

          return response.data;
        },
        action: async ({ request, params }) => {
          const formData = await request.formData();

          switch (request.method.toLowerCase()) {
            case "put": {
              await myAxios.put(`/api/programs/${params.id}`, {
                name: formData.get("name"),
              });

              return redirect(`/programs/${params.id}`);
            }
            case "delete": {
              await myAxios.delete(`/api/programs/${params.id}`);

              return redirect("/programs");
            }
            default:
              throw new Response("", { status: 405 });
          }
        },
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
