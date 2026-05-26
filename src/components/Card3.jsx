import Cathy from "../pngs/cathy.jpeg";

function Card3() {

  return (

    <div className="card3">

      <img
        src= {Cathy}
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
    
      <h1>Cathy</h1>
      
      <button
  className="imgBotao"
  onClick={() => {
    
  }}
>
  &gt;
    </button>
</div>


      <p>
        <strong>Jogo:</strong> --- Until Then
      </p>

      <p>
        <strong>Papel:</strong> --- Uma dos protagonistas
      </p>

      <p>
        <strong>Frase em Destaque:</strong> "Say, have you ever wondered how butterflies fly under the rain? "
      </p>

      <a
        href="https://youtu.be/yHGLHQg_hM8?si=cak_CpIfBrmeqk9G&t=6381"
        target="_blank"
      >

        <button>
          Ver personagem
        </button>

      </a>

    </div>

  );

}

export default Card3;