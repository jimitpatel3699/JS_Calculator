let showbox = document.getElementById("txtbstore");
let answerebox = document.getElementById("answere");
let number1, number2;
let signcounter = 0;
let textcounter = 0;
let equalcounter = 0;
let plusmincount = 0;
let rcount = 0;
let lcount = 0;
let memory_array = [];
// let value1=document.write("x<sup>y</sup>");
console.log("answerbox val=" + answerebox.value);

function clearscr(id) {
    if (id == "clear") {
        answerebox.value = "";
        showbox.value = "";

    }
    if (id == "delete") {
        let data = answerebox.value;
        let datalenght = data.length;
        if (data[datalenght - 1] === "(") {
            rcount--;
        }

        if (data[datalenght - 1] === ")") {
            lcount--;
        }
        //console.log(datalenght);
        //console.log(typeof(datalenght));
        //console.log(data[datalenght-1]);
        answerebox.value = answerebox.value.slice(0, -1);
        //console.log(answerebox.value.length);

    }
    if (id == "clrans") {
        answerebox.value = "";
        rcount = 0;
        lcount = 0;
    }

}

function display(id) {


    let values = document.getElementById(id).innerText;
    if (textcounter == 1) {
        answerebox.value = "";

    }

    if (equalcounter == 1) {

        showbox.value = "";
        equalcounter = 0;
    }
    signcounter = 1;
    textcounter = 0;
    plusmincount = 1;
    switch (values) {
        case '1':
            answerebox.value += values;
            //showbox.value += values;
            break;
            //console.log("screen="+ ans);
        case '2':
            answerebox.value += values;
            //showbox.value += values;
            break;
        case '3':
            answerebox.value += values;
            //showbox.value += values;
            break;
        case '4':
            answerebox.value += values;
            //showbox.value += values;
            break;

        case '5':
            answerebox.value += values;
            //showbox.value += values;
            break;

        case '6':
            answerebox.value += values;
            //showbox.value += values;
            break;

        case '7':
            answerebox.value += values;
            //showbox.value += values;
            break;

        case '8':
            answerebox.value += values;
            //showbox.value += values;
            break;

        case '9':
            answerebox.value += values;
            //showbox.value += values;
            break;

        case '0':
            if (answerebox.value != 0) {
                answerebox.value += values;
                //showbox.value += values;
                break;
            } else if (answerebox.value == 0 && showbox.value != 0) {
                answerebox.value += 0;
                //showbox.value += values;
                break;
            } else if (answerebox.value == "") {
                signcounter = 0;
                break;
            }

        case '.':
            if (answerebox.value == 0) {
                answerebox.value = "0" + values;
                //showbox.value += values;
                break;
            } else {
                answerebox.value += values;
            }


    }

}

function operation(id) {

    textcounter = 1;
    let sign = document.getElementById(id).innerText;

    if (signcounter == 1) {
        switch (sign) {
            case '+':
                //number1 = answerebox.value;
                // showbox.value += "" + sign + "";
                //answerebox.value += " " + sign;
                //console.log("mul");
                showbox.value += answerebox.value + sign + "";
                break;
            case '-':
                //number1 = answerebox.value;
                //showbox.value += "" + sign + "";
                showbox.value += answerebox.value + sign + "";
                //answerebox.value += " " + sign;
                //console.log("mul");
                break;
            case 'X':
                // showbox.value += "" + "*" + "";
                showbox.value += answerebox.value + "*" + "";
                //answerebox.value += " " + sign;
                //console.log("mul");
                break;
            case '/':
                // showbox.value += "" + sign + "";
                showbox.value += answerebox.value + sign + "";
                //answerebox.value += " " + sign;
                //console.log("mul");
                break;
            case '=':
                showbox.value += answerebox.value;
                answerebox.value = eval(showbox.value);
                //showbox.value += answerebox.value + sign + "";
                showbox.value += "" + sign + "";
                equalcounter = 1;
                break;

            case 'xy':
                if (answerebox.value == "") {
                    showbox.value = "0" + "**" + "0";
                } else {
                    showbox.value += answerebox.value + "**" + "";
                }
                break;
            case 'mod':
                showbox.value += answerebox.value + "%" + "";


        }

        if (id == 'plus-min' && answerebox.value != 0 && plusmincount == 1) {
            let show = showbox.value;
            answerebox.value = "-" + answerebox.value;
            showbox.value = show + answerebox.value;
            answerebox.value = "";
            signcounter = 1;
            plusmincount = 0;

        } else {
            if (id == 'plus-min') {
                signcounter = 1;
            } else {
                signcounter = 0;
            }

        }

        // console.log("signcounter=" + signcounter);

        //console.log("textcounter=" + textcounter);

    }

}

