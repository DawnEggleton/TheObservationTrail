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
                Context_AF.throwRockAnimation(animal);
                Context_AF.throwRock(animal);
                Context_AF.el.setAttribute('action-obj-comp', {objectType: "complete"});
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
                Context_AF.throwStickAnimation(animal);
                Context_AF.throwStick(animal);
            });
        }
        else if (type == "clap" && action == "clap" ) {
            document.addEventListener('keydown', function(event) {
                if (event.keyCode == 32) {
                    Context_AF.clapHands(animal);
                }
            });
        }
        else if (type == "duck" && action == "duck" ) {
            document.addEventListener('keydown', function(event) {
                if (event.keyCode == 17) {
                    Context_AF.duckHead(animal);
                }
            });
        }
        else if (type != action && type != "complete") {
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
        setTimeout(function() {   
            let animal = document.getElementById(ani);
            let xVal = animal.getAttribute('position').x;
            let yVal = animal.getAttribute('position').y;
            let zVal = animal.getAttribute('position').z;
            let xyzStart = xVal.toString() + " "+ yVal.toString() + " " + zVal.toString();
            let xEnd = xVal + 8;
            let xyzEnd = xEnd.toString() + " "+ yVal.toString() + " " + zVal.toString();

            let animation = document.createElement('a-animation');
            animation.setAttribute("attribute","position");
            animation.setAttribute("from",xyzStart);
            animation.setAttribute("to",xyzEnd);
            animation.setAttribute("dur",1000);
            animal.appendChild(animation);

            setTimeout(function() {
                animal.parentNode.removeChild(animal);
                let selector = "." + ani + "-action";
                let actions = document.querySelectorAll(selector);
                actions.forEach(function(item) {
                    item.parentNode.removeChild(item);
                });
            }, 1000);
        }, 1000);
    },
    throwRockAnimation : function (ani) {
        let rockID = ani + "-throw-rock";
        let rock = document.getElementById(rockID);

        let xVal = rock.getAttribute('position').x;
        let yVal = rock.getAttribute('position').y + 0.06;
        let zVal = rock.getAttribute('position').z;        
        let xyzStart = xVal.toString() + " "+ yVal.toString() + " " + zVal.toString();

        let animMidX = xVal + 0.5;
        let animMidY = yVal + 1;
        let animMidZ = zVal - 1;
        let xyzMid = animMidX.toString() + " "+ animMidY.toString() + " " + animMidZ.toString();

        let animFinalX = animMidX + 0.5;
        let animFinalY = animMidY - 1;
        let animFinalZ = animMidZ - 1;
        let xyzFinal = animFinalX.toString() + " "+ animFinalY.toString() + " " + animFinalZ.toString();

        let animationStart = document.createElement('a-animation');
        animationStart.setAttribute("attribute","position");
        animationStart.setAttribute("easing", "linear");
        animationStart.setAttribute("from",xyzStart);
        animationStart.setAttribute("to",xyzMid);
        animationStart.setAttribute("dur",500);
        rock.appendChild(animationStart);

        let animationEnd = document.createElement('a-animation');
        animationEnd.setAttribute("attribute","position");
        animationEnd.setAttribute("easing", "linear");
        animationEnd.setAttribute("begin", 500);
        animationEnd.setAttribute("from",xyzMid);
        animationEnd.setAttribute("to",xyzFinal);
        animationEnd.setAttribute("dur",500);
        rock.appendChild(animationEnd);
    },
    changePathLeft : function (ani) {        
        let animal = document.getElementById(ani);
        let xVal = animal.getAttribute('position').x;
        let yVal = animal.getAttribute('position').y;
        let zVal = animal.getAttribute('position').z;
        let xyzStart = xVal.toString() + " "+ yVal.toString() + " " + zVal.toString();
        let xEnd = xVal + 8;
        let xyzEnd = xEnd.toString() + " "+ yVal.toString() + " " + zVal.toString();
        
        //determine distance between animal and camera to ensure correct animal
        let camera = document.querySelector('#cam');
        let camZ = camera.getAttribute('position').z;

        //if close to correct animal, do action
        if(camZ - zVal < 5 && camZ - zVal > 0) {
            let animation = document.createElement('a-animation');
            animation.setAttribute("attribute","position");
            animation.setAttribute("from",xyzStart);
            animation.setAttribute("to",xyzEnd);
            animation.setAttribute("dur",1000);
            animal.appendChild(animation);
    
            setTimeout(function() {
                animal.parentNode.removeChild(animal);
                let selector = "." + ani + "-action";
                let actions = document.querySelectorAll(selector);
                actions.forEach(function(item) {
                    item.parentNode.removeChild(item);
                });
            }, 1000);
        }
    },
    changePathRight : function (ani) {        
        let animal = document.getElementById(ani);
        let xVal = animal.getAttribute('position').x;
        let yVal = animal.getAttribute('position').y;
        let zVal = animal.getAttribute('position').z;
        let xyzStart = xVal.toString() + " "+ yVal.toString() + " " + zVal.toString();
        let xEnd = xVal - 8;
        let xyzEnd = xEnd.toString() + " "+ yVal.toString() + " " + zVal.toString();
        
        //determine distance between animal and camera to ensure correct animal
        let camera = document.querySelector('#cam');
        let camZ = camera.getAttribute('position').z;

        //if close to correct animal, do action
        if(camZ - zVal < 5 && camZ - zVal > 0) {
            let animation = document.createElement('a-animation');
            animation.setAttribute("attribute","position");
            animation.setAttribute("from",xyzStart);
            animation.setAttribute("to",xyzEnd);
            animation.setAttribute("dur",1000);
            animal.appendChild(animation);
    
            setTimeout(function() {
                animal.parentNode.removeChild(animal);
                let selector = "." + ani + "-action";
                let actions = document.querySelectorAll(selector);
                actions.forEach(function(item) {
                    item.parentNode.removeChild(item);
                });
            }, 1000);
        }
    },
    approachAnimal : function (ani) {
        //determine distance between animal and camera to ensure correct animal
        let animal = document.getElementById(ani);
        let xVal = animal.getAttribute('position').x;
        let yVal = animal.getAttribute('position').y;
        let zVal = animal.getAttribute('position').z;
        let xyzStart = xVal.toString() + " "+ yVal.toString() + " " + zVal.toString();
        let xEnd = xVal - 8;
        let xyzEnd = xEnd.toString() + " "+ yVal.toString() + " " + zVal.toString();
        
        //determine distance between animal and camera to ensure correct animal
        let camera = document.querySelector('#cam');
        let camZ = camera.getAttribute('position').z;
        
        //if close to correct animal, do action
        if(camZ - zVal < 5 && camZ - zVal > 0) {
            let animation = document.createElement('a-animation');
            animation.setAttribute("attribute","position");
            animation.setAttribute("from",xyzStart);
            animation.setAttribute("to",xyzEnd);
            animation.setAttribute("dur",1000);
            animal.appendChild(animation);
    
            setTimeout(function() {
                animal.parentNode.removeChild(animal);
                let selector = "." + ani + "-action";
                let actions = document.querySelectorAll(selector);
                actions.forEach(function(item) {
                    item.parentNode.removeChild(item);
                });
            }, 1000);
        }
    },
    clapHands : function (ani) {
        let animal = document.getElementById(ani);
        let xVal = animal.getAttribute('position').x;
        let yVal = animal.getAttribute('position').y;
        let zVal = animal.getAttribute('position').z;
        let xyzStart = xVal.toString() + " "+ yVal.toString() + " " + zVal.toString();
        let xEnd = xVal - 8;
        let xyzEnd = xEnd.toString() + " "+ yVal.toString() + " " + zVal.toString();
        
        //determine distance between animal and camera to ensure correct animal
        let camera = document.querySelector('#cam');
        let camZ = camera.getAttribute('position').z;
        
        //if close to correct animal, do action
        if(camZ - zVal < 5 && camZ - zVal > 0) {
            let animation = document.createElement('a-animation');
            animation.setAttribute("attribute","position");
            animation.setAttribute("from",xyzStart);
            animation.setAttribute("to",xyzEnd);
            animation.setAttribute("dur",1000);
            animal.appendChild(animation);
    
            setTimeout(function() {
                animal.parentNode.removeChild(animal);
                let selector = "." + ani + "-action";
                let actions = document.querySelectorAll(selector);
                actions.forEach(function(item) {
                    item.parentNode.removeChild(item);
                });
            }, 1000);
        }
    },
    duckHead : function (ani) {
        let animal = document.getElementById(ani);
        let xVal = animal.getAttribute('position').x;
        let yVal = animal.getAttribute('position').y;
        let zVal = animal.getAttribute('position').z;
        let xyzStart = xVal.toString() + " "+ yVal.toString() + " " + zVal.toString();
        let zEnd = zVal + 8;
        let xyzEnd = xVal.toString() + " "+ yVal.toString() + " " + zEnd.toString();
        
        //determine distance between animal and camera to ensure correct animal
        let camera = document.querySelector('#cam');
        let camZ = camera.getAttribute('position').z;
        
        //if close to correct animal, do action
        if(camZ - zVal < 5 && camZ - zVal > 0) {
            animal.setAttribute("obj-model", {obj: "#snowyOwl_flying_obj"});
            let animation = document.createElement('a-animation');
            animation.setAttribute("attribute","position");
            animation.setAttribute("from",xyzStart);
            animation.setAttribute("to",xyzEnd);
            animation.setAttribute("dur",1000);
            animal.appendChild(animation);
    
            setTimeout(function() {
                animal.parentNode.removeChild(animal);
                let selector = "." + ani + "-action";
                let actions = document.querySelectorAll(selector);
                actions.forEach(function(item) {
                    item.parentNode.removeChild(item);
                });
            }, 1000);
        }
    },
    throwStick : function (ani) {       
        setTimeout(function() {   
            let animal = document.getElementById(ani);
            let xVal = animal.getAttribute('position').x;
            let yVal = animal.getAttribute('position').y;
            let zVal = animal.getAttribute('position').z;
            let xyzStart = xVal.toString() + " "+ yVal.toString() + " " + zVal.toString();
            let xEnd = xVal + 8;
            let xyzEnd = xEnd.toString() + " "+ yVal.toString() + " " + zVal.toString();

            let animation = document.createElement('a-animation');
            animation.setAttribute("attribute","position");
            animation.setAttribute("from",xyzStart);
            animation.setAttribute("to",xyzEnd);
            animation.setAttribute("dur",1000);
            animal.appendChild(animation);

            setTimeout(function() {
                animal.parentNode.removeChild(animal);
                let selector = "." + ani + "-action";
                let actions = document.querySelectorAll(selector);
                actions.forEach(function(item) {
                    item.parentNode.removeChild(item);
                });
            }, 1000);
        }, 1000);
    },
    throwStickAnimation : function (ani) {   
        let stickID = ani + "-throw-stick";
        let stick = document.getElementById(stickID);

        let xVal = stick.getAttribute('position').x;
        let yVal = stick.getAttribute('position').y;
        let zVal = stick.getAttribute('position').z;        
        let xyzStart = xVal.toString() + " "+ yVal.toString() + " " + zVal.toString();

        let animMidX = xVal + 0.5;
        let animMidY = yVal + 1;
        let animMidZ = zVal - 1;
        let xyzMid = animMidX.toString() + " "+ animMidY.toString() + " " + animMidZ.toString();

        let animFinalX = animMidX + 0.5;
        let animFinalY = animMidY - 1;
        let animFinalZ = animMidZ - 1;
        let xyzFinal = animFinalX.toString() + " "+ animFinalY.toString() + " " + animFinalZ.toString();

        let animationStart = document.createElement('a-animation');
        animationStart.setAttribute("attribute","position");
        animationStart.setAttribute("easing", "linear");
        animationStart.setAttribute("from",xyzStart);
        animationStart.setAttribute("to",xyzMid);
        animationStart.setAttribute("dur",500);
        stick.appendChild(animationStart);

        let animationEnd = document.createElement('a-animation');
        animationEnd.setAttribute("attribute","position");
        animationEnd.setAttribute("easing", "linear");
        animationEnd.setAttribute("begin", 500);
        animationEnd.setAttribute("from",xyzMid);
        animationEnd.setAttribute("to",xyzFinal);
        animationEnd.setAttribute("dur",500);
        stick.appendChild(animationEnd);
    },
    incorrectAction : function (ani, act) {
        //find camera and animal values
        let camera = document.querySelector('#cam');
        let camX = camera.getAttribute('position').x;
        let camY = camera.getAttribute('position').y;
        let camZ = camera.getAttribute('position').z;
        let camZEnd = camZ + 12;
        let camStart = camX.toString() + " "+ camY.toString() + " " + camZ.toString();
        let camEnd = camX.toString() + " "+ camY.toString() + " " + camZEnd.toString();

        let animal = document.getElementById(ani);
        let xVal = animal.getAttribute('position').x;
        let yVal = animal.getAttribute('position').y;
        let zVal = animal.getAttribute('position').z;
        let xyzStart = xVal.toString() + " "+ yVal.toString() + " " + zVal.toString();
        let zEnd = zVal + 3;
        let xyzEnd = xVal.toString() + " "+ yVal.toString() + " " + zEnd.toString();

        let animationStart = document.createElement('a-animation');
        animationStart.setAttribute("attribute","position");
        animationStart.setAttribute("from",xyzStart);
        animationStart.setAttribute("to",xyzEnd);
        animationStart.setAttribute("dur",500);

        let animationEnd = document.createElement('a-animation');
        animationEnd.setAttribute("attribute","position");
        animationEnd.setAttribute("begin", 500);
        animationEnd.setAttribute("from",xyzEnd);
        animationEnd.setAttribute("to",xyzStart);
        animationEnd.setAttribute("dur",500);

        let animationCam = document.createElement('a-animation');
        animationCam.setAttribute("attribute","position");
        animationCam.setAttribute("from",camStart);
        animationCam.setAttribute("to",camEnd);
        animationCam.setAttribute("dur",500);
        
        //
        if(camZ - zVal < 5 && camZ - zVal > 0) {  
            //if throwing object, wait for animation to play first 
            if (act == "rock" || act =="stick"){   
                if (act == "rock") {
                    let rockID = ani + "-throw-rock";
                    let rock = document.getElementById(rockID);
            
                    let xRock = rock.getAttribute('position').x;
                    let yRock = rock.getAttribute('position').y;
                    let zRock = rock.getAttribute('position').z;        
                    let xyzStart = xRock.toString() + " "+ yRock.toString() + " " + zRock.toString();
            
                    let animMidX = xRock + 0.5;
                    let animMidY = yRock + 1;
                    let animMidZ = zRock - 1;
                    let xyzMid = animMidX.toString() + " "+ animMidY.toString() + " " + animMidZ.toString();
            
                    let animFinalX = animMidX + 0.5;
                    let animFinalY = animMidY - 1;
                    let animFinalZ = animMidZ - 1;
                    let xyzFinal = animFinalX.toString() + " "+ animFinalY.toString() + " " + animFinalZ.toString();
            
                    let animationStart = document.createElement('a-animation');
                    animationStart.setAttribute("attribute","position");
                    animationStart.setAttribute("easing", "linear");
                    animationStart.setAttribute("from",xyzStart);
                    animationStart.setAttribute("to",xyzMid);
                    animationStart.setAttribute("dur",500);
                    rock.appendChild(animationStart);
            
                    let animationEnd = document.createElement('a-animation');
                    animationEnd.setAttribute("attribute","position");
                    animationEnd.setAttribute("easing", "linear");
                    animationEnd.setAttribute("begin", 500);
                    animationEnd.setAttribute("from",xyzMid);
                    animationEnd.setAttribute("to",xyzFinal);
                    animationEnd.setAttribute("dur",500);
                    rock.appendChild(animationEnd);
                }        
                if (act == "stick") {  
                    let stickID = ani + "-throw-stick";
                    let stick = document.getElementById(stickID);
            
                    let xStick = stick.getAttribute('position').x;
                    let yStick = stick.getAttribute('position').y;
                    let zStick = stick.getAttribute('position').z;        
                    let xyzStart = xStick.toString() + " "+ yStick.toString() + " " + zStick.toString();
            
                    let animMidX = xStick + 0.5;
                    let animMidY = yStick + 1;
                    let animMidZ = zStick - 1;
                    let xyzMid = animMidX.toString() + " "+ animMidY.toString() + " " + animMidZ.toString();
            
                    let animFinalX = animMidX + 0.5;
                    let animFinalY = animMidY - 1;
                    let animFinalZ = animMidZ - 1;
                    let xyzFinal = animFinalX.toString() + " "+ animFinalY.toString() + " " + animFinalZ.toString();
            
                    let animationStart = document.createElement('a-animation');
                    animationStart.setAttribute("attribute","position");
                    animationStart.setAttribute("easing", "linear");
                    animationStart.setAttribute("from",xyzStart);
                    animationStart.setAttribute("to",xyzMid);
                    animationStart.setAttribute("dur",500);
                    stick.appendChild(animationStart);
            
                    let animationEnd = document.createElement('a-animation');
                    animationEnd.setAttribute("attribute","position");
                    animationEnd.setAttribute("easing", "linear");
                    animationEnd.setAttribute("begin", 500);
                    animationEnd.setAttribute("from",xyzMid);
                    animationEnd.setAttribute("to",xyzFinal);
                    animationEnd.setAttribute("dur",500);
                    stick.appendChild(animationEnd);
                }      
                setTimeout(function() {
                    if (animal.id == "snowOwl") {
                        animal.setAttribute("obj-model", {obj: "#snowyOwl_flying_obj"});
                    }
                    animal.appendChild(animationStart);
                    setTimeout(function() {
                        camera.appendChild(animationCam);
                        setTimeout(function() {
                            animal.appendChild(animationEnd);
                            if (animal.id == "snowOwl") {
                                animal.setAttribute("obj-model", {obj: "#snowyOwl_static_obj"});
                            }
                        }, 500);   
                    }, 500); 
                }, 1200);            
            }
            //else, do action right away
            else if (act != "rock" && act != "stick") {       
                setTimeout(function() {
                    if (animal.id == "snowOwl") {
                        animal.setAttribute("obj-model", {obj: "#snowyOwl_flying_obj"});
                    }
                    animal.appendChild(animationStart);
                    setTimeout(function() {
                        camera.appendChild(animationCam);
                        setTimeout(function() {
                            animal.appendChild(animationEnd);
                            if (animal.id == "snowOwl") {
                                animal.setAttribute("obj-model", {obj: "#snowyOwl_static_obj"});
                            }
                        }, 500);            
                    }, 500);            
                }, 500);          
            }
        }
    }
});