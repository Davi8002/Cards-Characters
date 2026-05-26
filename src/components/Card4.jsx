import FuchiSunao from "../pngs/fuchiSunao.jpeg";


function Card4() {

  return (

    <div className="card4">

      <img
        src={FuchiSunao}
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
    
      <h1>Fuchi Sunao</h1>
      
      <button
  className="imgBotao"
  onClick={() => {
    
  }}
>
  &gt;
    </button>
</div>


      <p>
        <strong>Música:</strong> --- Insomnia (Eve)
      </p>

      <p>
        <strong>Papel:</strong> --- Protagonista
      </p>

      <p>
        <strong>Frase em Destaque:</strong> "At this rate i'll keep being empty in this unfulfilling city"
      </p>
<div className = "linkBotaoDiv">
      <button
  onClick={() => {
    window.open("https://www.youtube.com/watch?v=35nV_M3asRs&list=RD35nV_M3asRs&rco=1");
  }}
>
  Música 1
    </button>


  <button
  onClick={() => {
    window.open("https://www.youtube.com/watch?v=VOChndxKi6U&list=RDVOChndxKi6U&start_radio=1");
  }}
>
Música 2
    </button>
  

    </div>
</div>
  );

}

export default Card4;