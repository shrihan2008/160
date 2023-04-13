AFRAME.registerComponent('cursor-listener',{

    schema:{
        selected_item_id:{default:"",type:"string"}
    },


    init:function(){
        this.handleMouseEnterEvents();
        this.handleMouseLeaveEvents();
        this.handleClickEvents()
    },

    handlePlacesListState:function(){
        const id=this.el.getAttribute("id");
        const places_id=["taj_mahal","budapest","eiffel_tower","new_york_city"];

        if(places_id.includes(id)){
            const placesContainer=document.querySelector("#places-container");
            placesContainer.setAttribute("cursor-listener",{
                selected_item_id:id,
            });
            this.el.setAttribute("material",{
                color:"red",
                opacity:1
            })

        }
    },

    handleMouseEnterEvents:function(){
        this.el.addEventListener("mouseenter",()=>{
            this.handlePlacesListState()
        })
    },

    handleMouseLeaveEvents:function(){
        this.el.addEventListener("mouseleave",()=>{
            const {selected_item_id}=this.data;
            if(selected_item_id){
                const el=document.querySelector(`#${selected_item_id}`);
                const id=el.getAttribute("id")
                if(id==selected_item_id){
                    el.setAttribute("material",{color:"yellow",opacity:1})
                }
            }
        })
    },

    handleClickEvents:function(){
        this.el.addEventListener("click",evt=>{
            const placesContainer=document.querySelector("#places_container");
            const {state} = placesContainer.setAttribute("tour")

            if(state==="places_list"){
                const id=this.el.getAttribute("id");
                const places_id=["taj_mahal","budapest","eiffel_tower","new_york_city"];
                if(places_id.includes(id)){
                    placesContainer.setAttribute("tour",{
                        state:"view",
                        selected_card:id
                    })

                }

            }
        })
    }
})