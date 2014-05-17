//-------------------------------------------------- //
/*
Input.js - 
Creates an object that holds the current state of input devices.
Hooks up event handlers for input.
*/
//---------------------------------------------------//
(function (window) {
    "use strict";
    var Input = function () {
        this.keys_down = { SPACEBAR: false, RIGHTARROW: false, LEFTARROW: false, MOUSEDOWN: false, SNOWBALLBTN: false };
        this.buttonstates = { LEFT_BUTTON: false, RIGHT_BUTTON: false, SNOWBALL_BUTTON: false };
        this.accelerometer = { x: 0, y: 0, z: 0 };

        this.init = function () {
            window.addEventListener('keydown', this.keydown.bind(this), false);
            window.addEventListener('keyup', this.keyup.bind(this), false);
        };

        this.update = function () {
            if (typeof(accelerometer) !== 'undefined' && accelerometer !== null) {
                var reading = accelerometer.getCurrentReading();
                var accelX = reading.accelerationX;
                var accelY = reading.accelerationY;
                var accelZ = reading.accelerationZ;

                this.accelerometer.y = accelY;
                this.accelerometer.z = accelZ;
                this.accelerometer.x = Math.min(1, (accelX + Math.abs(accelZ * 0.3))); //takes tilt of Z axis into account to adjust X value
            }

            this.keys_down = { SPACEBAR: false, RIGHTARROW: false, LEFTARROW: false, MOUSEDOWN: false, SNOWBALLBTN: false };
        };

        this.draw = function () {
        };

        this.keydown = function (event) {
            if (event.keyCode === 32) {
                //spacebar
                this.keys_down.SPACEBAR = true;
            }
            if (event.keyCode === 39) {
                //right arrow pressed
                this.keys_down.RIGHTARROW = true;
            }
            if (event.keyCode === 37) {
                //left arrow pressed
                this.keys_down.LEFTARROW = true;
            }
        };

        this.keyup = function (event) {
            if (event.keyCode === 32) {
                //spacebar
                this.keys_down.SPACEBAR = false;
            }
            if (event.keyCode === 39) {
                //right arrow pressed
                this.keys_down.RIGHTARROW = false;
            }
            if (event.keyCode === 37) {
                //left arrow pressed
                this.keys_down.LEFTARROW = false;
            }
        },

        this.checkinput = function (key) {
            //API for other game objects to call to check input
            if (this.keys_down[key])
            { return true; }
            else if (this.buttonstates[key]) {
                return true;
            }
            return false;
        };

        this.init();
    };

    //add class to game namespace
    game.Input = Input;
})(window);

