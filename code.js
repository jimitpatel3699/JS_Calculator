let showbox = document.getElementById("txtbstore");
let answerebox = document.getElementById("answere");
let number1, number2;
let signcounter = 0;
let textcounter = 0;
let equalcounter = 0;
let plusmincount=0;

function clearscr(id) 
{
    if (id == "clear") 
    {
        answerebox.value = "";
        showbox.value = "";
    }
    if (id == "delete") 
    {
        answerebox.value = answerebox.value.slice(0, -1)
    }

}

function display(id) 
{
    let values = document.getElementById(id).innerText;
    console.log("values = " + values);

    if (textcounter == 1) 
    {
        answerebox.value = "";

    }

    if (equalcounter == 1) 
    {

        showbox.value = "";
        equalcounter = 0;
    }

    switch (values) 
    {
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
            if (answerebox.value != 0) 
            {
                answerebox.value += values;
                //showbox.value += values;
                break;
            }
            else 
            {
                signcounter = 0;
                break;
            }
        case '.':
            if (answerebox.value == 0) 
            {
                answerebox.value = "0"+values;
                //showbox.value += values;
                break;
            }
            else 
            {
                answerebox.value += values;
            }
    }
    signcounter = 1;
    textcounter = 0;
    plusmincount=1;

}

function operation(id) 
{
    

    let sign = document.getElementById(id).innerText;

    if (signcounter == 1) 
    {
        switch (sign) 
        {
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
                showbox.value += answerebox.value + "*"+ "";
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

            // case '+/-':
               
                // break;
        }
        

        if (id=='plus-min' && answerebox.value != 0 && plusmincount==1) 
        {
            let show=showbox.value;
            answerebox.value = "-" + answerebox.value;
            showbox.value=show+answerebox.value;
            answerebox.value = "";
            signcounter = 1;
            plusmincount=0;
            
        }
        else
        {
            if(id=='plus-min')
            {
                signcounter = 1;  
            }
            else
            {
                signcounter = 0;
            }
            
        }
            
            // console.log("signcounter=" + signcounter);
            textcounter = 1;
            console.log("textcounter=" + textcounter);

    }
    
}

function factorial()
{
    console.log("answerebox value="+ answerebox.value)
    if(answerebox.value==0)
    {
        showbox.value="1! =";
        answerebox.value="1";
    }
    else
    {
        let factnum=answerebox.value;
        let ans=1;
        for(let i=factnum;i>0;i--)
        {
            ans=ans*i;
        }
        showbox.value=factnum +"! =";
        answerebox.value=ans;
        console.log('factorial of '+ factnum+'='+ans);
    }
   textcounter = 1;
   equalcounter = 0;
   signcounter=0;

}
function pai()
{
    answerebox.value=Math.PI;
    //console.log(Math.PI);
}

function log(id)
{
    let user_value=answerebox.value;
    if(id=="ln")
    {
        if(user_value==0)
        {
            answerebox.value="invalid input!";

        }
        if(user_value<0)
        {
            answerebox.value="invalid input!";
        }
        if(user_value>0)
        {
            answerebox.value=Math.log(user_value);
        }
    }
    if(id=="log")
    {
        if(user_value==0)
        {
            answerebox.value="invalid input!";

        }
        if(user_value<0)
        {
            answerebox.value="invalid input!";
        }
        if(user_value>0)
        {
            answerebox.value=Math.log10(user_value);
        }
    }
    if(id=="ten")
    {
          
        showbox.value="10^"+user_value+"=";    
        answerebox.value=10**user_value      
        
    }
    textcounter = 1;
    equalcounter = 1;
    signcounter=0;
}
