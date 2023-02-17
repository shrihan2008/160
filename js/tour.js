AFRAME.registerComponent("tour", {
    schema: {
      state: { type: "string", default: "places-list" },
      selectedCard: { type: "string", default: "#card1" },
      zoomAspectRatio: { type: "number", default: 1 }
    },
    init: function() {
      this.placesContainer = this.el;
      this.cameraEl = document.querySelector("#camera");
      this.createCards();
    },
    
    tick: function() {
      const { state } = this.el.getAttribute("tour");
  
      if (state === "view") {
        this.hideEl([this.placesContainer]);
        this.showView();
      }
    },
    hideEl: function(elList) {
      elList.map(el => {
        el.setAttribute("visible", false);
      });
    },
    showView: function() {
      const { selectedCard } = this.data;
  
      //Set the 360 degree image to the sky element.
      const skyEl = document.querySelector("#main-container");
  
      skyEl.setAttribute("material", {
        src: `./assets/360_images/${selectedCard}/place_0.jpg`,
        color: "#fff"
      });
    },
    createCards: function() {
      
     const details={
      gate:{
        position:{x:20,y:-4.5,z:-5.5},
        rotation:{x:0,y:-90,z:0},
        src:"./assets/gate/gate.jpeg",
        title:"Gate",
        id:"gate"
      },

      garden:{
        position:{x:4.6,y:-5.5,z:25},
        rotation:{x:180,y:0,z:0},
        src:"./assets/garden/garden.jpg",
        title:"Garden",
        id:"garden"
      },

      house:{
        position:{x:-9,y:34,z:-100},
        rotation:{x:0,y:0,z:0},
        src:"./assets/house/house.jpeg",
        title:"House",
        id:"house"
      },
     }
      
     
     for(var key in details){
      const item=details[key]
      const thumbnail=this.createThumbNail(item)
      const title=this.createTitleEl(item)
      thumbnail.appendChild(item)
      this.placesContainer.appendChild(thumbnail)

     }
    },
  
    createThumbNail: function(item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "circle",
        radius: 9
      });
      entityEl.setAttribute("material", { src: item.url });
      entityEl.setAttribute("cursor-listener", {});
      return entityEl;
    },
    createTitleEl: function(position, item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("text", {
        font: "exo2bold",
        align: "center",
        width: 60,
        color: "#e65100",
        value: item.title
      });
      const elPosition = position;
      elPosition.y = -20;
      entityEl.setAttribute("position", elPosition);
      entityEl.setAttribute("visible", true);
      return entityEl;
    }, 
    
  });
  