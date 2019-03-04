AFRAME.registerComponent('duck-comp', {
    schema: {},
    init : function() {
        const Context_AF = this;
        document.addEventListener('keydown', function(event) {
            if (event.keyCode == 17) {
                //setting x and y when key is pressed to ensure the camera doesn't go back to initial values
                let zVal = Context_AF.el.getAttribute('position').z;
                let xVal = Context_AF.el.getAttribute('position').x;
                console.log("key press");
                Context_AF.el.setAttribute("position", {x: xVal, y: 0.6, z: zVal});
            }
        });
        document.addEventListener('keyup', function(event) {
            if (event.keyCode == 17) {
                //setting x and y when key is released to ensure the camera doesn't go back to initial values
                let zVal = Context_AF.el.getAttribute('position').z;
                let xVal = Context_AF.el.getAttribute('position').x;
                console.log("key released");
                Context_AF.el.setAttribute("position", {x: xVal, y: 1.4, z: zVal});
            }
        });
    }
});