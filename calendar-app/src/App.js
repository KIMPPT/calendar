import logo from "./logo.svg";
import ReactModal from 'react-modal'
import "./App.css";
import ViewCalendar from "./components/ViewCalendar";
import Example from "./components/Example";
import Example2 from "./components/Example2";
ReactModal.setAppElement('#root');
function App() {
  return (
    <div className="App">
      <ViewCalendar/>
      <Example/>
      <Example2/>
    </div>
  );
}

export default App;