function factorial() {
    console.log("answerebox value=" + answerebox.value)
    if (answerebox.value == 0) {
        showbox.value = "1! =";
        answerebox.value = "1";
    } else {
        let factnum = answerebox.value;
        let ans = 1;
        for (let i = factnum; i > 0; i--) {
            ans = ans * i;
        }
        showbox.value = factnum + "! =";
        answerebox.value = ans;
        console.log('factorial of ' + factnum + '=' + ans);
    }
    textcounter = 1;
    equalcounter = 0;
    signcounter = 0;

}

function pai(id) {
    if (id == "pi") {
        answerebox.value = Math.PI;
    }
    if (id == "e")
        answerebox.value = Math.E;
    signcounter = 1;
    textcounter = 1;
    //console.log(Math.PI);
}

function log(id) {
    let user_value = answerebox.value;
    if (id == "ln") {
        if (user_value == 0) {
            answerebox.value = "invalid input!";

        } else if (user_value < 0) {
            answerebox.value = "invalid input!";
        } else if (user_value > 0) {
            showbox.value = "ln(" + user_value + ")";
            answerebox.value = Math.log(user_value);
        }
    } else if (id == "log") {
        if (user_value == 0) {
            answerebox.value = "invalid input!";

        } else if (user_value < 0) {
            answerebox.value = "invalid input!";
        } else if (user_value > 0) {
            showbox.value = "Log(" + user_value + ")";
            answerebox.value = Math.log10(user_value);
        }
    } else if (id == "ten") {

        showbox.value = "10^" + user_value + "=";
        answerebox.value = 10 ** user_value

    } else if (id == "root") {
        showbox.value = "Root(" + user_value + ")";
        answerebox.value = Math.sqrt(user_value);
    } else if (id == "onebyx") {
        showbox.value = "1/" + user_value;
        answerebox.value = eval("1/" + user_value);
    } else if (id == "square") {
        showbox.value = "square(" + user_value + ")";
        answerebox.value = Math.pow(user_value, 2);
        console.log(Math.pow(user_value, 2));
    } else if (id == "cube") {
        showbox.value = "cube(" + user_value + ")";
        answerebox.value = Math.pow(user_value, 3);
        console.log(Math.pow(user_value, 3));
    } else if (id == "abs") {
        if (answerebox.value == "") {
            user_value = showbox.value;
        }
        showbox.value = "abs(" + user_value + ")";
        answerebox.value = Math.abs(user_value);

    } else if (id == "fe" || id == "exp") {
        if (user_value == "") {
            showbox.value = "0.e+0";

        } else {
            //let ans="user_value+0.e+0"
            //showbox.value=eval(ans)
            showbox.value = user_value + ".e+0"
        }
    } else if (id == "cube-root") {
        showbox.value = "cube-root(" + user_value + ")";
        answerebox.value = Math.cbrt(user_value);
        //console.log(Math.pow(user_value, 3));
    } else if (id == "yrootx") {
        showbox.value = "cube-root(" + user_value + ")";
        answerebox.value = Math.cbrt(user_value);
        //console.log(Math.pow(user_value, 3));
    } else if (id == "2x") {
        showbox.value = "2<sup>" + user_value + "</sup>";
        answerebox.value = Math.pow(2, user_value);
        //console.log(Math.pow(user_value, 3));
    } else if (id == "logyx") {
        showbox.value = "cube-root(" + user_value + ")";
        answerebox.value = Math.cbrt(user_value);
        //console.log(Math.pow(user_value, 3));
    } else if (id == "ex") {
        showbox.value = "e<sup>" + user_value + "</sup>";
        answerebox.value = Math.pow(Math.E, user_value);
        //console.log(Math.pow(user_value, 3));
    }

    textcounter = 1;
    equalcounter = 1;
    signcounter = 0;
}


