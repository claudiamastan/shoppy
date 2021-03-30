import './App.css';
import {useState, useEffect} from 'react';
import Header from '../src/Components/Header';
import CardsList from '../src/Components/CardsList';
import PasswordPopUp from './Components/PasswordPopUp';

function App() {

  const [items, setItems] = useState([]);
  const [hidden, togglePopUp] = useState(true);
  const [password, setPassword] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/claudiamastan/shoppy/items')
    .then(response => response.json())
    .then(items => {setItems(items)})
  }, [])

  return (
    <div className="App">
      <Header password={password} hidden={hidden} togglePopUp={togglePopUp} setSearchQuery={setSearchQuery}/>
      <PasswordPopUp hidden={hidden} setHidden={togglePopUp} password={password} setPassword={setPassword}/>
      <CardsList items={items} searchQuery={searchQuery} setHidden={togglePopUp} hidden={hidden} password={password}/>
    </div>
  );
}

export default App;
