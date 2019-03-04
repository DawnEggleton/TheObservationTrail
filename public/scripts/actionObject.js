AFRAME.registerComponent('action-obj-comp', {
    schema: {
        objectType: {type: 'string', default: ''},
        correctAction: {type: 'string', default: ''},
        animalType: {type: 'string', default: ''}
    },
    init : function() {
        const Context_AF = this;
        let type = Context_AF.el.getAttribute('action-obj-comp').objectType;
        let action = Context_AF.el.getAttribute('action-obj-comp').correctAction;
        let animal = Context_AF.el.getAttribute('action-obj-comp').animalType;
        
        if (type == "rock" && action == "rock") {
            Context_AF.el.addEventListener('click', function(event) {
                Context_AF.throwRock(animal);
            });
        }
        else if (type == "path-left" && action == "path-left") {
            document.addEventListener('keydown', function(event) {
                if (event.keyCode == 65 || event.keyCode == 37) {
                    Context_AF.changePathLeft(animal);
                }
            });
        }
        else if (type == "path-right" && action == "path-right") {
            document.addEventListener('keydown', function(event) {
                if (event.keyCode == 68 || event.keyCode == 39) {
                    Context_AF.changePathRight(animal);
                }
            });
        }
        else if (type == "approach" && action == "approach" ) {
            document.addEventListener('keydown', function(event) {
                if (event.keyCode == 87 || event.keyCode == 38) {
                    Context_AF.approachAnimal(animal);
                }
            });
        }
        else if (type == "stick" && action == "stick") {
            Context_AF.el.addEventListener('click', function(event) {
                Context_AF.throwRock(animal);
            });
        }
        else if (type != action) {
            //check for click for rock or stick
            Context_AF.el.addEventListener('click', function(event) {
                Context_AF.incorrectAction(animal, type);
            });
            //check for key press for other actions
            document.addEventListener('keydown', function(event) {
                if (event.keyCode == 32 || event.keyCode == 17 || event.keyCode == 65 || event.keyCode == 37 || event.keyCode == 68 || event.keyCode == 39 || event.keyCode == 87 || event.keyCode == 38) {
                    //check for proximity
                    let ani = document.getElementById(animal);
                    let camera = document.querySelector('#cam');
                    let camZ = camera.getAttribute('position').z;
                    let zVal = ani.getAttribute('position').z;                    
                    if(camZ - zVal < 3 && camZ - zVal > 0) {
                        Context_AF.incorrectAction(animal, type);
                    }
                }
            });
        }
    },
    throwRock : function (ani) {
        let animal = document.getElementById(ani);
        let xVal = animal.getAttribute('position').x;
        let yVal = animal.getAttribute('position').y;
        let zVal = animal.getAttribute('position').z;
        setTimeout(function() {
            console.log("rock thrown");
            animal.setAttribute("position", {x: xVal + 3, y: yVal, z: zVal});
        }, 1000);
    },
    changePathLeft : function (ani) {
        //determine distance between animal and camera to ensure correct animal
        let animal = document.getElementById(ani);
        let camera = document.querySelector('#cam');
        let camZ = camera.getAttribute('position').z;
        let zVal = animal.getAttribute('position').z;

        //if close to correct animal, do action
        if(camZ - zVal < 5 && camZ - zVal > 0) {
            //in this case, animal stays and you change paths, so no action taken
            console.log('change path left');
        }
    },
    changePathRight : function (ani) {
        //determine distance between animal and camera to ensure correct animal
        let animal = document.getElementById(ani);
        let camera = document.querySelector('#cam');
        let camZ = camera.getAttribute('position').z;
        let zVal = animal.getAttribute('position').z;

        //if close to correct animal, do action
        if(camZ - zVal < 5 && camZ - zVal > 0) {
            //in this case, animal stays and you change paths, so no action taken
            console.log('change path right');
        }
    },
    approachAnimal : function (ani) {
        //determine distance between animal and camera to ensure correct animal
        let animal = document.getElementById(ani);
        let camera = document.querySelector('#cam');
        let camZ = camera.getAttribute('position').z;
        let xVal = animal.getAttribute('position').x;
        let yVal = animal.getAttribute('position').y;
        let zVal = animal.getAttribute('position').z;
        
        //if close to correct animal, do action
        if(camZ - zVal < 5 && camZ - zVal > 0) {
            animal.setAttribute("position", {x: xVal + 3, y: yVal, z: zVal});
        }
    },
    throwStick : function (ani) {
        let animal = document.getElementById(ani);
        let xVal = animal.getAttribute('position').x;
        let yVal = animal.getAttribute('position').y;
        let zVal = animal.getAttribute('position').z;
        setTimeout(function() {
            console.log("rock thrown");
            animal.setAttribute("position", {x: xVal + 3, y: yVal, z: zVal});
        }, 1000);
    },
    incorrectAction : function (ani, act) {
        //find camera and animal values
        let camera = document.querySelector('#cam');
        let camX = camera.getAttribute('position').x;
        let camY = camera.getAttribute('position').y;
        let camZ = camera.getAttribute('position').z;
        let animal = document.getElementById(ani);
        let xVal = animal.getAttribute('position').x;
        let yVal = animal.getAttribute('position').y;
        let zVal = animal.getAttribute('position').z;
        
        //
        if(camZ - zVal < 5 && camZ - zVal > 0) {  
            //if throwing object, wait for animation to play first 
            if (act == "rock" || act =="stick"){         
                setTimeout(function() {
                    animal.setAttribute("position", {x: xVal, y: yVal, z: zVal + 2});
                    setTimeout(function() {
                        camera.setAttribute("position", {x: camX, y: camY, z: camZ + 12});
                        setTimeout(function() {
                            animal.setAttribute("position", {x: xVal, y: yVal, z: zVal});
                        }, 500);            
                    }, 500);            
                }, 1200);            
            }
            //else, do action right away
            else if (act != "rock" && act != "stick") {       
                setTimeout(function() {
                    animal.setAttribute("position", {x: xVal, y: yVal, z: zVal + 2});
                    setTimeout(function() {
                        camera.setAttribute("position", {x: camX, y: camY, z: camZ + 12});
                        setTimeout(function() {
                            animal.setAttribute("position", {x: xVal, y: yVal, z: zVal});
                        }, 500);            
                    }, 500);            
                }, 500);          
            }
        }
    }
});