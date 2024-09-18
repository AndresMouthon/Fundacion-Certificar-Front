import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { store } from "./redux/store.redux";
import Rutas from "./routes/Rutas";

function App() {

  return (
    <Provider store={store}>
      <ToastContainer />
      <Rutas />
    </Provider>
  )
}

export default App
