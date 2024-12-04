import "./App.css"
import axios from "axios"
import { UserContextpProvider } from "./contexts/UserContextpProvider"
import AppRouter from "./routes/AppRouter"
axios.defaults.withCredentials = true
function App() {
 
  return (
    <>
      <UserContextpProvider>
          <AppRouter/>
      </UserContextpProvider>
    </>
  )
}

export default App
