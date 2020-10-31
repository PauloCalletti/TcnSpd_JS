function chapeu(cr){
  if (cr === "leal" || cr === "corajoso") {
    console.log("Vai para Griffinória")
  } else if (cr === "ambicioso" || cr === "orgulhoso" || cr === "calculista") {
    console.log("Vai para Sonserina")
  } else if (cr=== "intelectual" || cr === "focado") {
    console.log("Vai para Corvinal")
  } else if (cr === "gentil" || cr === "paciente" || cr === "tolerante") {
    console.log("Vai para Lufa-Lufa")
  } else {
    console.log("Você Não Tem Jeito Pra Coisa, Filho... Volte Pros Estudos.")
  }
}
console.log(chapeu("focado"))

/* 
Acabei não conseguindo colocar uma checagem de mais de uma campo... 
minha ideia era fazer um cr1 cr2 cr3 e na condição dos if's colocar algo como 
cr1 || cr2 || cr3 === "leal" || "corajoso"
mas sempre o resultado não batia
*/ 