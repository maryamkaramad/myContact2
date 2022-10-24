
import { RouterProvider} from 'react-router-dom';
import router from "./router/route";
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import {persistore} from './redux/store'
function App() {
  return (
    <Provider store={store} >
      <PersistGate persistor={persistore} loading={null}>
    <RouterProvider router={router} />
    </PersistGate>
    </Provider>
  );
}

export default App;
