var saldo = 5000

  function saque(total, retirada) {
    saldo = total - retirada
    return("Seu Saldo Atual: " + saldo)
  }
  function deposito(total, entrada) {
    saldo = total + entrada
    return("Seu saldo Atual: " + saldo)
  }
  function consulta(total) {
    return ("Seu Saldo Atual: " + saldo)
  }

console.log(saque(saldo, 500))