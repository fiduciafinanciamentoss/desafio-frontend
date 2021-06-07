import * as ReactRedux from "react-redux";
import store from "./redux/createStore";
import Index from './components/Index';
import Header from './components/Header';
import { GlobalStyle } from './styles/style';
function App() {

  return (
   <ReactRedux.Provider store={store}>
      <Header/>
      <Index/>
      <GlobalStyle/>
   </ReactRedux.Provider>
  );
}

export default App;
