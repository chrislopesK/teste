var setaesquerda = window.document.getElementById("setaesquerda")
var Bruna = window.document.getElementById("Bruna")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var setadireita  = window.document.getElementById("setadireita")

function RolarParaDireita(){
setaesquerda.style = "display:flex;margin-top:69px;margin-right:28px"
Bruna.style = "display:none"
Leonardo.style ="display:flex"
Samantha.style = "display:flex"
setadireita.style = "display:none"}


function RolarParaEsquerda(){
setaesquerda.style = "display:none"
Bruna.style = "display:flex"
Leonardo.style ="display:flex"
Samantha.style = "display:none"
setadireita.style = "display:flex"}
