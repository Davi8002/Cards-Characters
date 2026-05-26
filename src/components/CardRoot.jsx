import React, { useState } from 'react';



function CardRoot(props) {
const [numeroFoto, setNumeroFoto] = useState(1);
const [fotoAtual, setFotoAtual] = useState(props.foto1);

  function trocarFoto(novoNumero){
    switch(novoNumero){
      case 1:
        setFotoAtual(props.foto1)
        break;
      case 2:
        setFotoAtual(props.foto2)
        break;
      case 3:
        setFotoAtual(props.foto3)
        break;
      case 4:
        setFotoAtual(props.foto4)
        break;
        

    }
  }


  return (

    <div className={props.classe}>
    
     <img
             src= {fotoAtual}
             className="imagem"
             alt="Personagem"
           />


      <div className = "imgBotaoDiv">
   <button
  className="imgBotao"
  onClick={() => {
    const novoNumero = numeroFoto  - 1; 
      setNumeroFoto(novoNumero);
      trocarFoto(novoNumero);
  }}
>
  &lt;
    </button>
    
      <h1>{props.nome}</h1>
      
      <button
  className="imgBotao"
  onClick={() => {
    const novoNumero = numeroFoto + 1; 
    setNumeroFoto(novoNumero);
    trocarFoto(novoNumero);
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
    window.open(props.link1);
  }}
>
  Trailer 1
    </button>


  <button
  onClick={() => {
    window.open(props.link2);
  }}
>
Trailer 2
    </button>
    
    </div>
  
 

</div>
  );

}

export default CardRoot;