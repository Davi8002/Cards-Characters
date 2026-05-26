import './index.css';


import Oshawott1 from "./pngs/oshawott1.jpeg";

import Sunday1 from "./pngs/sunday1.jpg";
import Sunday2 from "./pngs/sunday2.jpeg";
import Sunday3 from "./pngs/sunday3.jpeg";
import Sunday4 from "./pngs/sunday4.png";


import Robin1 from "./pngs/robin1.png";
import Robin2 from "./pngs/robin2.png";
import Robin3 from "./pngs/robin3.jpeg";
import Robin4 from "./pngs/robin4.jpeg";


import Card3 from './components/Card3.jsx';
import Card4 from './components/Card4.jsx';
import CardRoot from './components/CardRoot.jsx';


function App() {

  return (

    <div className="container">

      <Card3 />
      <Card4 />

      <CardRoot 
      classe = "card1"
      nome = "Oshawott"
      foto1 = {Oshawott1}
      foto2 = {Sunday2}
      foto3 = {Sunday3}
      foto4 = {Sunday4}
      midiaTipo = "Jogo"
      midia = "Pokémon"
      tipo = "Tipo"
      tipoResposta = "Água"
      frase = "'Osha Osha wa ta'"
      link1 = "https://youtu.be/Y-qTC94UxmQ?si=PVMgRNsh0iZ1JgFW"
      link2 = "https://youtu.be/Y-qTC94UxmQ?si=PVMgRNsh0iZ1JgFW"
    />     

        <CardRoot 
      classe = "card2"
      nome = "Sunday"
      foto1 = {Sunday1}
      foto2 = {Sunday2}
      foto3 = {Sunday3}
      foto4 = {Sunday4}
      midiaTipo = "Jogo"
      midia = "Honkai Star Rail"
      tipo = "Função/Caminho/Tipo"
      tipoResposta = "Suporte/Harmonia/Imaginário"
      frase = "'I think people believe birds are meant to fly because they've never seen those birds crashing to their death '"
      link1 = "https://www.youtube.com/watch?v=ZFWC0dwB3wY"
      link2 = "https://www.youtube.com/watch?v=ud0jXAK5Uls"
    />
        
         <CardRoot 
      classe = "card5"
      nome = "Robin"
      foto1 = {Robin1}
      foto2 = {Robin2}
      foto3 = {Robin3}
      foto4 = {Robin4}
      midiaTipo = "Jogo"
      midia = "Honkai Star Rail"
      tipo = "Função/Caminho/Tipo"
      tipoResposta = "Suporte/Harmonia/Físico"
      frase = '"If I can stop one heart from breaking, I shall not live in vain."'
      link1 = "https://www.youtube.com/watch?v=QbPtrnmGlZ8&list=RDQbPtrnmGlZ8&start_radio=1"
      link2 = "https://www.youtube.com/watch?v=LlO4z29axuA"
      />
        
      
    </div>

  );

}

export default App;