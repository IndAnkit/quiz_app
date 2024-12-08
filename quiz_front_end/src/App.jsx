import AppProvider from "providers/AppProvider";
import "./App.css";
import AppRouter from "appRouter";

function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}

export default App;
