var answerebox= document.getElementById("answere");
var number;

let answere=[];


function display(id){
    let values=document.getElementById(id).innerText;
    console.log("values = "+values);
    switch(values)
    {
        case '1':
            answerebox.value+=values;
            break;
           //console.log("screen="+ ans);
        case '2':
            answerebox.value+=values;
            break;
        case '3':
            answerebox.value+=values;
            break;       
        case '4':
            answerebox.value+=values;
           break;
        
        case '5':
            answerebox.value+=values;
           break;
        
        case '6':
            answerebox.value+=values;
           break;
        
        case '7':
            answerebox.value+=values;
           break;
        
        case '8':
            answerebox.value+=values;
           break;
        
        case '9':
            answerebox.value+=values;
           break;
        
        case '0':
            answerebox.value+=values;
           break;
            
    }
}

function operation(id)
{
    // let sign=document.getElementById(id).innerText;
    // number=answerebox.value;
    // let values=document.getElementById(id).innerText;
    // console.log("values = "+values);
    switch(id)
    {
        case 'mul':
            console.log("mul");
            //answerebox.value+='*';
            break;
           //console.log("screen="+ ans);
       
        
        
            
}

 }
