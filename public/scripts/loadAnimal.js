AFRAME.registerComponent('load-animal-comp', {
    schema: {
        biomeType: {type: 'string', default: ''},
        pathDir: {type: 'string', default: ''}
    },
    init : function() {
        const Context_AF = this;        
        let tileX = Context_AF.el.getAttribute('position').x;     
        let tileY = Context_AF.el.getAttribute('position').xy;
        let tileZ = Context_AF.el.getAttribute('position').z;
        let biome = Context_AF.el.getAttribute('load-animal-comp').biomeType;
        let path = Context_AF.el.getAttribute('load-animal-comp').pathDir;
        let animal = Math.floor(Math.random() * 5) + 1;
        console.log(animal);
        console.log(path);

        if (biome == "deci") {
            if (animal == 1) {
                Context_AF.loadSkunk(tileX, tileY, tileZ);
                Context_AF.loadRock(tileX, tileY, tileZ, "clap", "skunk");
                Context_AF.loadStick(tileX, tileY, tileZ, "clap", "skunk");
                if (path == "left-path") {
                    Context_AF.loadLeftArrow(tileX, tileY, tileZ, "clap", "skunk");
                }
                else if (path == "right-path") {
                    Context_AF.loadRightArrow(tileX, tileY, tileZ, "clap", "skunk");
                }
            }
            if (animal == 2) {
                Context_AF.loadFox(tileX, tileY, tileZ);
                Context_AF.loadLeftArrow(tileX, tileY, tileZ, "clap", "fox");
                Context_AF.loadRightArrow(tileX, tileY, tileZ, "clap", "fox");
                Context_AF.loadRock(tileX, tileY, tileZ, "clap", "fox");
                Context_AF.loadStick(tileX, tileY, tileZ, "clap", "fox");
                if (path == "left-path") {
                    Context_AF.loadLeftArrow(tileX, tileY, tileZ, "clap", "fox");
                }
                else if (path == "right-path") {
                    Context_AF.loadRightArrow(tileX, tileY, tileZ, "clap", "fox");
                }
            }
            if (animal == 3) {
                Context_AF.loadRacoon(tileX, tileY, tileZ);
                Context_AF.loadLeftArrow(tileX, tileY, tileZ, "rock", "racoon");
                Context_AF.loadRightArrow(tileX, tileY, tileZ, "rock", "racoon");
                Context_AF.loadRock(tileX, tileY, tileZ, "rock", "racoon");
                Context_AF.loadStick(tileX, tileY, tileZ, "rock", "racoon");
                if (path == "left-path") {
                    Context_AF.loadLeftArrow(tileX, tileY, tileZ, "rock", "racoon");
                }
                else if (path == "right-path") {
                    Context_AF.loadRightArrow(tileX, tileY, tileZ, "rock", "racoon");
                }
            }
            if (animal == 4) {
                Context_AF.loadPorcupine(tileX, tileY, tileZ, path);
                if (path == "left-path") {
                    Context_AF.loadLeftArrow(tileX, tileY, tileZ, path, "porcupine");
                    Context_AF.loadRock(tileX, tileY, tileZ, path, "porcupine");
                    Context_AF.loadStick(tileX, tileY, tileZ, path, "porcupine");
                }
                else if (path == "right-path") {
                    Context_AF.loadLeftArrow(tileX, tileY, tileZ, path, "porcupine");
                    Context_AF.loadRock(tileX, tileY, tileZ, path, "porcupine");
                    Context_AF.loadStick(tileX, tileY, tileZ, path, "porcupine");
                }
            }
            if (animal == 5) {
                Context_AF.loadSnowOwl(tileX, tileY, tileZ);
                Context_AF.loadLeftArrow(tileX, tileY, tileZ, "duck", "snowOwl");
                Context_AF.loadRightArrow(tileX, tileY, tileZ, "duck", "snowOwl");
                Context_AF.loadRock(tileX, tileY, tileZ, "duck", "snowOwl");
                Context_AF.loadStick(tileX, tileY, tileZ, "duck", "snowOwl");
                if (path == "left-path") {
                    Context_AF.loadLeftArrow(tileX, tileY, tileZ, "duck", "snowOwl");
                }
                else if (path == "right-path") {
                    Context_AF.loadRightArrow(tileX, tileY, tileZ, "duck", "snowOwl");
                }
            }
        }
    },
    loadSkunk : function (x, y, z) {
        let scene = document.querySelector("a-scene");

        //create animal
        let animal = document.createElement("a-entity");
        animal.id = "skunk";
        animal.setAttribute("action-obj-comp", {objectType: "clap", correctAction: "clap", animalType: "skunk"});
        animal.setAttribute("obj-model", {obj: "#skunk_obj"});
        animal.setAttribute("material", {src: "#skunk_mat"});
        animal.setAttribute("position", {x: x, y: y, z: z - 1});

        //approach arrow, created with animal for positioning purposes
        let arrow = document.createElement("a-entity");
        arrow.id = "approach-arrow";
        arrow.setAttribute("action-obj-comp", {objectType: "approach", correctAction: "clap", animalType: "skunk"});
        arrow.setAttribute("obj-model", {obj: "#arrow_obj"});
        arrow.setAttribute("material", {src: "#arrow_mat"});
        arrow.setAttribute("position", {x: x, y: 0.6, z: z - 0.5});
        arrow.setAttribute("rotation", {x: 0, y: 90, z: 0});

        //add to scene
        scene.appendChild(animal);
        scene.appendChild(arrow);
    },
    loadRacoon : function (x, y, z) {
        let scene = document.querySelector("a-scene");

        //create animal
        let animal = document.createElement("a-entity");
        animal.id = "racoon";
        animal.setAttribute("action-obj-comp", {objectType: "clap", correctAction: "rock", animalType: "racoon"});
        animal.setAttribute("obj-model", {obj: "#skunk_obj"});
        animal.setAttribute("material", {src: "#skunk_mat"});
        animal.setAttribute("position", {x: x, y: y, z: z - 1});

        //approach arrow, created with animal for positioning purposes
        let arrow = document.createElement("a-entity");
        arrow.id = "approach-arrow";
        arrow.setAttribute("action-obj-comp", {objectType: "approach", correctAction: "rock", animalType: "racoon"});
        arrow.setAttribute("obj-model", {obj: "#arrow_obj"});
        arrow.setAttribute("material", {src: "#arrow_mat"});
        arrow.setAttribute("position", {x: x, y: 0.6, z: z - 0.5});
        arrow.setAttribute("rotation", {x: 0, y: 90, z: 0});

        //add to scene
        scene.appendChild(animal);
        scene.appendChild(arrow);
    },
    loadFox : function (x, y, z) {
        let scene = document.querySelector("a-scene");

        //create animal
        let animal = document.createElement("a-entity");
        animal.id = "fox";
        animal.setAttribute("action-obj-comp", {objectType: "clap", correctAction: "clap", animalType: "fox"});
        animal.setAttribute("obj-model", {obj: "#skunk_obj"});
        animal.setAttribute("material", {src: "#skunk_mat"});
        animal.setAttribute("position", {x: x, y: y, z: z - 1});

        //approach arrow, created with animal for positioning purposes
        let arrow = document.createElement("a-entity");
        arrow.id = "approach-arrow";
        arrow.setAttribute("action-obj-comp", {objectType: "approach", correctAction: "clap", animalType: "fox"});
        arrow.setAttribute("obj-model", {obj: "#arrow_obj"});
        arrow.setAttribute("material", {src: "#arrow_mat"});
        arrow.setAttribute("position", {x: x, y: 0.6, z: z - 0.5});
        arrow.setAttribute("rotation", {x: 0, y: 90, z: 0});

        //add to scene
        scene.appendChild(animal);
        scene.appendChild(arrow);
    },
    loadPorcupine : function (x, y, z, dir) {
        let scene = document.querySelector("a-scene");

        //create animal
        let animal = document.createElement("a-entity");
        animal.id = "porcupine";
        animal.setAttribute("action-obj-comp", {objectType: "clap", correctAction: dir, animalType: "porcupine"});
        animal.setAttribute("obj-model", {obj: "#skunk_obj"});
        animal.setAttribute("material", {src: "#skunk_mat"});
        animal.setAttribute("position", {x: x, y: y, z: z - 1});

        //approach arrow, created with animal for positioning purposes
        let arrow = document.createElement("a-entity");
        arrow.id = "approach-arrow";
        arrow.setAttribute("action-obj-comp", {objectType: "approach", correctAction: dir, animalType: "porcupine"});
        arrow.setAttribute("obj-model", {obj: "#arrow_obj"});
        arrow.setAttribute("material", {src: "#arrow_mat"});
        arrow.setAttribute("position", {x: x, y: 0.6, z: z - 0.5});
        arrow.setAttribute("rotation", {x: 0, y: 90, z: 0});

        //add to scene
        scene.appendChild(animal);
        scene.appendChild(arrow);
    },
    loadSnowOwl : function (x, y, z) {
        let scene = document.querySelector("a-scene");

        //create animal
        let animal = document.createElement("a-entity");
        animal.id = "snowOwl";
        animal.setAttribute("action-obj-comp", {objectType: "duck", correctAction: "duck", animalType: "snowOwl"});
        animal.setAttribute("obj-model", {obj: "#skunk_obj"});
        animal.setAttribute("material", {src: "#skunk_mat"});
        animal.setAttribute("position", {x: x, y: y, z: z - 1});

        //approach arrow, created with animal for positioning purposes
        let arrow = document.createElement("a-entity");
        arrow.id = "approach-arrow";
        arrow.setAttribute("action-obj-comp", {objectType: "approach", correctAction: "duck", animalType: "snowOwl"});
        arrow.setAttribute("obj-model", {obj: "#arrow_obj"});
        arrow.setAttribute("material", {src: "#arrow_mat"});
        arrow.setAttribute("position", {x: x, y: 0.6, z: z - 0.5});
        arrow.setAttribute("rotation", {x: 0, y: 90, z: 0});

        //add to scene
        scene.appendChild(animal);
        scene.appendChild(arrow);
    },
    loadLeftArrow : function (x, y, z, corrAction, animal) {
        let scene = document.querySelector("a-scene");

        //create arrow
        let arrow = document.createElement("a-entity");
        arrow.id = "left-arrow";
        arrow.setAttribute("action-obj-comp", {objectType: "left-path", correctAction: corrAction, animalType: animal});
        arrow.setAttribute("obj-model", {obj: "#arrow_obj"});
        arrow.setAttribute("material", {src: "#arrow_mat"});
        arrow.setAttribute("rotation", {x: 90, y: 90, z: 0});
        arrow.setAttribute("position", {x: x - 2, y: 0.5, z: z});

        //add to scene
        scene.appendChild(arrow);
    },
    loadRightArrow : function (x, y, z, corrAction, animal) {
        let scene = document.querySelector("a-scene");

        //create arrow
        let arrow = document.createElement("a-entity");
        arrow.id = "right-arrow";
        arrow.setAttribute("action-obj-comp", {objectType: "right-path", correctAction: corrAction, animalType: animal});
        arrow.setAttribute("obj-model", {obj: "#arrow_obj"});
        arrow.setAttribute("material", {src: "#arrow_mat"});
        arrow.setAttribute("rotation", {x: -90, y: 90, z: 0});
        arrow.setAttribute("position", {x: x + 2, y: 0.5, z: z});

        //add to scene
        scene.appendChild(arrow);
    },
    loadRock : function (x, y, z, corrAction, animal) {
        let scene = document.querySelector("a-scene");

        //create rock
        let rock = document.createElement("a-entity");
        rock.id = "throw-rock";
        rock.setAttribute("action-obj-comp", {objectType: "rock", correctAction: corrAction, animalType: animal});
        rock.setAttribute("obj-model", {obj: "#arrow_obj"});
        rock.setAttribute("material", {src: "#arrow_mat"});
        rock.setAttribute("position", {x: x - 2, y: y, z: z + 2});

        //indicator arrow
        let arrow = document.createElement("a-entity");
        arrow.id = "rock-arrow";
        arrow.setAttribute("obj-model", {obj: "#arrow_obj"});
        arrow.setAttribute("material", {src: "#arrow_mat"});
        arrow.setAttribute("rotation", {x: 0, y: 90, z: 0});
        arrow.setAttribute("position", {x: x - 2, y: 0.5, z: z + 2});

        //add to scene
        scene.appendChild(rock);
        scene.appendChild(arrow);
    },
    loadStick : function (x, y, z, corrAction, animal) {
        let scene = document.querySelector("a-scene");

        //create stick
        let stick = document.createElement("a-entity");
        stick.id = "throw-rock";
        stick.setAttribute("action-obj-comp", {objectType: "stick", correctAction: corrAction, animalType: animal});
        stick.setAttribute("obj-model", {obj: "#arrow_obj"});
        stick.setAttribute("material", {src: "#arrow_mat"});
        stick.setAttribute("position", {x: x + 2, y: y, z: z + 2});

        //indicator arrow
        let arrow = document.createElement("a-entity");
        arrow.id = "stick-arrow";
        arrow.setAttribute("obj-model", {obj: "#arrow_obj"});
        arrow.setAttribute("material", {src: "#arrow_mat"});
        arrow.setAttribute("rotation", {x: 0, y: 90, z: 0});
        arrow.setAttribute("position", {x: x + 2, y: 0.5, z: z + 2});

        //add to scene
        scene.appendChild(stick);
        scene.appendChild(arrow);
    }
});