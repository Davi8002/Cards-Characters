
function CardRoot(props) {

  return (

    <div className={props.classe}>
    
     <img
             src= {props.foto}
             className="imagem"
             alt="Personagem"
           />


      <div className = "imgBotaoDiv">
   <button
  className="imgBotao"
  onClick={() => {
   
  }}
>
  &lt;
    </button>
    
      <h1>{props.nome}</h1>
      
      <button
  className="imgBotao"
  onClick={() => {
   
  }}
>
  &gt;
    </button>
</div>



      <p>
        <strong>{props.midiaTipo}:</strong> --- {props.midia}
      </p>

      <p>
        <strong>{props.tipo}:</strong> --- {props.tipoResposta}
    </p>


      <p>
        <strong>Frase em Destaque:</strong> {props.frase}
      </p>


  <div className = "linkBotaoDiv">
     <button
  onClick={() => {
    window.open("https://www.youtube.com/watch?v=QbPtrnmGlZ8&list=RDQbPtrnmGlZ8&start_radio=1");
  }}
>
  Trailer 1
    </button>


  <button
  onClick={() => {
    window.open("https://www.youtube.com/watch?v=LlO4z29axuA");
  }}
>
Trailer 2
    </button>
    
    </div>
  
 

</div>
  );

}

export default CardRoot;