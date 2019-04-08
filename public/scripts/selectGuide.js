AFRAME.registerComponent('select-guide-comp', {
    schema: {},
    init : function() {
        const Context_AF = this;
        Context_AF.el.addEventListener('click', function(event) {
            Context_AF.selectGuide();
        });
    },
    selectGuide : function() {
        window.location.href = "../guidebook.html";
    }
});