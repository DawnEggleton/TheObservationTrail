AFRAME.registerComponent('result-change-comp', {
    schema: {
        dir: {type: 'string', default: ''}
    },
    init : function() {
        const Context_AF = this;
        let direction = Context_AF.el.getAttribute('result-change-comp').dir;
        let animalsSeen = deciAnimals.length + borealAnimals.length + wetlandAnimals.length;
        console.log(animalsSeen);
        Context_AF.el.addEventListener('click', function(event) {
            if (direction == "right") {
                animNum ++;
                if (animNum == animalsSeen) {
                    animNum = 0;
                }
            }
            else if (direction == "left") {
                animNum--;
                if (animNum == -1) {
                    animNum = animalsSeen - 1;
                }
            }
        });
    }
});