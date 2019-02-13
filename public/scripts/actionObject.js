AFRAME.registerComponent('action-obj-comp', {
    schema: {
        objectType: {type: 'string', default: ''},
        correctAction: {type: 'string', default: ''}
    },
    init : function() {
        const Context_AF = this;
        let type = Context_AF.el.getAttribute('action-obj-comp').objectType;
        let action = Context_AF.el.getAttribute('action-obj-comp').correctAction;
        
        if (type == "rock" && action == "rock") {
            Context_AF.el.addEventListener('click', function(event) {
                Context_AF.throwRock();
            });
        }
        else if (type == "path" && action == "path") {
            Context_AF.el.addEventListener('click', function(event) {
                Context_AF.changePath();
            });
        }
        else if (type == "approach" && action == "approach") {
            Context_AF.el.addEventListener('click', function(event) {
                Context_AF.approachAnimal();
            });
        }
        else if (type == "stick" && action == "stick") {
            Context_AF.el.addEventListener('click', function(event) {
                Context_AF.throwStick();
            });
        }
        else if (type != action) {
            Context_AF.el.addEventListener('click', function(event) {
                Context_AF.incorrectAction();
            });
        }
    },
    throwRock : function () {
        console.log('throw rock');
    },
    changePath : function () {
        console.log('change path');
    },
    approachAnimal : function () {
        console.log('approach animal');
    },
    throwStick : function () {
        console.log('throw strick');
    },
    incorrectAction : function () {
        console.log('incorrect action!');
    }
});