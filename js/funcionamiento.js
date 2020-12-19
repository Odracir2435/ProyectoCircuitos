var g1 = 0;
var g2 = 0;
var g3 = 0;
var s1a = 1;
var s1b = 1;
var s2a = 1;
var s2b = 1;
var s3a = 1;
var s3b = 1;
var s4a = 1;
var s4b = 1;
var s1polar = 1;
var s2polar = 1;
var s1rectresp = 1;
var s2rectresp = 1;
var rect11resp;
var rect12resp;
var s1rect = 1;
var s2rect = 1;
var s1polarresp = 1;
var s2polarresp = 1;
var polar11resp;
var polar12resp;
var digits = 2;
var resa;
var resb;
function signo1a() {
    var neg = document.getElementById("negativo1a");
    if (s1a == 1) {
        s1a = -1;
        neg.style.visibility = "visible"
    } else {
        s1a = 1;
        neg.style.visibility = "hidden"
    }
}
function signo1b() {
    var neg = document.getElementById("negativo2a");
    var pos = document.getElementById("positivo2a");
    if (s1b == 1) {
        s1b = -1;
        neg.style.display = "block";
        pos.style.display = "none"
    } else {
        s1b = 1;
        neg.style.display = "none";
        pos.style.display = "block"
    }
}
function signo2a() {
    var neg = document.getElementById("negativo1b");
    if (s2a == 1) {
        s2a = -1;
        neg.style.visibility = "visible"
    } else {
        s2a = 1;
        neg.style.visibility = "hidden"
    }
}
function signo2b() {
    var neg = document.getElementById("negativo2b");
    var pos = document.getElementById("positivo2b");
    if (s2b == 1) {
        s2b = -1;
        neg.style.display = "block";
        pos.style.display = "none"
    } else {
        s2b = 1;
        neg.style.display = "none";
        pos.style.display = "block"
    }
}
function signo3a() {
    var neg = document.getElementById("negativo3a");
    if (s3a == 1) {
        s3a = -1;
        neg.style.visibility = "visible"
    } else {
        s3a = 1;
        neg.style.visibility = "hidden"
    }
}
function signo3b() {
    var neg = document.getElementById("negativo4a");
    var pos = document.getElementById("positivo4a");
    if (s3b == 1) {
        s3b = -1;
        neg.style.display = "block";
        pos.style.display = "none"
    } else {
        s3b = 1;
        neg.style.display = "none";
        pos.style.display = "block"
    }
}
function signo4a() {
    var neg = document.getElementById("negativo5a");
    if (s4a == 1) {
        s4a = -1;
        neg.style.visibility = "visible"
    } else {
        s4a = 1;
        neg.style.visibility = "hidden"
    }
}
function signo4b() {
    var neg = document.getElementById("negativo6a");
    var pos = document.getElementById("positivo6a");
    if (s4b == 1) {
        s4b = -1;
        neg.style.display = "block";
        pos.style.display = "none"
    } else {
        s4b = 1;
        neg.style.display = "none";
        pos.style.display = "block"
    }
}
function signo1polar() {
    var neg = document.getElementById("polar1");
    if (s1polar == 1) {
        s1polar = -1;
        neg.style.visibility = "visible"
    } else {
        s1polar = 1;
        neg.style.visibility = "hidden"
    }
}
function signo2polar() {
    var neg = document.getElementById("polar2b");
    var pos = document.getElementById("polar2a");
    if (s2polar == 1) {
        s2polar = -1;
        neg.style.display = "block";
        pos.style.display = "none"
    } else {
        s2polar = 1;
        neg.style.display = "none";
        pos.style.display = "block"
    }
}
function signo21polar() {
    var neg = document.getElementById("polar1resp");
    if (s1rectresp == -1) {
        neg.style.visibility = "visible"
    } else {
        neg.style.visibility = "hidden"
    }
}
function signo22polar() {
    var neg = document.getElementById("polar2bresp");
    var pos = document.getElementById("polar2aresp");
    if (s2rectresp < 0) {
        neg.style.display = "block";
        pos.style.display = "none"
    } else {
        neg.style.display = "none";
        pos.style.display = "block"
    }
}
function signo1rect() {
    var neg = document.getElementById("rect1");
    if (s1rect == 1) {
        s1rect = -1;
        neg.style.visibility = "visible"
    } else {
        s1rect = 1;
        neg.style.visibility = "hidden"
    }
}
function signo2rect() {
    var neg = document.getElementById("rect2b");
    var pos = document.getElementById("rect2a");
    if (s2rect == 1) {
        s2rect = -1;
        neg.style.display = "block";
        pos.style.display = "none"
    } else {
        s2rect = 1;
        neg.style.display = "none";
        pos.style.display = "block"
    }
}
function signo21rect() {
    var neg = document.getElementById("rect1resp");
    if (s1rect == 1) {
        s1rect = -1;
        neg.style.visibility = "visible"
    } else {
        s1rect = 1;
        neg.style.visibility = "hidden"
    }
}
function signo22rect() {
    var neg = document.getElementById("rect2bresp");
    var pos = document.getElementById("rect2aresp");
    if (s2rect == 1) {
        s2rect = -1;
        neg.style.display = "block";
        pos.style.display = "none"
    } else {
        s2rect = 1;
        neg.style.display = "none";
        pos.style.display = "block"
    }
}
function signo(u) {
    if (u > 0) {
        return "+"
    } else {
        return "-"
    }
}
function signo_resta(u) {
    if (u > 0) {
        return u.toFixed(digits)
    } else {
        return '(' + u.toFixed(digits) + ')'
    }
}
function validar(e) {
    var keynum = window.event ? window.event.keyCode : e.which;
    if ((keynum == 8) || (keynum == 46))
        return !0;
    tecla = (document.all) ? e.keyCode : e.which;
    tecla = String.fromCharCode(tecla)
    return /^[0-9\.]+$/.test(tecla)
}
function aritmetica1() {
    var res = document.getElementById("resultado");
    var x1 = document.Formular6.a11.value;
    var y1 = document.Formular6.a12.value;
    var x2 = document.Formular6.a21.value;
    var y2 = document.Formular6.a22.value;
    if (x1 === "" || x2 === "" || y1 === "" || y2 === "") {
        res.innerHTML = "<h4 style=\"color: red;\">Error: Rellena todos los campos para poder realizar el cálculo.<\/h4>";
        return
    }
    var mySelect = document.getElementById('oper');
    var seleccionado = mySelect.options[mySelect.selectedIndex].text;
    if (seleccionado === '+') {
        suma()
        mostrar_ocultar('soluciones')
        mostrar_ocultar('Formular6')
    } else if (seleccionado === '-') {
        resta()
        mostrar_ocultar('soluciones')
        mostrar_ocultar('Formular6')
    } else if (seleccionado === 'x') {
        multiplica()

        mostrar_ocultar('soluciones')
        mostrar_ocultar('Formular6')
    } else if (seleccionado === '÷') {
        divide()

        mostrar_ocultar('soluciones')
        mostrar_ocultar('Formular6')
    }
    location.hash = "#resultado"
}
function suma() {
    var res = document.getElementById("resp");
    res.innerHTML = "";
    var x1 = s1a * parseFloat(document.Formular6.a11.value);
    var y1 = s1b * parseFloat(document.Formular6.a12.value);
    var x2 = s2a * parseFloat(document.Formular6.a21.value);
    var y2 = s2b * parseFloat(document.Formular6.a22.value);
    var a = x1 + x2;
    var b = y1 + y2;
    resa = a.toFixed(digits);
    resb = b.toFixed(digits);

    res.innerHTML += '<input onfocus="this.select()" class="enjoy2-css" type="text" size="6" name="rc" value="' + a.toFixed(digits) + ' ' + signo(b) + ' ' + Math.abs(b).toFixed(digits) + 'i" onkeypress="return validar(event)" style="text-align: center; width:150px;" ;="" placeholder="?"> ';

    MathJax.Hub.Queue(["Typeset", MathJax.Hub, "resp"])
}
function resta() {
    var res = document.getElementById("resp");
    res.innerHTML = "";
    var x1 = s1a * parseFloat(document.Formular6.a11.value);
    var y1 = s1b * parseFloat(document.Formular6.a12.value);
    var x2 = s2a * parseFloat(document.Formular6.a21.value);
    var y2 = s2b * parseFloat(document.Formular6.a22.value);
    var a = x1 - x2;
    var b = y1 - y2;
    resa = a.toFixed(digits);
    resb = b.toFixed(digits);
    res.innerHTML += '<input onfocus="this.select()" class="enjoy2-css" type="text" size="6" name="rc" value="' + a.toFixed(digits) + ' ' + signo(b) + ' ' + Math.abs(b).toFixed(digits) + 'i" onkeypress="return validar(event)" style="text-align: center; width:150px;" ;="" placeholder="?"> ';

    MathJax.Hub.Queue(["Typeset", MathJax.Hub, "resultado"])
}
function divide() {
    var res = document.getElementById("resp");
    var x1 = s1a * parseFloat(document.Formular6.a11.value);
    var y1 = s1b * parseFloat(document.Formular6.a12.value);
    var x2 = s2a * parseFloat(document.Formular6.a21.value);
    var y2 = s2b * parseFloat(document.Formular6.a22.value);
    res.innerHTML = "";
    var a = x1 * x2;
    var b = -1 * y1 * y2;
    var a1 = a - b;
    var d = -1 * x1 * y2;
    var c = x2 * y1;
    var b1 = d + c;
    var e = x2 * x2;
    var f = y2 * y2;
    var c1 = f + e;
    var Re = a1 / c1;
    var Im = b1 / c1;
    resa = Re.toFixed(digits);
    resb = Im.toFixed(digits);
    res.innerHTML += '<input onfocus="this.select()" class="enjoy2-css" type="text" size="6" name="rc" value="' + Re.toFixed(digits) + ' ' + signo(Im) + ' ' + Math.abs(Im).toFixed(digits) + 'i" onkeypress="return validar(event)" style="text-align: center; width:150px;" ;="" placeholder="?"> ';
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, "resultado"])
}
function multiplica() {
    var res = document.getElementById("resp");
    var x1 = s1a * parseFloat(document.Formular6.a11.value);
    var y1 = s1b * parseFloat(document.Formular6.a12.value);
    var x2 = s2a * parseFloat(document.Formular6.a21.value);
    var y2 = s2b * parseFloat(document.Formular6.a22.value);
    res.innerHTML = "";
    var a = x1 * x2;
    var b = y1 * y2;
    var c = x1 * y2;
    var d = x2 * y1;
    var Re = (a - b);
    var Im = (c + d);
    resa = Re.toFixed(digits);
    resb = Im.toFixed(digits);
    res.innerHTML += '<input onfocus="this.select()" class="enjoy2-css" type="text" size="6" name="rc" value="' + Re.toFixed(digits) + ' ' + signo(Im) + ' ' + Math.abs(Im).toFixed(digits) + 'i" onkeypress="return validar(event)" style="text-align: center; width:150px;" ;="" placeholder="?"> ';
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, "resultado"])
}
function setDigits() {
    digits = parseFloat(document.getElementById("digs").value);
    Refresh();
}
function borrartodo() {
    var res = document.getElementById("resultado");
    document.Formular6.a11.value = "";
    document.Formular6.a12.value = "";
    document.Formular6.a21.value = "";
    document.Formular6.a22.value = "";
    document.Formular6.rc.value = "";
    res.innerHTML = "";
}
function borrarpolar() {
    var msg1 = document.getElementById("polarmsg2");
    document.Polarform.polar11.value = "";
    document.Polarform.polar12.value = "";
    document.Polarform.polar21.value = "";
    document.Polarform.polar22.value = "";
    msg1.innerHTML = "";
}
function borrarrect() {
    var msg2 = document.getElementById("rectmsg2");
    document.Rectform.rect11.value = "";
    document.Rectform.rect12.value = "";
    document.Rectform.rec21.value = "";
    document.Rectform.rect22.value = "";
    msg2.innerHTML = "";
}
function mostrar_ocultar(bloq) {
    obj = document.getElementById(bloq);
    obj.style.display = (obj.style.display == 'none') ? 'block' : 'none'
}
function polarrecta() {
    var res = document.getElementById("polarmsg2");
    var modulo = document.Polarform.polar11.value;
    var angulo = document.Polarform.polar12.value;
    if (modulo === "" || angulo === "") {
        res.innerHTML = "<h4 style=\"color: red;\">Error: Rellena todos los campos para poder realizar el cálculo.<\/h4>";
        return
    } else {
        mostrar_ocultar('polarmsg');
        mostrar_ocultar('Polarform');
        modulo = s1polar * parseFloat(document.Polarform.polar11.value);
        angulo = s2polar * parseFloat(document.Polarform.polar12.value);
        var anguloRadian = angulo * Math.PI / 180;
        var a = modulo * Math.cos(anguloRadian);
        var b = modulo * Math.sin(anguloRadian);
        rect11resp = a.toFixed(digits);
        rect12resp = b.toFixed(digits);
        if (a < 0) {
            s1rectresp = -1;
            var sig1 = document.getElementById("polar1resp");
            sig1.innerHTML = "-";
        } else {
            var sig2 = document.getElementById("polar2resp");
            sig2.innerHTML = "";
        }
        if (b < 0) {
            s2rectresp = -1;
            var sig2 = document.getElementById("polar2resp");
            sig2.innerHTML = "-";
        } else {
            var sig2 = document.getElementById("polar2resp");
            sig2.innerHTML = "+";
        }
        document.Polarform.polar21.value = Math.abs(rect11resp);
        document.Polarform.polar22.value = Math.abs(rect12resp);
    }
}
function rectpolar() {
    var res = document.getElementById("rectmsg2");
    var real = document.Rectform.rect11.value;
    var nj = document.Rectform.rect12.value;
    if (real === "" || nj === "") {
        res.innerHTML = "<h4 style=\"color: red;\">Error: Rellena todos los campos para poder realizar el cálculo.<\/h4>";
        return
    } else {
        mostrar_ocultar('rectmsg');
        mostrar_ocultar('Rectform');
        var a = s1rect * parseFloat(document.Rectform.rect11.value);
        var b = s2rect * parseFloat(document.Rectform.rect12.value);
        var modulo = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
        var angulo = Math.atan2(b, a) * 180 / Math.PI;
        polar11resp = modulo.toFixed(digits);
        polar12resp = angulo.toFixed(digits);
        if (modulo < 0) {
            s1polarresp = -1;
            var sig1 = document.getElementById("rect1resp");
            sig1.innerHTML = "-";
        } else {
            var sig2 = document.getElementById("rect1resp");
            sig2.innerHTML = "";
        }
        if (angulo < 0) {
            s2polarresp = -1;
            var sig2 = document.getElementById("rect2resp");
            sig2.innerHTML = "-";
        } else {
            var sig2 = document.getElementById("rect2resp");
            sig2.innerHTML = "+";
        }
        document.Rectform.rec21.value = Math.abs(polar11resp);
        document.Rectform.rect22.value = Math.abs(polar12resp);
    }
}
//boton de graficar resultado de la calculadora
function grafuno() {
    var res = document.getElementById("resultado");
    var resu = document.Formular6.rc.value;
    var x1 = document.Formular6.a11.value;
    var y1 = document.Formular6.a12.value;
    var x2 = document.Formular6.a21.value;
    var y2 = document.Formular6.a22.value;
    if (resu === "" || x1 === "" || x2 === "" || y1 === "" || y2 === "") {
        res.innerHTML = "<h4 style=\"color: red;\">Error: Se Necesita Una Operacion Para Poder Graficar.<\/h4>";
        return
    } else {
        mostrar_ocultar('soluciones')
        mostrar_ocultar('Formular6')
        window.location.href = "#graficador"
        var graf = document.getElementById("showgraf")
        graf.innerHTML = "";
        graf.innerHTML += '<div class="notepad" style="color: white; background-color: white;"><div style="clear:both; padding: 1%; width:100%; "><div class="row align-items-center no-gutters mb-4 mb-lg-5 "><div class="col-xl-8 col-lg-7 "><div id="graf1"></div></div><div class="col-xl-4 col-lg-5 text-black"><div class="featured-text text-center text-lg-left "><br><div class="notepad text-left" style="color: white; background-color: white;"><div class="cerrar btn " onclick="closegraf1()">Cerrar Modo</div></div></div></div></div></div></div>';
        var plot = document.getElementById("graf1");
        plot.innerHTML = "";
        if (resb < 0) {
            var trace1 = {
                x: [resa],
                y: [resb],
                mode: 'markers+text',
                name: '' + resa + resb + 'i',
                text: '' + resa + resb + 'i',
                textposition: 'top',
                type: 'scatter'
            };
        } else {
            var trace1 = {
                x: [resa],
                y: [resb],
                mode: 'markers+text',

                name: '' + resa + ' + ' + resb + 'i',
                text: '' + resa + ' + ' + resb + 'i',

                textposition: 'top',
                type: 'scatter'
            };
        }
        if (resb < 0) {
            var trace2 = {
                x: [0, resa],
                y: [0, resb],
                mode: 'markers+lines',
                name: '' + x1 + y1 + 'i',
                text: '' + x1 + y1 + 'i',
                textposition: 'top',
                type: 'scatter'
            };
        } else {
            var trace2 = {
                x: [0, resa],
                y: [0, resb],
                mode: 'markers+lines',

                name: '' + x1 + ' + ' + y1 + 'i',
                text: '' + x1 + ' + ' + y1 + 'i',

                textposition: 'top',
                type: 'scatter'
            };
        }
        var data = [trace1, trace2];
        var layout = {
            xaxis: {
                automargin: true,
                tickangle: 90,
                title: {
                    text: "REALES",
                    standoff: 1
                }
            },
            yaxis: {
                automargin: true,
                tickangle: 90,
                title: {
                    text: "IMAGINARIOS",
                    standoff: 1
                }
            },
            showlegend: false
        };
        Plotly.newPlot('graf1', data, layout, {
            scrollZoom: true
        });
        return
    }
    location.hash = "#resultado"
}
//despliega la graficadora de numeros complejos
function graf1() {
    var graf = document.getElementById("showgraf")
    graf.innerHTML = "";
    graf.innerHTML += '<div class="notepad" style="color: white; background-color: white;"><div style="clear:both; padding: 1%; width:100%; "><div class="row align-items-center no-gutters mb-4 mb-lg-5 "><div class="col-xl-8 col-lg-7 "><div id="graf1"></div></div><div class="col-xl-4 col-lg-5 text-black"><div class="featured-text text-center text-lg-left "><h4>Inserta el numero</h4><br><table style="font-size:x-large;"><tbody><tr><td><span id="negativo3a" style="visibility:hidden; padding: 0 2px 0 2px;">-</span><input onfocus="this.select()" class="enjoy-css" type="text" size="6" name="c11" value="" onkeypress="return validar(event)" placeholder="?" style="text-align: center;"></td><td><span id="negativo4a" style="display:none; margin:0 5px 0 5px; text-align: center;">-</span><span id="positivo4a" style=" margin:0 5px 0 5px; text-align: center;">+</span></td><td><!-- input imaginario 1--><input onfocus="this.select()" class="enjoy-css" type="text" size="6" name="c12" value="" onkeypress="return validar(event)" placeholder="?" style="text-align: center;"><i>&nbsp;i</i></td></tr><tr><td style="text-align: center;"><span class="change_sign" onclick="signo3a();">+/−</span></td><td></td><td style="text-align: center;"><span class="change_sign" style="text-align: center;" onclick="signo3b();">+/−</span></td><td></td></tr></tbody></table><br><div class="notepad text-left" style="color: white; background-color: white;"><a class="btn btn-primary js-scroll-trigger" onclick="graf1datos()">!!!Graficar!!!</a></div><br><div class="notepad text-left" style="color: white; background-color: white;"><div class="cerrar btn " onclick="closegraf()">Cerrar Modo</div></div></div></div></div></div></div>';
    var trace1 = {
        x: [0],
        y: [0],
        mode: 'markers+text',
        name: '',
        text: '',
        textposition: 'top',
        type: 'scatter'
    };
    var data = [trace1];
    var layout = {
        xaxis: {
            automargin: true,
            tickangle: 90,
            title: {
                text: "REALES",
                standoff: 1
            }
        },
        yaxis: {
            automargin: true,
            tickangle: 90,
            title: {
                text: "IMAGINARIOS",
                standoff: 1
            }
        },
        showlegend: true
    };
    Plotly.newPlot('graf1', data, layout, {
        scrollZoom: true
    });
}
//grafica cualquier dato 
function graf1datos() {
    var x1 = document.graf0.c11.value;
    var y1 = document.graf0.c12.value;
    var x1 = s3a * parseFloat(document.graf0.c11.value);
    var y1 = s3b * parseFloat(document.graf0.c12.value);
    var plot = document.getElementById("graf1");
    plot.innerHTML = "";
    //falta alerta graficacion vaci
    if (s3b < 0) {
        var trace1 = {
            x: [x1],
            y: [y1],
            mode: 'markers+text',
            name: '' + x1 + y1 + 'i',
            text: '' + x1 + y1 + 'i',
            textposition: 'top',
            type: 'scatter'
        };
    } else {
        var trace1 = {
            x: [x1],
            y: [y1],
            mode: 'markers+text',

            name: '' + x1 + ' + ' + y1 + 'i',
            text: '' + x1 + ' + ' + y1 + 'i',

            textposition: 'top',
            type: 'scatter'
        };
    }
    if (s3b < 0) {
        var trace2 = {
            x: [0, x1],
            y: [0, y1],
            mode: 'markers+lines',
            name: '' + x1 + y1 + 'i',
            text: '' + x1 + y1 + 'i',
            textposition: 'top',
            type: 'scatter'
        };
    } else {
        var trace2 = {
            x: [0, x1],
            y: [0, y1],
            mode: 'markers+lines',

            name: '' + x1 + ' + ' + y1 + 'i',
            text: '' + x1 + ' + ' + y1 + 'i',

            textposition: 'top',
            type: 'scatter'
        };
    }
    var data = [trace1, trace2];
    var layout = {
        xaxis: {
            automargin: true,
            tickangle: 90,
            title: {
                text: "REALES",
                standoff: 1
            }
        },
        yaxis: {
            automargin: true,
            tickangle: 90,
            title: {
                text: "IMAGINARIOS",
                standoff: 1
            }
        },
        showlegend: false
    };
    Plotly.newPlot('graf1', data, layout, {
        scrollZoom: true
    });

}
//botos de graficar polares
function grafdos() {
    var res = document.getElementById("rectmsg2");
    var x1 = document.Rectform.rect11.value;
    var y1 = document.Rectform.rect12.value;
    var modulo = document.Rectform.rec21.value;
    var angulo = document.Rectform.rect22.value;
    if (modulo === "" || angulo === "" || x1 === "" || y1 === "") {
        res.innerHTML = "<h4 style=\"color: red;\">Error: Se Necesita Una Conversion Para Poder Graficar.<\/h4>";
        return
    } else {
        mostrar_ocultar('rectmsg')
        mostrar_ocultar('Rectform')
        window.location.href = "#graficador"
        var graf = document.getElementById("showgraf")
        graf.innerHTML = "";
        graf.innerHTML += '<div class="notepad" style="color: white; background-color: white;"><div style="clear:both; padding: 1%; width:100%; "><div class="row align-items-center no-gutters mb-4 mb-lg-5 "><div class="col-xl-8 col-lg-7 "><div id="graf2"></div></div><div class="col-xl-4 col-lg-5 text-black"><div class="featured-text text-center text-lg-left "><br><div class="notepad text-left" style="color: white; background-color: white;"><div class="cerrar btn " onclick="closegraf2()">Cerrar Modo</div></div></div></div></div></div></div>';
        var modulo = s1polarresp * parseFloat(document.Rectform.rec21.value);
        var angulo = s2polarresp * parseFloat(document.Rectform.rect22.value);
        if (polar11resp == -1) {
            r = modulo;
            angulo += 180;
        }
        var plot = document.getElementById("graf2");
        plot.innerHTML = "";
        var trace1 = {
            r: [0, modulo],
            theta: [0, angulo],
            mode: 'lines',
            name: ' ',
            line: {
                color: "blue"
            },
            marker: {
                color: "yellow",
                symbol: "square",
                size: 12
            },
            type: 'scatterpolar'
        };
        var trace2 = {
            r: [modulo],
            theta: [angulo],
            mode: 'markers+text',
            name: 'Punto',
            line: {
                color: "blue"
            },
            marker: {
                color: "yellow",
                symbol: "square",
                size: 12
            },
            type: 'scatterpolar'
        };
        var data = [trace1, trace2];

        var layout = {
            title: 'Grafica Polar',
            font: {
                family: 'Arial, sans-serif;',
                size: 12,
                color: '#000'
            },
            showlegend: false,
            orientation: -90
        };
        Plotly.newPlot('graf2', data, layout);
        return
    }
}
//despliega grafica de polares
function graf2() {
    //despliega la grafica
    var graf = document.getElementById("showgraf")
    graf.innerHTML = "";
    graf.innerHTML += '<div class="notepad" style="color: white; background-color: white;"><div style="clear:both; padding: 1%; width:100%; "><div class="row align-items-center no-gutters mb-4 mb-lg-5 "><div class="col-xl-8 col-lg-7 "><div id="graf2"></div></div><div class="col-xl-4 col-lg-5 text-black"><div class="featured-text text-center text-lg-left "><h4>Ingresa el <br> numero Polar</h4><br><table style="font-size:x-large;"><tbody><tr><td><span id="negativo5a" style="visibility:hidden; padding: 0 2px 0 2px;">-</span><input onfocus="this.select()" class="enjoy-css" type="text" size="6" name="d11" value="" onkeypress="return validar(event)" placeholder="?" style="text-align: center;"></td><td><span id="negativo6a" style="display:none; margin:0 5px 0 5px; text-align: center;">-</span><span id="positivo6a" style=" margin:0 5px 0 5px; text-align: center;">+</span></td><td><input onfocus="this.select()" class="enjoy3-css" type="text" size="6" name="d12" value="" onkeypress="return validar(event)" style="text-align: center;"><i>°</i></td></tr><tr><td style="text-align: center;"><span class="change_sign" onclick="signo4a();">+/−</span></td><td></td><td style="text-align: center;"><span class="change_sign" style="text-align: center;" onclick="signo4b();">+/−</span></td><td></td></tr></tbody></table><br><div class="notepad text-left" style="color: white; background-color: white;"><a class="btn btn-primary js-scroll-trigger" onclick="graf2datos()">!!!Graficar!!!</a></div><br><div class="notepad text-left" style="color: white; background-color: white;"><div class="cerrar btn " onclick="closegraf()">Cerrar Modo</div></div></div></div></div></div></div>';
    var trace1 = {
        r: [0, 0],
        theta: [0, 0],
        mode: 'lines',
        line: {
            color: "#blue"
        },
        marker: {
            color: "yellow",
            symbol: "square",
            size: 12
        },
        type: 'scatterpolar'
    };
    var trace2 = {
        r: [0],
        theta: [0],
        mode: 'markers+text',
        name: 'Punto',
        line: {
            color: "blue"
        },
        marker: {
            color: "yellow",
            symbol: "square",
            size: 12
        },
        type: 'scatterpolar'
    };
    var data = [trace1, trace2];
    var layout = {
        title: 'Grafica Polar',
        font: {
            family: 'Arial, sans-serif;',
            size: 12,
            color: '#000'
        },
        showlegend: false,
        orientation: -90
    };
    Plotly.newPlot('graf2', data, layout);
}
//grafica polares
function graf2datos() {
    r = s4a * parseFloat(document.graf0.d11.value);
    angulo = s4b * parseFloat(document.graf0.d12.value);
    //r es el angulo
    var plot = document.getElementById("graf2");
    plot.innerHTML = "";
    if (s4a == -1) {
        r = document.graf0.d11.value;
        angulo += 180;
    }
    var trace1 = {
        r: [0, r],
        theta: [0, angulo],
        mode: 'lines',
        line: {
            color: "blue"
        },
        marker: {
            color: "#yellow",
            symbol: "square",
            size: 12
        },
        type: 'scatterpolar'
    };
    var trace2 = {
        r: [r],
        theta: [angulo],
        mode: 'markers+text',
        name: 'Punto',
        line: {
            color: "#blue"
        },
        marker: {
            color: "yellow",
            symbol: "square",
            size: 12
        },
        type: 'scatterpolar'
    };
    var data = [trace1, trace2];
    var layout = {
        title: 'Grafica Polar',
        font: {
            family: 'Arial, sans-serif;',
            size: 12,
            color: '#000'
        },
        showlegend: false,
        orientation: -90
    };
    Plotly.newPlot('graf2', data, layout);
}
//boton graficar rectangular
function graftres() {
    var res = document.getElementById("polarmsg2");
    var x1 = document.Polarform.polar11.value;
    var y1 = document.Polarform.polar12.value;
    var xresp = document.Polarform.polar21.value;
    var yresp = document.Polarform.polar22.value;
    if (xresp === "" || yresp === "" || x1 === "" || y1 === "") {
        res.innerHTML = "<h4 style=\"color: red;\">Error: Se Necesita Una Conversion Para Poder Graficar.<\/h4>";
        return
    } else {
        mostrar_ocultar('polarmsg')
        mostrar_ocultar('Polarform')
        window.location.href = "#graficador"
        var graf = document.getElementById("showgraf")
        graf.innerHTML = "";
        graf.innerHTML += '<div class="notepad" style="color: white; background-color: white;"><div style="clear:both; padding: 1%; width:100%; "><div class="row align-items-center no-gutters mb-4 mb-lg-5 "><div class="col-xl-8 col-lg-7 "><div id="graf3"></div></div><div class="col-xl-4 col-lg-5 text-black"><div class="featured-text text-center text-lg-left "><br><div class="notepad text-left" style="color: white; background-color: white;"><div class="cerrar btn " onclick="closegraf3()">Cerrar Modo</div></div></div></div></div></div></div>';
        var plot = document.getElementById("graf3");
        plot.innerHTML = "";
        if (rect12resp < 0) {
            var trace1 = {
                x: [xresp],
                y: [yresp],
                mode: 'markers+text',
                name: '' + rect11resp + '- J' + Math.abs(yresp),
                text: '' + rect11resp + '- J' + Math.abs(yresp),
                textposition: 'top',
                type: 'scatter'
            };
        } else {
            var trace1 = {
                x: [resa],
                y: [resb],
                mode: 'markers+text',
                name: '' + rect11resp + ' + J' + Math.abs(yresp),
                text: '' + rect11resp + ' + J' + Math.abs(yresp),
                textposition: 'top',
                type: 'scatter'
            };
        }
        if (rect12resp < 0) {
            var trace2 = {
                x: [0, rect11resp],
                y: [rect12resp, rect12resp],
                mode: 'lines',
                name: ' ',
                text: ' ',
                textposition: 'top',
                type: 'scatter'
            };
        } else {
            var trace2 = {
                x: [0, rect11resp],
                y: [rect12resp, rect12resp],
                mode: 'lines',
                name: ' ',
                text: ' ',
                textposition: 'top',
                type: 'scatter'
            };
        }
        if (rect12resp < 0) {
            var trace3 = {
                x: [rect11resp, rect11resp],
                y: [0, rect12resp],
                mode: 'lines',
                name: ' ',
                text: ' ',
                textposition: 'top',
                type: 'scatter'
            };
        } else {
            var trace3 = {
                x: [rect11resp, rect11resp],
                y: [0, rect12resp],
                mode: 'lines',
                name: ' ',
                text: ' ',
                textposition: 'top',
                type: 'scatter'
            };
        }
        if (rect12resp < 0) {
            var trace4 = {
                x: [0, rect11resp],
                y: [0, rect12resp],
                mode: 'lines',
                name: ' ',
                text: ' ',
                textposition: 'top',
                line: {
                    color: "blue"
                },
                type: 'scatter'
            };
        } else {
            var trace4 = {
                x: [0, rect11resp],
                y: [0, rect12resp],
                mode: 'lines',
                name: ' ',
                text: ' ',
                line: {
                    color: "blue"
                },
                textposition: 'top',
                type: 'scatter'
            };
        }
        var data = [trace1, trace2, trace3, trace4];
        var layout = {
            xaxis: {
                automargin: true,
                tickangle: 90,
                title: {
                    text: "X",
                    standoff: 1
                }
            },
            yaxis: {
                automargin: true,
                tickangle: 90,
                title: {
                    text: "J",
                    standoff: 1
                }
            },
            showlegend: false
        };
        Plotly.newPlot('graf3', data, layout, {
            scrollZoom: true
        });
        return
    }
    location.hash = "#resultado"
}
//despliega grafica rectangular
function graf3() {
    var graf = document.getElementById("showgraf")
    graf.innerHTML = "";
    graf.innerHTML += '<div class="notepad" style="color: white; background-color: white;"><div style="clear:both; padding: 1%; width:100%; "><div class="row align-items-center no-gutters mb-4 mb-lg-5 "><div class="col-xl-8 col-lg-7 "><div id="graf3"></div></div><div class="col-xl-4 col-lg-5 text-black"><div class="featured-text text-center text-lg-left "><h4>Inserta el numero</h4><br><table style="font-size:x-large;"><tbody><tr><td><span id="negativo3a" style="visibility:hidden; padding: 0 2px 0 2px;">-</span><input onfocus="this.select()" class="enjoy-css" type="text" size="6" name="e11" value="" onkeypress="return validar(event)" placeholder="?" style="text-align: center;"></td><td><span id="negativo4a" style="display:none; margin:0 5px 0 5px; text-align: center;">-</span><span id="positivo4a" style=" margin:0 5px 0 5px; text-align: center;">+</span></td><td><i>&nbsp;J&nbsp;</i><!-- input imaginario 1--><input onfocus="this.select()" class="enjoy-css" type="text" size="6" name="e12" value="" onkeypress="return validar(event)" placeholder="?" style="text-align: center;"></td></tr><tr><td style="text-align: center;"><span class="change_sign" onclick="signo3a();">+/−</span></td><td></td><td style="text-align: center;"><span class="change_sign" style="text-align: center;" onclick="signo3b();">+/−</span></td><td></td></tr></tbody></table><br><div class="notepad text-left" style="color: white; background-color: white;"><a class="btn btn-primary js-scroll-trigger" onclick="graf3datos()">!!!Graficar!!!</a></div><br><div class="notepad text-left" style="color: white; background-color: white;"><div class="cerrar btn " onclick="closegraf()">Cerrar Modo</div></div></div></div></div></div></div>';
    var trace1 = {
        x: [0],
        y: [0],
        mode: 'markers+text',
        name: '',
        text: '',
        textposition: 'top',
        type: 'scatter'
    };
    var data = [trace1];
    var layout = {
        xaxis: {
            automargin: true,
            tickangle: 90,
            title: {
                text: "X",
                standoff: 1
            }
        },
        yaxis: {
            automargin: true,
            tickangle: 90,
            title: {
                text: "J",
                standoff: 1
            }
        },
        showlegend: true
    };
    Plotly.newPlot('graf3', data, layout, {
        scrollZoom: true
    });
}
//grafica cualquier rectangular
function graf3datos() {
    var x1 = document.graf0.e11.value;
    var y1 = document.graf0.e12.value;
    console.log(x1);
    console.log(y1);
    var x1 = s3a * parseFloat(document.graf0.e11.value);
    var y1 = s3b * parseFloat(document.graf0.e12.value);
    var plot = document.getElementById("graf3");
    plot.innerHTML = "";
    if (y1 < 0) {
        var trace1 = {
            x: [x1],
            y: [y1],
            mode: 'markers+text',
            name: '' + x1 + '- J' + Math.abs(y1),
            text: '' + x1 + '- J' + Math.abs(y1),
            textposition: 'top',
            type: 'scatter'
        };
    } else {
        var trace1 = {
            x: [x1],
            y: [y1],
            mode: 'markers+text',
            name: '' + x1 + ' + J' + Math.abs(y1),
            text: '' + x1 + ' + J' + Math.abs(y1),
            textposition: 'top',
            type: 'scatter'
        };
    }
    if (y1 < 0) {
        var trace2 = {
            x: [0, x1],
            y: [y1, y1],
            mode: 'lines',
            name: ' ',
            text: ' ',
            textposition: 'top',
            type: 'scatter'
        };
    } else {
        var trace2 = {
            x: [0, x1],
            y: [y1, y1],
            mode: 'lines',
            name: ' ',
            text: ' ',
            textposition: 'top',
            type: 'scatter'
        };
    }
    if (rect12resp < 0) {
        var trace3 = {
            x: [x1, x1],
            y: [0, y1],
            mode: 'lines',
            name: ' ',
            text: ' ',
            textposition: 'top',
            type: 'scatter'
        };
    } else {
        var trace3 = {
            x: [x1, x1],
            y: [0, y1],
            mode: 'lines',
            name: ' ',
            text: ' ',
            textposition: 'top',
            type: 'scatter'
        };
    }
    if (rect12resp < 0) {
        var trace4 = {
            x: [0, x1],
            y: [0, y1],
            mode: 'lines',
            name: ' ',
            text: ' ',
            textposition: 'top',
            line: {
                color: "#blue"
            },
            type: 'scatter'
        };
    } else {
        var trace4 = {
            x: [0, x1],
            y: [0, y1],
            mode: 'lines',
            name: ' ',
            text: ' ',
            line: {
                color: "#blue"
            },
            textposition: 'top',
            type: 'scatter'
        };
    }
    var data = [trace1, trace2, trace3, trace4];
    var layout = {
        xaxis: {
            automargin: true,
            tickangle: 90,
            title: {
                text: "X",
                standoff: 1
            }
        },
        yaxis: {
            automargin: true,
            tickangle: 90,
            title: {
                text: "J",
                standoff: 1
            }
        },
        showlegend: false
    };
    Plotly.newPlot('graf3', data, layout, {
        scrollZoom: true
    });
}
function closegraf() {
    var graf = document.getElementById("showgraf")
    graf.innerHTML = "";
}
function closegraf1() {
    var graf = document.getElementById("showgraf")
    graf.innerHTML = "";
    window.location.href = "#caluladora";
}
function closegraf2() {
    var graf = document.getElementById("showgraf")
    graf.innerHTML = "";
    window.location.href = "#conversor";
}
function closegraf3() {
    var graf = document.getElementById("showgraf")
    graf.innerHTML = "";
    window.location.href = "#conversor";
}