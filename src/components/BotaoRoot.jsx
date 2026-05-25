//import BotaoRoot from './components/BotaoRoot.jsx';
function BotaoRoot(props) {

  return (
     <button
  onClick={() => {
    window.open(props.botao);
  }}
>
  {props.botaoTexto}
    </button> 
  );

}

export default BotaoRoot;