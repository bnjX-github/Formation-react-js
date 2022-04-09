// import FirstComponent from './FirstComponent';
// import FirstFunctionalComponent from './FirstFunctionalComponent';
import Shop from './Shop/Shop';
import './App.css';

function App() {

  const showLucie = () => {
    console.log('Lucie est là')
  }

  return (
    <div id="App">
        {/* <FirstComponent 
          name='Lucie'
          printLucie={showLucie}
        /> */}
        {/* <FirstFunctionalComponent 
          name='Lucie'
          printLucie={showLucie}
        /> */}
        <Shop />
    </div>
  );
}

export default App;
