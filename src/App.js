import './App.css';
import sampledata from './sample-data.json';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Cards from './components/Cards/Cards';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className="App">
     <Header/>
     <Input/>
     <Layout data={sampledata}/>
     <Footer/>
  
    </div>
  );
}
export default App;
