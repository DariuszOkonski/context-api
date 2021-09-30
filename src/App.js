import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import AuthContextProvider from "./contexts/AuthContext";
import ThemeContextProvider from "./contexts/ThemeContext";


//1,2,3,4,5,6,7,8,,,,,,,,,,,,,,21
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookList />  
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
