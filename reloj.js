
(function(){

    var actualizarHora = function(){
        var fecha = new Date(),
            horas = fecha.getHours(),
            ampm,
            minutos = fecha.getMinutes(),
            segundos = fecha.getSeconds(),
            diaSemana = fecha.getDay(),
            dia = fecha.getDate(),
            mes = fecha.getMonth(),
            year = fecha.getFullYear();
   

        var pHoras = document.getElementById('horas'),
            pAMPM = document.getElementById('ampm'),
            pMinutos = document.getElementById('minutos'),
            pSegundos = document.getElementById('segundos'),
            pDiaSemana = document.getElementById('diaSemana'),
            pDia = document.getElementById('dia'),
            pMes = document.getElementById('mes'),
            pYear = document.getElementById('year'),
            pCompleto = document.getElementById('completo'),
            pProxima = document.getElementById('proxima');
            pProfit = document.getElementById('profit');
        
        var semana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
        pDiaSemana.textContent = semana[diaSemana];

        pDia.textContent = dia;
        
        var meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
        pMes.textContent = meses[mes];

        pYear.textContent = year;

        if (horas >= 12){
            horas = horas - 12;
            ampm = 'PM';
        }else{
            ampm = 'AM';
        };

        if (horas == 0) {
            horas = 12;
        };

        pHoras.textContent = horas;
        pAMPM.textContent = ampm;

        if (minutos < 10) {
            minutos = "0" + minutos
        }

        pMinutos.textContent = minutos

        if (segundos < 10) {
            segundos = "0" + segundos
        }

        pSegundos.textContent = segundos;

        var yearCorto = year - 2000;

        var reporte = "REPORTE";

        if(fecha.getHours() >= 0 & fecha.getHours() < 18 ) {
            reporte = "REPORTE PARCIAL /"
        }else if(fecha.getHours() >= 18 & fecha.getHours() < 21  ) {
            reporte = "REPORTE FINAL /"
        }else if(fecha.getHours() == 21 & fecha.getMinutes() < 15  ) {
            reporte = "REPORTE FINAL /"
        }else if(fecha.getHours() >= 21 & fecha.getHours() < 24  ) {
            reporte = "REPORTE PARCIAL /"
        }else{
            reporte = ""
        };


        
        var profit = "profit";
        var parentesis = /[()]+/;
        var dolars = /[$]+/;
        var sln = pProfit.value.length;
        


        if (pProfit.value == "") {
            profit =" " 
        }else if(parentesis.test(pProfit.value) == true && dolars.test(pProfit.value) == true){
            profit = " ( -" + pProfit.value.slice(1) + " / ";
        }else if(parentesis.test(pProfit.value) == false && dolars.test(pProfit.value) == true){
            profit = " ( " + pProfit.value + ") / ";
        }else if(parentesis.test(pProfit.value) == true && dolars.test(pProfit.value) == false){
            profit = " ( -$" + pProfit.value.slice(2) + " / ";
        }else if(parentesis.test(pProfit.value) == false && dolars.test(pProfit.value) == false){
            profit = " ( $" + pProfit.value.slice(1) + ") / ";
        }
        


        var proxima = "Actividad";

        if(ampm === 'AM' & fecha.getHours() >= 0 & fecha.getHours() <= 6 )  {
            proxima = "Reporte de las 6 a.m."
        }else if(ampm === 'AM' & horas >=6 & horas < 8 ) {
            proxima = "Cambio de ATM a M - 8 a.m."
        }else if(ampm === 'AM' & horas >=8 & horas < 12 ) {
            proxima = "Reporte de las 12 p.m"
        }else if(ampm === 'PM' & fecha.getHours() >=12 & fecha.getHours() < 15 ) {
            proxima = "Cambio de ATM a T y Apertura - 3:30 pm"
        }else if(ampm === 'PM' & horas ==3 & minutos < 30 ) {
            proxima = "Cambio de ATM a T y Apertura - 3:30 pm"
        }else if(ampm === 'PM' & horas >=3 & horas < 6 ) {
            proxima = "Reporte de las 6 p.m"
        }else if(ampm === 'PM' & horas >=6 & horas < 7 ) {
            proxima = "Cambio de ATM a N - 7 p.m."
        }else if(ampm === 'PM' & horas >=7 & horas < 10 ) {
            proxima = "Cierre - 10:10 p.m"
        }else if(ampm === 'PM' & horas === 10 & minutos >= 0 & minutos < 10 ) {
            proxima = "Cierre - 10:10 pm"
        }else if(ampm === 'PM' & horas === 10 & minutos >= 10 & minutos < 15 ) {
            proxima = "Reporte Final - 10:15 p.m."
        }else if(ampm === 'PM' & horas === 10 & minutos >= 20 & minutos < 30 ) {
            proxima = "Cambio de ATM a M 10:30 p.m."
        }else {
            proxima = "Apertura del Mercado - 12 a.m."
        };

       


        pCompleto.textContent = reporte + profit + semana[diaSemana] + " " + dia + "/" + fecha.getMonth() + "/" + yearCorto + " " +  horas + ":" + minutos + " " + ampm;

        pProxima.textContent = "Next: " + proxima;
       
    };

    actualizarHora();
    var intervalo = setInterval(actualizarHora, 1000);

    

}())    

