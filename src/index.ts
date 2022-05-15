let btnEnv = document.getElementById("boton");

function potencia(base: number, exponente: number){
  let salida: number;
  if (exponente < 0) {
    console.log(
      "Ingrese un exponente mayor o igual a cero."
    );
  } else if (exponente === 0) {
    salida = 1;
    console.log(
      "el exponente es 0, por lo tanto el resultado es 1"
    ); /* solo para pruebas */
    return salida;
  } else {
    salida = Math.pow(base, exponente);
    console.log(salida); /* solo para pruebas */
    return salida;
  }
}

btnEnv?.addEventListener("click", () => {
  let data1: number = Number(numero1.value);
  let data2: number = Number(numero2.value);
  potencia(data1, data2);
});
