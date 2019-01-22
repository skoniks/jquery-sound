# jquery-sound
Jquery sound player based on the HTML5 Web Audio API

 Usage:
```js
var sound = $.sound(url, volume /*[0.0->1.0]*/, autoplay /*[true/false]*/, loop /*[true/false]*/, time /*[N sec]*/);
$.sound('http://example.org/sound', 1, 1);
// Commands for certain sound object:
sound.play() // Play sound (if paused or autoplay off)
sound.replay() // Replay sound
sound pause() // Pause sound
sound.stop() // Stop sound (delete element)
sound.time(10) // Changes timestamp (in sec)
sound.volume(0.5) // Changes volime [0.0->1.0]
// Commands for all sounds on page:
$.sound_all.play() // Play sound (if paused or autoplay off)
$.sound_all.replay() // Replay sound
$.sound_all pause() // Pause sound
$.sound_all.stop() // Stop sound (delete element)
$.sound_all.time(10) // Changes timestamp (in sec)
$.sound_all.volume(0.5) // Changes volime [0.0->1.0]

```