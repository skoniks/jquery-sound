/**
    * @author SKONIKS <vk.com/skoniks>
    * Copyright (c) 2018 SKONIKS - released under MIT License
    * Usage: var sound = $.sound.start('http://example.org/sound');
    * $.sound.stop(sound); - Stop`s certain sound
    * $.sound.stop(); - Stop`s all playing sounds
    * $.sound.pause(sound); - Pause certain sound
    * $.sound.pause(); - Pause all playing sounds
    * $.sound.play(sound); - Play paused sound
    * $.sound.play(); - Play all paused  sounds
    * $.sound.volume(); - Get`s sounds volume
    * $.sound.volume([0 - 1.0]); - Changes sounds volume
    **/

(function ($) {
    'use strict';
    $.extend({
        sound: {
            _volume: 1,
            volume: function(volume) {
                if (volume !== undefined){
                    $.sound._volume = Math.max(Math.min(parseFloat(volume), 1), 0);
                    if ($(".jquery-sound").length) $.each($(".jquery-sound"), function (i, e) {
                        e.volume = $.sound._volume;
                    });
                }
                return $.sound._volume;
            },
            start: function (source) {
                if (source === undefined) return false;
                var id = new Date().getTime().toString() + Math.ceil(Math.random() * 1000).toString();
                var $audio = $(
                    '<audio id="player_' + id + '" class="jquery-sound" autoplay="autoplay" style="display:none;">' +
                    '<source src="' + arguments[0] + '" />' +
                    '<embed src="' + arguments[0] + '" hidden="true" autostart="true" loop="false"/>' +
                    '</audio>'
                ).appendTo('body');
                $audio[0].volume = $.sound._volume;
                $audio.on("ended", function() {
                    $audio.remove();
                });
                return $audio;
            },
            stop: function (sound) {
                if (sound === undefined) {
                    $(".jquery-sound").remove();
                } else {
                    sound.remove();
                }
            },
            pause: function (sound) {
                if (sound === undefined) {
                    if ($(".jquery-sound").length) $.each($(".jquery-sound"), function (i, e) {
                        e.pause();
                    });
                } else {
                    sound[0].pause();
                }
            },
            play: function (sound) {
                if (sound === undefined) {
                    if ($(".jquery-sound").length) $.each($(".jquery-sound"), function (i, e) {
                        e.play();
                    });
                } else {
                    sound[0].play();
                }
            }
        }
    });
})(jQuery);
