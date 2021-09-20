import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import { store } from './store/store';
import '.././src/style/style.scss'

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
