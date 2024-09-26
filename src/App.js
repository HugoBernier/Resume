import logo from './logo.svg';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import M from 'materialize-css';

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.dropdown-trigger');
  M.Dropdown.init(elems, {});
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='blue'>Mon CV</h1>
      </header>
    </div>
  );
}

export default App;
