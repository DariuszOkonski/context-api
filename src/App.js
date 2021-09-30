import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import ThemeContextProvider from "./contexts/ThemeContext";


//1,2,3,,,,,,,,,,,,,,,,,,,21
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookList />        
      </ThemeContextProvider>
    </div>
  );
}

export default App;
