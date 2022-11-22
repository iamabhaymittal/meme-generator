import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header.js";
import Meme from "./components/Meme.js";
import "@fontsource/karla";
import "@fontsource/inter";
function App() {
  return (
    <div className="App">
      <Header />
      <Meme />
    </div>
  );
}

export default App;
