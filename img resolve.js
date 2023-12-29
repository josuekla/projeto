document.addEventListener("DOMContentLoaded", function () {
  const html = document.documentElement
  const img = document.querySelector("#profile img")
  const isLightMode = html.classList.contains("light")

  img.onload = function () {
    html.style.visibility = "visible"
  }

  img.setAttribute(
    "src",
    isLightMode ? "./assets/avatar-light.png" : "./assets/avatar.png"
  )

  img.setAttribute(
    "alt",
    isLightMode
      ? "Foto de Maryk Brito usando óculos de sol, com jaqueta preta e um fundo gradiente azul com roxo"
      : "Foto de Mark Brito sorrindo, usando óculos com barba, camisa preta e fundo amarelo"
  )

  html.classList.add("loaded")
})
