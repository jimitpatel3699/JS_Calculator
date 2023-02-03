let showbox = document.getElementById("txtbstore");
let answerebox = document.getElementById("answere");
let number1, number2;
let signcounter = 0;
let textcounter = 0;
let equalcounter = 0;
let plusmincount=0;
let rcount=0;
let lcount=0;
// let value1=document.write("x<sup>y</sup>");
console.log("answerbox val="+answerebox.value);

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
    if (textcounter == 1) 
    {
        answerebox.value = "";

    }

    if (equalcounter == 1) 
    {

        showbox.value = "";
        equalcounter = 0;
    }
    signcounter = 1;
    textcounter = 0;
    plusmincount=1;
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
            if (answerebox.value == 0 && showbox.value !=0) 
            {
                answerebox.value += 0;
                //showbox.value += values;
                break;
            }
            if (answerebox.value == "") 
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
   

}

function operation(id) 
{
    
    textcounter = 1;
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

            case 'xy':
                if(answerebox.value=="")
                {
                    showbox.value = "0" + "**"+ "0";
                }
                else
                {
                showbox.value += answerebox.value + "**"+ "";
                }
                break;
            case 'mod':
            showbox.value += answerebox.value + "%" + "";
            

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
           
            //console.log("textcounter=" + textcounter);

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
function pai(id)
{
    if(id=="pi")
    {
        answerebox.value=Math.PI;
    }
    if(id=="e")
    answerebox.value=Math.E;
    signcounter=1;
    textcounter = 1;
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
            showbox.value="ln("+user_value+")";
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
            showbox.value="Log("+user_value+")";
            answerebox.value=Math.log10(user_value);
        }
    }
    if(id=="ten")
    {
          
        showbox.value="10^"+user_value+"=";    
        answerebox.value=10**user_value      
        
    }
    if(id=="root")
    {
        showbox.value="Root("+user_value+")";
        answerebox.value=Math.sqrt(user_value);
    }

    if(id=="onebyx")
    {
        showbox.value="1/"+user_value;
        answerebox.value=eval("1/"+user_value);
    }
    if(id="square")
    {
        showbox.value="square("+user_value+")";
        answerebox.value=Math.SQRT(user_value);
    }
    textcounter = 1;
    equalcounter = 1;
    signcounter=0;
}



function bodmas(id)
{
    let bracket=id;
    let useval=answerebox.value;
    
    if(id=="open-brace")
    {
        showbox.value+="(";
        rcount++;
        
        
        
    }
   
    
    if(id=="close-brace" && rcount>0)
    {
        if(lcount==0)
        {
            showbox.value+="0)";
        }
        else
        {
            showbox.value+=")";

        }
        
        rcount--;
        lcount++; 
        if(rcount==0)
        {
            lcount=0;
            showbox.value+="*";
        }
       
        
    }
    console.log("rcount="+rcount);
    console.log("lcount="+lcount);
    if(rcount>1)
    {
        signcounter=1;
    }
    
    
}
