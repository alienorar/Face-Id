import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import App from "../App"
import { SignIn, TeacherPanel, } from "@modules"

const Index = () => {



  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="/" element={<SignIn />} />
        <Route path="/teacher-panel" element={<TeacherPanel />}>
          {/* <Route
            index
            element={hasPermission(["ADMIN_ROLE_MENU"]) ? <Navigate to="admin-page" replace /> : <AccessDenied />}
          />
          {renderRoutes()}
          <Route path="*" element={<AccessDenied />} /> */}
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default Index
