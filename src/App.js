import './App.css';
import logo from  './logo.svg'

function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'roboto'
    }}>
      <img src={logo} alt="Quality logo"/>
      <h1 style={{
        color: '#6ec177',
        margin: 0
      }}
      >Wah Gwan Soon come</h1>
    </div>
  );
}

export default App;
