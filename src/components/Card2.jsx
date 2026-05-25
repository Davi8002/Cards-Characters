import Sunday from "../pngs/sunday.jpg";

function Card2() {

  return (

    <div className="card2">
    
     <img
             src={Sunday}
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
    
      <h1>Sunday</h1>
      
      <button
  className="imgBotao"
  onClick={() => {
  
  }}
>
  &gt;
    </button>
</div>



      <p>
        <strong>Jogo:</strong> --- Honkai Star Rail
      </p>

      <p>
        <strong>Função/Caminho/Tipo:</strong> --- Suporte/Harmonia/Imaginário
      </p>

      <p>
        <strong>Frase em Destaque:</strong> "I think people believe birds are meant to fly because they've never seen those birds crashing to their death "
      </p>

  <div className = "linkBotaoDiv">
     <button
  onClick={() => {
    window.open("https://www.youtube.com/watch?v=ZFWC0dwB3wY");
  }}
>
  Trailer 1
    </button>


  <button
  onClick={() => {
    window.open("https://www.youtube.com/watch?v=ud0jXAK5Uls");
  }}
>
Trailer 2
    </button>
    
    </div>
</div>
  );

}

export default Card2;