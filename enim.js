exports.run = () => {
    'use strict';

    // get all element for find 'enim' elements
    var elements = document.getElementsByTagName('*');

    for (var i = 0; i < elements.length; i++) {
        var el = elements[i]
        if (el.hasAttribute('enim')) {

            var enim = el
            var animation = 'enim-' + enim.getAttribute('enim')
            var inline_style = ''
            var duration = 600
            var repeat = 1
            var has_repeat = false
            var keep_end = false

            // keep last inline css styles
            if (enim.hasAttribute('style')) {
                inline_style = enim.getAttribute('style')
            }

            // change animation duration per ms
            if (enim.hasAttribute('enim-duration')) {
                duration = enim.getAttribute('enim-duration')
            }

            // set repeat status
            if (enim.hasAttribute('enim-repeat')) {
                repeat = enim.getAttribute('enim-repeat')
                inline_style += `animation-iteration-count: ${repeat};`
                has_repeat = true
            }

            // disbale soft finish
            if (enim.hasAttribute('enim-soft-finish')) {
                if (enim.getAttribute('enim-soft-finish') == 'false') {
                    inline_style += 'animation-timing-function: linear;'
                }
            }

            // keep end state
            if (enim.hasAttribute('enim-keep-end')) {
                if (enim.getAttribute('enim-keep-end') == 'true') {
                    inline_style += 'animation-fill-mode: forwards;'
                    keep_end = true
                }
            }

            // set duration to inline css
            inline_style += `animation-duration: ${duration}ms;`

            // enable new inline styles
            enim.setAttribute('style', inline_style)

            // start add animtaion class to element
            if (!enim.hasAttribute('enim-on')) {

                // if event not set
                enim.classList.add(animation)

            } else {

                // get js event name
                var event_name = enim.getAttribute('enim-on');
                // set end status
                var end = true


                enim.addEventListener(event_name, () => {

                    // set time for remove animation class permanently 
                    var time = duration
                    if (!isNaN(repeat)) {
                        time = repeat * duration
                    } else if (repeat = 'infinite') {
                        time = 0
                    }

                    if (time > 0) {
                        if (end) {
                            enim.classList.add(animation);
                            end = false
                            setTimeout(() => {
                                if (!keep_end) enim.classList.remove(animation);
                                end = true
                            }, time)
                        }
                    } else {
                        // timing is infinite and never remove animation class
                        enim.classList.add(animation);
                    }

                })

            }

        }
    }

}