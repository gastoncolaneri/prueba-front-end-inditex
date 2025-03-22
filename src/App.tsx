import "./App.css";
import { Header } from "./components/home/Header";
import { RoutesConfig } from "./routes";

function App() {
  return (
    <div className="min-h-[95vh]">
      <Header />
      <RoutesConfig />
    </div>
  );
}

export default App;
