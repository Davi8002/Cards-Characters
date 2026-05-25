import './index.css';
import Robin from "./pngs/robin.png";
import Card1 from './components/Card1.jsx';
import Card2 from './components/Card2.jsx';
import Card3 from './components/Card3.jsx';
import Card4 from './components/Card4.jsx';
import CardRoot from './components/CardRoot.jsx';


function App() {

  return (

    <div className="container">

      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />

      <CardRoot 
      classe = "card5"
      nome = "Robin"
      foto = {Robin}
      midiaTipo = "Jogo"
      midia = "Honkai Star Rail"
      tipo = "Função/Caminho/Tipo"
      tipoResposta = "Suporte/Harmonia/Físico"
      frase = '"If I can stop one heart from breaking, I shall not live in vain."'
      />
        
        
      
    </div>

  );

}

export default App;