let temp = 0;
let fcount = 0;

function bodmas(id) {

    if (id == "open-brace") {
        if (textcounter == 1) {
            clearscr("clrans");
            textcounter = 0;
        }
        if (rcount == 0 && lcount == 0) {
            if (fcount == 1) {
                answerebox.value += "*(";
            } else {
                answerebox.value += "(";
            }

        } else {
            answerebox.value += "(";
        }
        //showbox.value += "(";


        rcount++;
    }

    if (id == "close-brace" && rcount > 0) {

        let data = answerebox.value;
        let datalenght = data.length;
        if (data[datalenght - 1] === "(") {
            if (rcount == 1) {
                answerebox.value += "0)*";
                fcount = 0;
            } else {
                // if (rcount == 1) {

                //     answerebox.value += ")*";
                // }
                answerebox.value += "0)";
                temp = 1;

            }
        } else {
            if (temp == 1 && rcount == 1) {

                answerebox.value += ")*";
                temp = 0;
                fcount = 0;
            } else {
                answerebox.value += ")";
                fcount = 1;
            }
            // if (rcount == 1) {
            //     answerebox.value += ")";
            // }
            // else {
            //     if (rcount != lcount) {
            //         answerebox.value += ")";
            //     }
        }

        rcount--;
        lcount++;

        if (rcount == 0) {
            lcount = 0;
            //showbox.value += "*";
            //answerebox.value += "*";
        }

    }
    console.log("rcount=" + rcount);
    console.log("lcount=" + lcount);
    console.log("fcount=" + fcount);
    console.log("temp=" + temp);
    console.log("=====================");
    if (rcount > 1) {
        signcounter = 1;
    }
}
let change = 0;
let changecol = 0;

function degree(id) {
    let btnvalue = document.getElementById(id);
    if (id == "deg") {
        if (btnvalue.innerText == "DEG") {
            btnvalue.innerText = "RAD";
        } else if (btnvalue.innerText == "RAD") {
            btnvalue.innerText = "GRAD";
        } else if (btnvalue.innerText == "GRAD") {
            btnvalue.innerText = "DEG";
        }

    } else if (id == "change") {
        if (change == 0) {
            document.getElementById("sine").innerHTML = "sin<sup>-1</sup>";
            document.getElementById("sine").id = "sinin";
            document.getElementById("coas").innerHTML = "cos<sup>-1</sup>";
            document.getElementById("coas").id = "cosin";
            document.getElementById("tenn").innerHTML = "ten<sup>-1</sup>";
            document.getElementById("tenn").id = "tenin";
            document.getElementById("seec").innerHTML = "sec<sup>-1</sup>";
            document.getElementById("seec").id = "secin";
            document.getElementById("cssc").innerHTML = "sct<sup>-1</sup>";
            document.getElementById("cssc").id = "sctin";
            document.getElementById("coot").innerHTML = "cot<sup>-1</sup>";
            document.getElementById("coot").id = "cotin";
        } else if (change == 1) {
            document.getElementById("sinin").id = "sine";
            document.getElementById("sine").innerHTML = "sin";
            document.getElementById("cosin").id = "coas";
            document.getElementById("coas").innerHTML = "cos";
            document.getElementById("tenin").id = "tenn";
            document.getElementById("tenn").innerHTML = "ten";
            document.getElementById("secin").id = "seec";
            document.getElementById("seec").innerHTML = "sec";
            document.getElementById("sctin").id = "cssc";
            document.getElementById("cssc").innerHTML = "sct";
            document.getElementById("cotin").id = "coot";
            document.getElementById("coot").innerHTML = "cot";


        }
        if (change == 1) {
            change = 0;
        } else if (change == 0) {
            change = 1;
        }

    } else if (id == "2nd") {
        if (changecol == 0) {
            document.getElementById("square").innerHTML = "x<sup>3</sup>";
            document.getElementById("square").id = "cube";
            document.getElementById("root").innerHTML = "3<i class='fa-sharp fa-solid fa-square-root-variable'></i>";
            document.getElementById("root").id = "cube-root";
            document.getElementById("power").innerHTML = "y<i class='fa-sharp fa-solid fa-square-root-variable'></i>";
            document.getElementById("power").id = "yrootx";
            document.getElementById("ten").innerHTML = "2<sup>x</sup>";
            document.getElementById("ten").id = "2x";
            document.getElementById("log").innerHTML = "log<sub>y</sub><sup>x</sup>";
            document.getElementById("log").id = "logyx";
            document.getElementById("ln").innerHTML = "e<sup>x</sup>";
            document.getElementById("ln").id = "ex";
        } else if (changecol == 1) {
            document.getElementById("cube").id = "square";
            document.getElementById("square").innerHTML = "x<sup>2</sup>";
            document.getElementById("cube-root").id = "root";
            document.getElementById("root").innerHTML = "2<i class='fa-sharp fa-solid fa-square-root-variable'></i>";
            document.getElementById("yrootx").id = "power";
            document.getElementById("power").innerHTML = "x<sup>y</sup>";
            document.getElementById("2x").id = "ten";
            document.getElementById("ten").innerHTML = "10<sup>x</sup>";
            document.getElementById("logyx").id = "log";
            document.getElementById("log").innerHTML = "log";
            document.getElementById("ex").id = "ln";
            document.getElementById("ln").innerHTML = "ln";
        }
        if (changecol == 1) {
            changecol = 0;
        } else if (changecol == 0) {
            changecol = 1;
        }

    }
}

