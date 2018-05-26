/**
 * @author SKONIKS <vk.com/skoniks>
 * Copyright (c) 2018 SKONIKS - released under MIT License
 * Usage: var sound = $.sPlay('http://example.org/sound')
 * $.sStop(sound); - Stops certain sound
 * $.sStop(); - Stops all playing sounds
 * $.sVolume(); - Changes sounds volume
 **/

(function($) {
    $.extend({
        sPlay: function() {
            if (!arguments[0]) {
                console.error("Source not selected");
                return false;
            }
            var id = new Date().getTime().toString() + Math.ceil(Math.random() * 1000).toString();
            var $audio = $(
                '<audio id="player_' + id + '" class="sound-player" autoplay="autoplay" style="display:none;">' +
                '<source src="' + arguments[0] + '" />' +
                '<embed src="' + arguments[0] + '" hidden="true" autostart="true" loop="false"/>' +
                '</audio>'
            ).appendTo('body');
            $audio.on("ended", function() {
                $audio.remove();
            });
            return $audio;
        },
        sStop: function() {
            if (!arguments[0]) {
                $(".sound-player").remove();
            } else {
                arguments[0].remove();
            }
        },
        sVolume: function() {
            var volume = arguments[0] ? arguments[0] : 1;
            $(".sound-player").volume(volume);
        }
    });
})(jQuery);
