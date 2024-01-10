import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="w-full flex h-full flex-row">
      <Sidebar />
      <div className="flex flex-col w-full bg-[#FAFAFA] h-[100vh] overflow-hidden">
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