function memory(id) {
    if (id == "mc") {
        while (memory_array.length > 0) {
            memory_array.pop();
        }
    } else if (id == "mr") {
        if (answerebox.value != "") {
            answerebox.value = "";
        }
        if (memory_array.length == 0) {
            answerebox.value = 0;
        } else {
            answerebox.value += memory_array[memory_array.length - 1];
        }

        signcounter = 1;
    } else if (id == "m+") {
        memory_array.push(answerebox.value);


    } else if (id == "m-") {
        memory_array.pop();

    } else if (id == "ms") {
        if (answerebox.value == "") {
            memory_array.push(0);
        } else {
            memory_array.push(answerebox.value);
        }


    }
    alert("available data in memory := " + memory_array);
}

function trignomarty(id) {
    let user_value = answerebox.value;
    if (id == "sine") {

        showbox.value = "sin(" + user_value + ")";
        answerebox.value = Math.sin(user_value);
        console.log("sine calling");
    } else if (id == "coas") {
        showbox.value = "cos(" + user_value + ")";
        answerebox.value = Math.cos(user_value);
    } else if (id == "tenn") {
        showbox.value = "tan(" + user_value + ")";
        answerebox.value = Math.tan(user_value);
    } else if (id == "seec") {
        showbox.value = "sec(" + user_value + ")";
        answerebox.value = Math.sec(user_value);
    } else if (id == "coot") {
        showbox.value = "cot(" + user_value + ")";
        answerebox.value = Math.cot(user_value);
    } else if (id == "sinin") {
        showbox.value = "asin(" + user_value + ")";
        answerebox.value = Math.asin(user_value);
    } else if (id == "cosin") {
        showbox.value = "acos(" + user_value + ")";
        answerebox.value = Math.acos(user_value);
    } else if (id == "tenin") {
        showbox.value = "atan(" + user_value + ")";
        answerebox.value = Math.atan(user_value);
    } else if (id == "secin") {
        showbox.value = "asec(" + user_value + ")";
        answerebox.value = Math.asec(user_value);
    } else if (id == "cotin") {
        showbox.value = "acot(" + user_value + ")";
        answerebox.value = Math.acot(user_value);
    } else if (id == "floor") {
        showbox.value = "Floor(" + user_value + ")";
        answerebox.value = Math.floor(user_value);
    } else if (id == "round") {
        showbox.value = "round(" + user_value + ")";
        answerebox.value = Math.round(user_value);
    } else if (id == "ceiling") {
        showbox.value = "ceiling(" + user_value + ")";
        answerebox.value = Math.ceil(user_value);
    } else if (id == "rand") {
        showbox.value = Math.random();
        //answerebox.value = Math.ceil(user_value);
    } else if (id == "dms") {
        //showbox.value = Math.random();
        //answerebox.value = Math.ceil(user_value);
    } else if (id == "deg") {
        showbox.value = "deg(" + user_value + ")";
        answerebox.value = eval(user_value * 180 / Math.PI);
    }
    textcounter = 1;
    equalcounter = 1;
    signcounter = 0;
}