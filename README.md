# jquery-sound
Jquery sound player based on the HTML5 Web Audio API

 Usage:
```js
var sound = $.sound.start('http://example.org/sound');
$.sound.stop(sound); //Stop`s certain sound
$.sound.stop(); //Stop`s all playing sounds
$.sound.pause(sound); //Pause certain sound
$.sound.pause(); //Pause all playing sounds
$.sound.play(sound); //Play paused sound
$.sound.play(); //Play all paused  sounds
$.sound.volume(); //Get`s sounds volume
$.sound.volume([0 - 1.0]); //Changes sounds volume

```