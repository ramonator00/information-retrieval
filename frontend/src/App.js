import NavigationBar from "./components/NavigationBar.js";
import Footer from "./components/Footer";
import Search from "./components/Search"

function App() {
  return (
    <div className="App">
      <NavigationBar/>
        <Search/>
        <Footer/>
    </div>
  );
}

export default App;
