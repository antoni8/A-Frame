AFRAME.registerComponent('taula-mapa', {
    schema: {

    },
    init:function() {

        var el = this.el;

        let nordamerica = document.createElement("a-circle");
        nordamerica.setAttribute('id', 1);
        nordamerica.setAttribute('position', {
            x: -1.224,
            y: 0.910,
            z: -0.496
        });
        nordamerica.setAttribute('rotation', {
            x: -77.5,
            y: 0,
            z: -19.58
        });
        nordamerica.setAttribute('scale', {
            x: 0.685,
            y: 0.355,
            z: 1
        })
        nordamerica.setAttribute('material', 'opacity', '0');
        nordamerica.setAttribute('taula-mapa-event-listener', null);
        el.appendChild(nordamerica);

        let sudamerica = document.createElement("a-circle");
        sudamerica.setAttribute('id', 2);
        sudamerica.setAttribute('position', {
            x: -0.684,
            y: 0.759,
            z: 0.219
        });
        sudamerica.setAttribute('rotation', {
            x: -77.5,
            y: -8.141,
            z: 0
        });
        sudamerica.setAttribute('scale', {
            x: 0.303,
            y: 0.374,
            z: 1
        })
        sudamerica.setAttribute('material', 'opacity', '0');
        sudamerica.setAttribute('taula-mapa-event-listener', null);
        el.appendChild(sudamerica);
        
        let europa = document.createElement("a-circle");
        europa.setAttribute('id', 0);
        europa.setAttribute('position', {
            x: 0.166,
            y: 0.920,
            z: -0.590
        });
        europa.setAttribute('rotation', {
            x: -76.874,
            y: 2.692,
            z: -70.909
        });
        europa.setAttribute('scale', {
            x: 0.172,
            y: 0.374,
            z: 1
        })
        europa.setAttribute('material', 'opacity', '0');
        europa.setAttribute('taula-mapa-event-listener', null);
        el.appendChild(europa);

        let africa = document.createElement("a-circle");
        africa.setAttribute('id', 3);
        africa.setAttribute('position', {
            x: 0.189,
            y: 0.792,
            z: 0.005
        });
        africa.setAttribute('rotation', {
            x: -76.918,
            y: -4.212,
            z: 42.365
        });
        africa.setAttribute('scale', {
            x: 0.323,
            y: 0.455,
            z: 1
        })
        africa.setAttribute('material', 'opacity', '0');
        africa.setAttribute('taula-mapa-event-listener', null);
        el.appendChild(africa);

        let asia = document.createElement("a-circle");
        asia.setAttribute('id', 4);
        asia.setAttribute('position', {
            x: 1.194,
            y: 0.892,
            z: -0.476
        });
        asia.setAttribute('rotation', {
            x: -77.250,
            y: 0.295,
            z: -71.505
        });
        asia.setAttribute('scale', {
            x: 0.504,
            y: 0.817,
            z: 1
        })
        asia.setAttribute('material', 'opacity', '0');
        asia.setAttribute('taula-mapa-event-listener', null);
        el.appendChild(asia);

        let australia = document.createElement("a-circle");
        australia.setAttribute('id', 5);
        australia.setAttribute('position', {
            x: 1.591,
            y: 0.726,
            z: 0.297
        });
        australia.setAttribute('rotation', {
            x: -79.110,
            y: 6.895,
            z: -32.239
        });
        australia.setAttribute('scale', {
            x: 0.458,
            y: 0.247,
            z: 1
        })
        australia.setAttribute('material', 'opacity', '0');
        australia.setAttribute('taula-mapa-event-listener', null);
        el.appendChild(australia);

        let texte = document.createElement("a-entity");
        texte.setAttribute("text", "value", "Tria un continent");
        texte.setAttribute("text", "color", "Black");
        texte.setAttribute("text", "align", "center");
        texte.setAttribute("position", {
            x:0,
            y:1.2,
            z:-1
        });
        texte.setAttribute("scale", {
            x:2,
            y:2,
            z:2
        });
        el.appendChild(texte);
    },

    update : function() {
        // console.log(nordamerica);
    }

})