import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import styles from "./styles.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
