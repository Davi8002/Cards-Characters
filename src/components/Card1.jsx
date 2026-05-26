import Oshawott from "../pngs/oshawott.jpeg";

function Card1() {

  return (

    <div className="card1">

      <img
        src= {Oshawott}
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
    
      <h1>Oshawott</h1>
      
      <button
  className="imgBotao"
  onClick={() => {
   
  }}
>
  &gt;
    </button>
</div>


      <p>
        <strong>Jogo:</strong> --- Pokémon
      </p>

      <p>
        <strong>Tipo:</strong> --- Água
      </p>

      <p>
        <strong>Frase em Destaque:</strong> "Osha Osha wa ta"
      </p>

      <a
        href="https://youtu.be/Y-qTC94UxmQ?si=PVMgRNsh0iZ1JgFW"
        target="_blank"
      >

        <button>
          Ver personagem
        </button>

      </a>

    </div>

  );

}

export default Card1;