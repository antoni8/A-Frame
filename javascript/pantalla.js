AFRAME.registerComponent('pantalla', {
    schema: {
        informacio: {type: 'asset'},
        continent:{type:'number'}
    },

    init: function () {
        this.loader = new THREE.FileLoader();
        var el = this.el;
        this.el.addEventListener("encen", function(e) {
            console.log(e.detail.continent);
            document.querySelector('#pantalla').removeAttribute("pantalla");
            document.querySelector('#pantalla').setAttribute("pantalla", 'informacio:json/world.json;continent:'+ e.detail.continent);

        });
    },

    update: function (oldData) {

        const data = this.data;
        if (AFRAME.utils.deepEqual(oldData, data)) {
            return;
        }
        if (data.informacio && data.informacio !== oldData.informacio) {
            this.loader.load(data.informacio, this.onDataLoaded.bind(this));
        }
    },

    onDataLoaded: function (file) {

        let continents = JSON.parse(file);
        let continentNum = this.data.continent;
        let continent = continents[continentNum];
        var el = this.el;

        while(el.firstElementChild) {
            el.firstElementChild.remove();
        }
        let i=0;

        for (let pais of continent.paisos) {
            let llista = document.createElement('a-entity');
            llista.setAttribute("geometry", "primitive", "plane");
            llista.setAttribute("geometry","width", el.getAttribute("geometry").width-.5);
            llista.setAttribute("geometry","height", el.getAttribute("geometry").height/continent.paisos.length);
            llista.setAttribute("position", {
                x:0,
                y:i*-el.getAttribute("geometry").height/continent.paisos.length+2,
                z:0.1
            })
            llista.setAttribute("width", 10);
            llista.setAttribute("height", el.getAttribute("geometry").height/continent.paisos.length);
            el.appendChild(llista);

            let bandera = document.createElement('a-entity');
            bandera.setAttribute("geometry", "primitive", "plane");
            bandera.setAttribute("id", pais.nom+"-bandera");
            bandera.setAttribute("material","src", pais.jpg);
            bandera.setAttribute("geometry","height", el.getAttribute("geometry").height/continent.paisos.length);
            bandera.setAttribute("geometry","width", 2*el.getAttribute("geometry").height/continent.paisos.length);
            bandera.setAttribute("position", {
                x:-2.5,
                y:0,
                z:0.10
            });
            llista.appendChild(bandera);

            let nomPais = document.createElement('a-text');
            nomPais.setAttribute("id", pais.nom+"-text");
            nomPais.setAttribute("font", "fonts/Retro_Gaming-msdf/Retro_Gaming-msdf.json");
            nomPais.setAttribute("font-image", "fonts/Retro_Gaming-msdf/RetroGaming.png");
            nomPais.setAttribute("negate", false);
            nomPais.setAttribute("value", pais.nom);
            nomPais.setAttribute("position", {
                x:0,
                y:0,
                z:0.1
            })
            llista.appendChild(nomPais);
            i++;
        };
    },
});