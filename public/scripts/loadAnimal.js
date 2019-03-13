AFRAME.registerComponent('load-animal-comp', {
    schema: {
        biomeType: {type: 'string', default: ''},
        pathDir: {type: 'string', default: ''}
    },
    init : function() {
        const Context_AF = this;        
        let tileX = Context_AF.el.getAttribute('position').x;     
        let tileY = Context_AF.el.getAttribute('position').y;
        let tileZ = Context_AF.el.getAttribute('position').z;
        let biome = Context_AF.el.getAttribute('load-animal-comp').biomeType;
        let path = Context_AF.el.getAttribute('load-animal-comp').pathDir;
        let animalNum = Math.floor(Math.random() * 5) + 1;

        if (biome == "deci") {
            if (animalNum == 1) {
                Context_AF.loadSkunk(tileX, tileY, tileZ);
                Context_AF.loadRock(tileX, tileY, tileZ, "clap", "skunk");
                Context_AF.loadStick(tileX, tileY, tileZ, "clap", "skunk");
                if (path == "path-left") {
                    Context_AF.loadLeftArrow(tileX, tileY, tileZ, "clap", "skunk");
                }
                else if (path == "path-right") {
                    Context_AF.loadRightArrow(tileX, tileY, tileZ, "clap", "skunk");
                }
            }
            if (animalNum == 2) {
                Context_AF.loadFox(tileX, tileY, tileZ);
                Context_AF.loadRock(tileX, tileY, tileZ, "clap", "fox");
                Context_AF.loadStick(tileX, tileY, tileZ, "clap", "fox");
                if (path == "path-left") {
                    Context_AF.loadLeftArrow(tileX, tileY, tileZ, "clap", "fox");
                }
                else if (path == "path-right") {
                    Context_AF.loadRightArrow(tileX, tileY, tileZ, "clap", "fox");
                }
            }
            if (animalNum == 3) {
                Context_AF.loadRacoon(tileX, tileY, tileZ);
                Context_AF.loadRock(tileX, tileY, tileZ, "rock", "racoon");
                Context_AF.loadStick(tileX, tileY, tileZ, "rock", "racoon");
                if (path == "path-left") {
                    Context_AF.loadLeftArrow(tileX, tileY, tileZ, "rock", "racoon");
                }
                else if (path == "path-right") {
                    Context_AF.loadRightArrow(tileX, tileY, tileZ, "rock", "racoon");
                }
            }
            if (animalNum == 4) {
                Context_AF.loadPorcupine(tileX, tileY, tileZ, path);
                if (path == "path-left") {
                    Context_AF.loadLeftArrow(tileX, tileY, tileZ, path, "porcupine");
                    Context_AF.loadRock(tileX, tileY, tileZ, path, "porcupine");
                    Context_AF.loadStick(tileX, tileY, tileZ, path, "porcupine");
                }
                else if (path == "path-right") {
                    Context_AF.loadRightArrow(tileX, tileY, tileZ, path, "porcupine");
                    Context_AF.loadRock(tileX, tileY, tileZ, path, "porcupine");
                    Context_AF.loadStick(tileX, tileY, tileZ, path, "porcupine");
                }
            }
            if (animalNum == 5) {
                Context_AF.loadSnowOwl(tileX, tileY, tileZ);
                Context_AF.loadRock(tileX, tileY, tileZ, "duck", "snowOwl");
                Context_AF.loadStick(tileX, tileY, tileZ, "duck", "snowOwl");
                if (path == "path-left") {
                    Context_AF.loadLeftArrow(tileX, tileY, tileZ, "duck", "snowOwl");
                }
                else if (path == "path-right") {
                    Context_AF.loadRightArrow(tileX, tileY, tileZ, "duck", "snowOwl");
                }
            }
        }
    },
    loadSkunk : function (x, y, z) {
        let scene = document.querySelector("a-scene");

        //create animal
        let animalModel = document.createElement("a-entity");
        animalModel.id = "skunk";
        animalModel.setAttribute("action-obj-comp", {objectType: "clap", correctAction: "clap", animalType: "skunk"});
        animalModel.setAttribute("obj-model", {obj: "#skunk_obj"});
        animalModel.setAttribute("material", {src: "#skunk_mat"});
        animalModel.setAttribute("position", {x: x, y: y, z: z - 1});

        //approach arrow, created with animal for positioning purposes
        let arrow = document.createElement("a-entity");
        arrow.id = "approach-arrow";
        arrow.className = "skunk-action";
        arrow.setAttribute("action-obj-comp", {objectType: "approach", correctAction: "clap", animalType: "skunk"});
        arrow.setAttribute("obj-model", {obj: "#arrow_obj"});
        arrow.setAttribute("material", {src: "#arrow_mat"});
        arrow.setAttribute("position", {x: x, y: 0.6, z: z - 0.5});
        arrow.setAttribute("rotation", {x: 0, y: 90, z: 0});

        //add to scene
        scene.appendChild(animalModel);
        scene.appendChild(arrow);
    },
    loadRacoon : function (x, y, z) {
        let scene = document.querySelector("a-scene");

        //create animal
        let animalModel = document.createElement("a-entity");
        animalModel.id = "racoon";
        animalModel.setAttribute("action-obj-comp", {objectType: "clap", correctAction: "rock", animalType: "racoon"});
        animalModel.setAttribute("obj-model", {obj: "#racoon_obj"});
        animalModel.setAttribute("material", {src: "#racoon_mat"});
        animalModel.setAttribute("position", {x: x, y: y, z: z - 1});

        //approach arrow, created with animal for positioning purposes
        let arrow = document.createElement("a-entity");
        arrow.id = "approach-arrow";
        arrow.className = "racoon-action";
        arrow.setAttribute("action-obj-comp", {objectType: "approach", correctAction: "rock", animalType: "racoon"});
        arrow.setAttribute("obj-model", {obj: "#arrow_obj"});
        arrow.setAttribute("material", {src: "#arrow_mat"});
        arrow.setAttribute("position", {x: x, y: 0.6, z: z - 0.5});
        arrow.setAttribute("rotation", {x: 0, y: 90, z: 0});

        //add to scene
        scene.appendChild(animalModel);
        scene.appendChild(arrow);
    },
    loadFox : function (x, y, z) {
        let scene = document.querySelector("a-scene");

        //create animal
        let animalModel = document.createElement("a-entity");
        animalModel.id = "fox";
        animalModel.setAttribute("action-obj-comp", {objectType: "clap", correctAction: "clap", animalType: "fox"});
        animalModel.setAttribute("obj-model", {obj: "#fox_obj"});
        animalModel.setAttribute("material", {src: "#fox_mat"});
        animalModel.setAttribute("position", {x: x, y: y, z: z - 1});

        //approach arrow, created with animal for positioning purposes
        let arrow = document.createElement("a-entity");
        arrow.id = "approach-arrow";
        arrow.className = "fox-action";
        arrow.setAttribute("action-obj-comp", {objectType: "approach", correctAction: "clap", animalType: "fox"});
        arrow.setAttribute("obj-model", {obj: "#arrow_obj"});
        arrow.setAttribute("material", {src: "#arrow_mat"});
        arrow.setAttribute("position", {x: x, y: 1.0, z: z - 0.5});
        arrow.setAttribute("rotation", {x: 0, y: 90, z: 0});

        //add to scene
        scene.appendChild(animalModel);
        scene.appendChild(arrow);
    },
    loadPorcupine : function (x, y, z, dir) {
        let scene = document.querySelector("a-scene");

        //create animal
        let animalModel = document.createElement("a-entity");
        animalModel.id = "porcupine";
        animalModel.setAttribute("action-obj-comp", {objectType: "clap", correctAction: dir, animalType: "porcupine"});
        animalModel.setAttribute("obj-model", {obj: "#porcupine_obj"});
        animalModel.setAttribute("material", {src: "#porcupine_mat"});
        animalModel.setAttribute("position", {x: x, y: y, z: z - 1});

        //approach arrow, created with animal for positioning purposes
        let arrow = document.createElement("a-entity");
        arrow.id = "approach-arrow";
        arrow.className = "porcupine-action";
        arrow.setAttribute("action-obj-comp", {objectType: "approach", correctAction: dir, animalType: "porcupine"});
        arrow.setAttribute("obj-model", {obj: "#arrow_obj"});
        arrow.setAttribute("material", {src: "#arrow_mat"});
        arrow.setAttribute("position", {x: x, y: 0.6, z: z - 0.5});
        arrow.setAttribute("rotation", {x: 0, y: 90, z: 0});

        //add to scene
        scene.appendChild(animalModel);
        scene.appendChild(arrow);
    },
    loadSnowOwl : function (x, y, z) {
        let scene = document.querySelector("a-scene");

        //create animal
        let animalModel = document.createElement("a-entity");
        animalModel.id = "snowOwl";
        animalModel.setAttribute("action-obj-comp", {objectType: "duck", correctAction: "duck", animalType: "snowOwl"});
        animalModel.setAttribute("obj-model", {obj: "#snowyOwl_static_obj"});
        animalModel.setAttribute("material", {src: "#snowyOwl_mat"});
        animalModel.setAttribute("position", {x: x, y: y + 1.1, z: z - 1});

        //create perch
        let perchModel = document.createElement("a-entity");
        perchModel.id = "perch";
        perchModel.setAttribute("obj-model", {obj: "#fallen2_obj"});
        perchModel.setAttribute("material", {src: "#fallen_mat"});
        perchModel.setAttribute("position", {x: x, y: y, z: z - 1});

        //approach arrow, created with animal for positioning purposes
        let arrow = document.createElement("a-entity");
        arrow.id = "approach-arrow";
        arrow.className = "snowOwl-action";
        arrow.setAttribute("action-obj-comp", {objectType: "approach", correctAction: "duck", animalType: "snowOwl"});
        arrow.setAttribute("obj-model", {obj: "#arrow_obj"});
        arrow.setAttribute("material", {src: "#arrow_mat"});
        arrow.setAttribute("position", {x: x, y: 2, z: z - 0.5});
        arrow.setAttribute("rotation", {x: 0, y: 90, z: 0});

        //add to scene
        scene.appendChild(perchModel);
        scene.appendChild(animalModel);
        scene.appendChild(arrow);
    },
    loadLeftArrow : function (x, y, z, corrAction, animal) {
        let scene = document.querySelector("a-scene");

        //create arrow
        let arrow = document.createElement("a-entity");
        arrow.id = "left-arrow";
        arrow.className = animal + "-action";
        arrow.setAttribute("action-obj-comp", {objectType: "path-left", correctAction: corrAction, animalType: animal});
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
        arrow.className = animal + "-action";
        arrow.setAttribute("action-obj-comp", {objectType: "path-right", correctAction: corrAction, animalType: animal});
        arrow.setAttribute("obj-model", {obj: "#arrow_obj"});
        arrow.setAttribute("material", {src: "#arrow_mat"});
        arrow.setAttribute("rotation", {x: -90, y: 90, z: 0});
        arrow.setAttribute("position", {x: x + 2, y: 0.5, z: z});

        //add to scene
        scene.appendChild(arrow);
    },
    loadRock : function (x, y, z, corrAction, animal) {
        let scene = document.querySelector("a-scene");
        anim1X = x - 2;
        anim1Y = y;
        anim1Z = z + 2;
        anim2X = x - 1;
        anim2Y = 2;
        anim2Z = z + 0.5;
        anim3X = x;
        anim3Y = y;
        anim3Z = z - 1;

        //create rock
        let rock = document.createElement("a-entity");
        rock.id = animal + "-throw-rock";
        rock.className = animal + "-action";
        rock.setAttribute("action-obj-comp", {objectType: "rock", correctAction: corrAction, animalType: animal});
        rock.setAttribute("obj-model", {obj: "#arrow_obj"});
        rock.setAttribute("material", {src: "#arrow_mat"});
        rock.setAttribute("position", {x: x - 2, y: y, z: z + 2});

        //indicator arrow
        let arrow = document.createElement("a-entity");
        arrow.id = "rock-arrow";
        arrow.className = animal + "-action";
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
        stick.id = animal + "-throw-stick";
        stick.className = animal + "-action";
        stick.setAttribute("action-obj-comp", {objectType: "stick", correctAction: corrAction, animalType: animal});
        stick.setAttribute("obj-model", {obj: "#arrow_obj"});
        stick.setAttribute("material", {src: "#arrow_mat"});
        stick.setAttribute("position", {x: x + 2, y: y, z: z + 2});

        //create animations
        let anim1 = document.createElement("a-animation");
        anim1.setAttribute('begin', "animTrigger2");
        anim1.setAttribute('attribute', 'position');
        anim1.setAttribute('from', {x: x + 2, y: y, z: z + 2});
        anim1.setAttribute('to', {x: x + 1, y: y + 2, z: z + 0.5});
        anim1.setAttribute('easing', "linear");
        anim1.setAttribute("dur", 500);
        anim1.setAttribute("fill", "none");
        anim1.setAttribute("repeat", 0);

        let anim2 = document.createElement("a-animation");
        anim2.setAttribute('begin', "click");
        anim2.setAttribute('attribute', 'position');
        anim2.setAttribute('from', {x: x + 1, y: y + 2, z: z + 0.5});
        anim2.setAttribute('to', {x: x, y: y, z: z - 1});
        anim2.setAttribute('easing', "linear");
        anim2.setAttribute("dur", 500);
        anim2.setAttribute("fill", "none");
        anim2.setAttribute("repeat", 0);
        anim2.setAttribute("delay", 500);

        let anim3 = document.createElement("a-animation");
        anim3.setAttribute('begin', "click");
        anim3.setAttribute('attribute', 'position');
        anim3.setAttribute('from', {x: x, y: y, z: z - 1});
        anim3.setAttribute('to', {x: x, y: y, z: z - 1});
        anim3.setAttribute('easing', "linear");
        anim3.setAttribute("dur", 500);
        anim3.setAttribute("fill", "none");
        anim3.setAttribute("repeat", "indefinite");
        anim3.setAttribute("delay", 1000);

        //indicator arrow
        let arrow = document.createElement("a-entity");
        arrow.id = "stick-arrow";
        arrow.className = animal + "-action";
        arrow.setAttribute("obj-model", {obj: "#arrow_obj"});
        arrow.setAttribute("material", {src: "#arrow_mat"});
        arrow.setAttribute("rotation", {x: 0, y: 90, z: 0});
        arrow.setAttribute("position", {x: x + 2, y: 0.5, z: z + 2});

        //add to scene
        scene.appendChild(stick);
        scene.appendChild(arrow);
        stick.appendChild(anim1);
        stick.appendChild(anim2);
        stick.appendChild(anim3);
    }
});