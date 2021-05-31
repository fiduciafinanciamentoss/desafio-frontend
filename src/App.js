import Router from "./router/Router";
import GlobalState from "./global/GlobalState";

export default function App() {
  return (
    <GlobalState>
      <Router />
    </GlobalState>
  );
}