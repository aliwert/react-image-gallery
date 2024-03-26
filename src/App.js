import Picture from "./components/Picture";
import data from "./helper/data";
import './App.css';

function App() {
  return (
    <div className="App">
     <h1 style={{textAlign: "center"}}>Albums</h1>
     <Picture data={data} />
    </div>
  );
}

export default App;
