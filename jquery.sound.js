/**
    * @author SKONIKS <vk.com/skoniks>
    * Copyright (c) 2018 SKONIKS - released under MIT License
    * Usage: var sound = $.sound(url, volume [0.0->1.0], autoplay [true/false], loop [true/false], time [N sec]);
    * Example: $.sound('http://example.org/sound', 1, 1);
    * Commands for certain sound object:
    * sound.play() - Play sound (if paused or autoplay off)
    * sound.replay() - Replay sound
    * sound pause() - Pause sound
    * sound.stop() - Stop sound (delete element)
    * sound.time(10) - Changes timestamp (in sec)
    * sound.volume(0.5) - Changes volime [0.0->1.0]
    * Commands for all sounds on page:
    * $.sound_all.play() - Play sound (if paused or autoplay off)
    * $.sound_all.replay() - Replay sound
    * $.sound_all pause() - Pause sound
    * $.sound_all.stop() - Stop sound (delete element)
    * $.sound_all.time(10) - Changes timestamp (in sec)
    * $.sound_all.volume(0.5) - Changes volime [0.0->1.0]
**/

(function ($) {
    'use strict';
    class Sound {
        constructor(source, volume, autoplay, loop, time){
            if (source !== undefined){
                this.id = Math.random().toString(36).slice(2);
                this.el = $(`<audio id="${this.id}" class="jquery-sound" src="${source}"></audio>`).appendTo('body').prop('autoplay', !!autoplay).prop('loop', !!loop).on("ended", ()=>this.stop());
                this.el[0].volume = isNaN(volume) ? 1 : Math.max(Math.min(parseFloat(volume), 1), 0), this.el[0].currentTime = isNaN(time) ? 0 : parseFloat(time);
                $.sound_all.list[this.id] = this;
            } else {
                this.el = false;
            }
        }
        play(){
            !this.el || this.el[0].play();
        }
        replay(){
            !this.el || this.time(0), this.play();
        }
        pause(){
            !this.el || this.el[0].pause();
        }
        stop(){
            !this.el || delete $.sound_all.list[this.id], this.el.remove(), this.el = false;
        }
        time(time){
            !this.el || isNaN(time) || 1, this.el[0].currentTime = parseFloat(time);
        }
        volume(volume){
            !this.el || isNaN(volume) || 1, this.el[0].volume = Math.max(Math.min(parseFloat(volume), 1), 0)
        }
    }
    $.extend({
        sound: (source, volume, autoplay, loop, time)=>{
            return new Sound(source, volume, autoplay, loop, time);
        },
        sound_all: {
            list: {},
            play: function(){
                for(var i in this.list) this.list[i].play();
            },
            replay: function(){
                for(var i in this.list) this.list[i].replay();
            },
            pause: function(){
                for(var i in this.list) this.list[i].pause();
            },
            stop: function(){
                for(var i in this.list) this.list[i].stop();
            },
            time: function(time){
                for(var i in this.list) this.list[i].time(time);
            },
            volume: function(volume){
                for(var i in this.list) this.list[i].volume(volume);
            }
        }
    });
})(jQuery);
