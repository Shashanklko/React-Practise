function myFun(){
   const p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const data = {message: "Data fetched successfully"};
        resolve(data);
    }, 5000);
   });
   const p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const data = {message: "Data could not fetched successfully"};
        resolve(data);
    }, 3000);
   });
   p1.then((data)=>{
    console.log(data.message);
   }).catch((error)=>{
    console.error("Error:, error");
   });
   p2.then((data)=>{
    console.log(data.message);
   }).catch((error)=>{
    console.error("Error:, error");
   });


}
