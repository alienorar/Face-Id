import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"

import { SignIn, TeacherPanel } from "@/modules"
import { routesConfig } from "./routes"
import App from "@/App"
import { ThemeProvider } from "@/modules/teacher-panel/pages"




const Index = () => {
  const renderRoutes = () =>
    routesConfig.flatMap((route) => {
      const Component = route.element
      return <Route key={route.path} path={route.path} element={<Component />} />
    })

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App/>}>
        {/* Public routes */}
        <Route path="/" element={<SignIn />} />

        {/* Protected routes */}
        <Route
          path="/teacher-panel"
          element={
            <ThemeProvider>
              <TeacherPanel />
            </ThemeProvider>
          }
        >
          {renderRoutes()}
        </Route>
      </Route>,
    ),
  )

  return <RouterProvider router={router} />
}

export default Index