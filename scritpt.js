function toggleMode() {
  const html = document.documentElement
  html.classList.toggle(
    "light"
  ) /*essa função faz todo o trabalho que se fez com as conicionais,ou seja, essa função faz tudo no automático*/

  // PEGA A TAG IMG
  const img = document.querySelector("#profile img ")

  if (html.classList.contains("light")) {
    //SUBSTITUIR A IMAGEM
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  // SE TIVER LIGHT MODE, ADICIONA A IMAGEM LIGHT
  // SE TIVER SEM LIGHT LIGHT MODE, MANTER A IMAGEM NORMAL
}
