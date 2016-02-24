/**
 * @summary     jQuery proximity detector
 * @description Plugin to determine if the users cursor is near a specific object
 * @version     1.0.0
 * @file        jquery.isNear.js
 * @author      Dan Giulvezan
 *
 * Example:
 *
 * $('body').mousemove(function(event) {
 *     if ($('.nav-item-1').isNear(20, event)) {
 *         // The cursor is within 20 pixels of .nav-item-1, so do something
 *     }
 * });
 *
 * @method  isNear
 * @param   {Object}    element     The new HTML to show to the user
 * @param   {int}       distance    The distance threshold to test for
 * @param   {Object}    event       The event object from the mouse move
 * @return  {Boolean}   Whether or not the mouse cursor is in fact with the threshold distance from the target element
 */
(function($) {

    $.fn.isNear = function(distance, event) {

        try {
            
            var left = this.offset().left - distance,
                top = this.offset().top - distance,
                right = left + this.width() + ( 2 * distance ),
                bottom = top + this.height() + ( 2 * distance ),
                x = event.pageX,
                y = event.pageY;

            return ( x > left && x < right && y > top && y < bottom );
        } catch(err) {
            return;
        }

    }

}(jQuery));