import Routes from "./routes/Routes";
import { useLocation } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  const route = ["/about", "/rider", "/driver"];
  return (
    <>
      <main>
        <Routes />
      </main>
      {route.includes(location.pathname) ? <Footer /> : null}
    </>
  );
}

export default App;
