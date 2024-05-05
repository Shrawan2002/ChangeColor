console.log("hello");

function getNum(){
    return new Promise( (resolve,reject)=>{
        setTimeout( ()=>{
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve("promise was resolve");
        },1000);

    });
}

    async function demo(){
     await getNum();
      await getNum();
    await getNum();
}

let h1 = document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout( ()=>{
            let num=Math.floor(Math.random()*10)+1;
            if(num>8){
                reject("prome was rejected");
            }
            h1.style.color=color;
            resolve("prome was resolved");
        },delay);
    });
}


 async function updateColor(){
   try{
     await changeColor("red",1000);
     await changeColor("green",1000);
     await changeColor("yellow",1000);
     await changeColor("blue",1000);
   }

   catch(error){
    console.log("error catch!",error);
   }
   let a=10;
   console.log(a);
}