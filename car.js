function vehicle(name, maker, engine){
    this.name = name;
    this.maker = maker;
    this.engine = engine;
    start = function(){
        alert("Starting the engine...");
    }
};

let car = new vehicle('911 GT3RS', 'Porsche', 'Petrol');
car.brakesType = "Disc Brakes";
car.stop = function(){
    alert("applying brakes....");
}

function getName(){
    alert(car.name); 
    console.log("The car name is " + car.name);
}

function getMaker(){
    alert(car.maker);
}
function getEngine(){
    alert(car.engine);
}

function getBrake(){
    alert(car.brakesType)
}
function start(){
    car.start();
}
function stop(){
    car.stop();
}