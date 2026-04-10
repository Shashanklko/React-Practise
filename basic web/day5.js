function myFun(){
    const error = function(name){
        console.log('Dear '+ name +" Better luck next time!");
    }

    const success = function(name){
        console.log("Congratulations "+ name +" !!! ");
    }

    const placementResult = function(name ,status){
        return new Promise(
            function(resolve, reject){
            if(status==='selected'){
                resolve(name);
            }else{
                reject(name);
            }
        });
    };
    placementResult("Abhisekh","selected").then(success).catch(error);
    placementResult("Rohit","Not Selected").then(success).catch(error);
}

let col = ['red' , 'green' , 'yellow' , 'blue'];
let index = 0;
function changeColor(){
    document.getElementById("abc").style.backgroundColor = col[index];
    if(index==col.length+1){
        index = 0;
    }else{
        index++;
    }
    setInterval(changeColor, 500);
}