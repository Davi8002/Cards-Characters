import Sunday from "../pngs/sunday.jpg";
let imgSunday = 1;

function trocarImgSunday(){
switch (imgSunday){
  case 1:
   return(
      <img
        src={Sunday}
        className="imagem"
        alt="Personagem"
      />
  )

   case 2:
   return(
      <img
      
        className="imagem"
        alt="Personagem"
      />
  )
}
 
}
function Card2() {

  return (

    <div className="card2">
    
      {trocarImgSunday()}


      <div className = "imgBotaoDiv">
   <button
  className="imgBotao"
  onClick={() => {
    imgSunday--;
  }}
>
  &lt;
    </button>
    
      <h1>Sunday</h1>
      
      <button
  className="imgBotao"
  onClick={() => {
    imgSunday++;
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