import { RouterProvider } from "react-router-dom"
import { routes } from "./routes/routes"
import GlobalContextProvider from "./provider/GlobalContextProvider"


function App() {
  const router = routes
  return (
    <>
    <GlobalContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </GlobalContextProvider>
    </>
  )
}

export default App
