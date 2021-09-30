import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import ThemeContextProvider from "./contexts/ThemeContext";


//1,2,3,4,5,,,,,,,,,,,,,,,,,21
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookList />  
        <ThemeToggle />      
      </ThemeContextProvider>
    </div>
  );
}

export default App;
