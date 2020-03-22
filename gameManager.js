var GameManager={
    setGameStart: function(house){
        // this.setTheme(house);
        this.setPlayer();
        this.setPreFight();
    },

    setPlayer: function(id){
        //from database
        player = new Player(id, name, 50, 100, 0, house)

    },

    // setTheme: function(house){
    //     switch(house){
    //         case "Gryffindor":
    //         //set theme
    //             break;
            
    //         case "Ravenclaw":
    //             break;
            
    //         case "Hufflepuff":
    //             break;
                
    //         case "Slytherin":
    //             break;   
            
    //         default:
    //             ;    

    //     }
    // }, 

    setPreFight: function (){

    }

}