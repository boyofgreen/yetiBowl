//-------------------------------------------------- //
/*
Hikermanager.js - 
Handles the hikers on screen.  This includes spawning hiker entities at a set spawn rate from the internal data.
*/
//---------------------------------------------------//

(function (window) {
    "use strict";
    var HikerManager = function () {

        this.init = function () {
            this.spawnrate = 80; //Update Ticks(30/sec)
            this.spawnlast = 0;
            this.spawned = 0;
        };

        this.update = function () {
            this.spawnrate--;
            if (this.spawnrate <= 0) {
                this.spawned++;
               
                game.system.spawnentity('Hiker');
                this.spawnrate = 80 - this.spawned;
                this.spawnrate = Math.max(this.spawnrate, 40);
            }
        };

        this.init();
    };
   
    game.HikerManager = HikerManager; //Assign Object to Game Namespace

})(window);

