AFRAME.registerComponent('taula-mapa-event-listener', {
    init: function() {
        this.el.addEventListener("click", function(e) {
            console.log(document.querySelector('#pantalla'));
            document.querySelector('#pantalla').emit('encen',{'continent':e.target.id});
        });
    }
});