import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <form>
        <hr  />
        
        <table>
          <tr>
            <td>
              <lable for =" frist name "></lable></td>
              <td> <input className="input1" type="text" id="fname"  placeholder="yuvi"  /> </td>
          </tr>
          <tr>
            <td><lable for ="last name "></lable></td>
            <td><input className="input1" type="type" id ="lname" placeholder="shinde"  /></td>
          </tr>
          <tr>
            <td colSpan="2"><input id ="button1 " type="submit" value ="Submit"  /></td>
          </tr>
        </table>
        
        <hr  />
      </form>
    </div>
  );
}

export default App;
