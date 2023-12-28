function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light") /*essa função faz todo o trabalho que se fez com as conicionais,ou seja, essa função faz tudo no automático*/ 

  // PEGA A TAG IMG
  const img = document.querySelector("#profile img ")
  
  if(html.classList.contains("light")) {
  //SUBSTITUIR A IMAGEM
  img.setAttribute("src","./assets/avatar-light.png")
  img.setAttribute("alt", "Foto de Maryk Brito usando óculos de sol, com jaqueta preta e um fundo gradiente azul com roxo ")

  } 
  else{
    img.setAttribute("src", "./assets/avatar.png")
  img.setAttribute(
    "alt",
    "foto de Mark Brito sorrindo, usando óculos com barba, camisa preta e fundo amarelo"
  )

  }


 // SE TIVER LIGHT MODE, ADICIONA A IMAGEM LIGHT
 // SE TIVER SEM LIGHT LIGHT MODE, MANTER A IMAGEM NORMAL



}