function myFunction(paste,checkBox){
        
        var copyText = document.getElementById("reloj").innerText;
        var pasteText = document.getElementById(paste);

        

        if(document.getElementById(checkBox).checked == false) {
            
            document.getElementById(checkBox).checked = true

            pasteText.value = copyText

        }else if(document.getElementById(checkBox).checked == true) {
            
            document.getElementById(checkBox).checked = false

            pasteText.value = ""
            
        }

}


function myFunction2(paste){

        
        var copyText = document.getElementById('completo').innerText;

        var crearInput = document.createElement('input');

            completo.appendChild(crearInput);

            crearInput.value = copyText;

            crearInput.select();

            document.execCommand("copy");

            crearInput.remove();

            profit.value = ""
}

function myFunction3(min){

        var hrAct = [6,8,12,15.5,18,19,22,22,22,24];

        
        var fecha1 = new Date(),
            fecha1Mili = fecha1.getTime(),

            horas1 = fecha1.getHours(),
            minutos1 = fecha1.getMinutes(),
            segundos1 = fecha1.getSeconds(),
            dia1= fecha1.getDate(),
            mes1 = fecha1.getMonth(),
            year1 = fecha1.getFullYear();
        


        var ahora1 = new Date( year1, mes1, dia1, horas1, minutos1 + min,),
            ahora1Mili = ahora1.getTime();




        //hrProx y minProx

                if(horas1 >= 0 & horas1 < 6 )  {
                    hrProx = hrAct[0] - 1
                    minProx = 59
                }else if(horas1 >=6 & horas1 < 8 ) {
                    hrProx = hrAct[1] - 1
                    minProx = 50
                }else if(horas1 >=8 & horas1 < 12 ) {
                    hrProx = hrAct[2]-1
                    minProx = 59
                }else if(horas1 >=12 & horas1 < 15 ) {
                    hrProx = hrAct[3]
                    minProx = 20
                }else if(horas1 ===15 & minutos1 < 30 ) {
                    hrProx = hrAct[3]
                    minProx = 20
                }else if(horas1 >=15 & horas1 < 18 ) {
                    hrProx = hrAct[4] -1
                    minProx = 59
                }else if(horas1 >=18 & horas1 < 19 ) {
                    hrProx = hrAct[5] - 1
                    minProx = 50
                }else if(horas1 >=19 & horas1 < 22 ) {
                    hrProx = hrAct[6]
                    minProx = 10
                }else if(horas1 === 22 & minutos1 < 10 ) {
                    hrProx = hrAct[6]
                    minProx = 10
                }else if(horas1 === 22 & minutos1 < 13 ) {
                    hrProx = hrAct[7]
                    minProx = 13
                }else if(horas1 === 22 & minutos1 < 30 ) {
                    hrProx = hrAct[8]
                    minProx = 30
                }else {
                    hrProx = hrAct[9]
                    minProx = 0
                }

        var dia2 = dia1,
            mes2 = mes1,
            year2 = year1;

                if (hrProx === hrAct[0] && horas1 >=22) {
                    dia2 = dia1 + 1
                }else if(dia2 === 1 ) {
                    mes2 = mes1 + 1
                }else if(mes2 === 1 ) {
                    year2 = year1 + 1
                }




        var prox = new Date(year2 , mes2 , dia2 , hrProx, minProx );

        var miliProx = (prox.getTime() - ahora1Mili)/1000;

        var crearInput = document.createElement('input');

            proxima.appendChild(crearInput);

            crearInput.value = miliProx;

            crearInput.select();

            document.execCommand("copy");

            crearInput.remove();

        var tooltip = document.getElementById("myTooltip");
  
            tooltip.innerHTML = "Usar antes de: " + horas1 + ":" + (minutos1 + min)  ;

        var a = 19,
            b = 25,
            c = 0,
            d = 22,
            e = 10,
            f = 0;    

        var fechaX = new Date(2019,12,3,a,b,c),
            fechaY = new Date(2019,12,3,d,e,f),
            xm = fechaX.getTime(),
            ym = fechaY.getTime();

        console.log((ym-xm)/1000 + "/" + miliProx);       
 






            




        


        
    
}
 




