AFRAME.registerComponent('result-change-comp', {
    schema: {
        dir: {type: 'string', default: ''}
    },
    init : function() {
        const Context_AF = this;
        let direction = Context_AF.el.getAttribute('result-change-comp').dir;
        Context_AF.el.addEventListener('click', function(event) {
            if (direction == "right") {
                if (animNum < 7) {
                    animNum ++;
                }
                else {
                    animNum = 0;
                }
            }
            else if (direction == "left") {
                if (animNum > 0) {
                    animNum --;
                }
                else {
                    animNum = 7;
                }
            }
        });
    }
});