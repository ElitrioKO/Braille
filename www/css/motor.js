
    document.addEventListener ("deviceready", onDeviceReady, false);

    //these functions runs when Cordova is ready
    function onDeviceReady () {
      console.log(navigator.vibrate);
     
    }
    

    function Bolinha(){
    navigator.vibrate(100)
    document.getElementById("Indicador").textContent = ":D"
    }
    function Circulo(){
      document.getElementById("Indicador").textContent = ":|"
    }
    function Alerta(){
        alert("")
    }