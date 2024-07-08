var disabled=0;
var chance="X";
var player=chance+"'s turn";
document.getElementById("chance").innerHTML=player;
var result=document.getElementById("result");

function control(id) 
{  
    if(chance==="X")
        {
            document.getElementById(id).innerHTML="X";
            document.getElementById(id).disabled=true;
            chance= "O";
            var player=chance+"'s turn";
            document.getElementById("chance").innerHTML=player;
            disabled=disabled+1;
            if(winner=check())
                {
                   result.innerHTML=winner+" WON ";
                   disable();
                }
                else if(draw=check())
                    {
                        result.innerHTML="DRAW";
                    } 
                 
        }
     else if(chance==="O")
        {
            document.getElementById(id).disabled=true;
            document.getElementById(id).innerHTML="O";
            chance= "X";  
            var player=chance+"'s turn";
            document.getElementById("chance").innerHTML=player;
            disabled=disabled+1;
            if(winner=check())
                {
                   result.innerHTML=winner+" WON ";
                   disable();
                } 
                else if(draw=check())
                {
                    result.innerHTML="DRAW";
                }   
        }  

}

function disable()
{
    if(winner=check())
        {
        for(var i=0;i<9;i++)
            {
                var id="btn"+i;
                document.getElementById(id).disabled=true;
            }
        }
}

function check()
{
    d0=btn0.innerHTML;
    d1=btn1.innerHTML;
    d2=btn2.innerHTML;
    d3=btn3.innerHTML;
    d4=btn4.innerHTML;
    d5=btn5.innerHTML;
    d6=btn6.innerHTML;
    d7=btn7.innerHTML;
    d8=btn8.innerHTML;

    if(d0==d1 && d1==d2 && d0!="" && d1!="" && d2!="")
        {
        return d0;
        }
    else if(d3==d4 && d4==d5 && d3!="" && d4!="" && d5!="")
        {
            return d3;
        }
    else if(d6==d7 && d7==d8 && d6!="" && d7!="" && d8!="")
        {
            return d6;
        }
    else if(d0==d3 && d3==d6 && d0!="" && d3!="" && d6!="")
        {
            return d0;
        } 
    else if(d1==d4 && d4==d7 && d1!="" && d4!="" && d7!="")
        {
            return d1;
        }
    else if(d2==d5 && d5==d8 && d2!="" && d5!="" && d8!="")
        {
            return d2;
        } 
    else if(d0==d4 && d4==d8 && d0!="" && d4!="" && d8!="")
         {
            return d0;
        } 
    else if(d2==d4 && d4==d6 && d2!="" && d4!="" && d6!="")
        {
            return d2; 
        }   
    else if(disabled === 9)
        {
            result.innerHTML="DRAW !!";
        }                                               
}

function reset()
{
    location.reload();
}