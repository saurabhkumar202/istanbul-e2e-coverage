var x=42;
if(false){
x=-1;
}
temp();
for(var y=10;y<5;y++)
{
    console.log('Value of y is'+y);
    break;
    (function(){
        console.log('This is IIFE');
    })();
}

function temp(){
    console.log('I am temp');
    /*This is inline comment*/
}


