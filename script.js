hexa=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
function clicked(){ 
let s1='';
function hexacode(){
   let ran=(Math.floor(Math.random()*16))
   if (ran >=10){
    if (ran==10){
        ran='A'
    }
    else if(ran==11) {
        ran='B'
    }
    else if(ran==12){
        ran='C'
    }
    else if(ran==13){
        ran='D'
    }
    else if(ran==14){
        ran='E'
    }
    else if(ran==15){
        ran='F'
    }
   }
   console.log(ran)
   s1+=ran
} 
s2=[]
i=1;
while (i<=6){
    hexacode()
    s2.push(s1)
    i++
}
console.log(s2)
s3='#'+s1
document.getElementById("displaycolor").innerHTML=s3;
document.getElementById("colorBox").style.backgroundColor=(s3)
greet.style.color=(s3);
console.log("I'm from"+s3)
}
let greet=document.getElementById("greet");
let userName=prompt("Hi,What's Your Name ? ")
let cTime= new Date();
let time=cTime.getHours()
if(time<12){
    greet.innerHTML="Good Morning"+" "+ userName;
}
else if(time>12 && time<16){
    greet.innerHTML="Good AfterNoon"+" "+ userName;

}
else{
    greet.innerHTML="Good Evening"+" "+ userName;

}
