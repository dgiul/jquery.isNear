# jquery.isNear

## Description
Test if the users cursor is near an element on the screen, enabling you to do something like load some JS when the cursor is near a navbar item.

## Dependancies
jQuery (tested with version 2.1.4)

## How to use
Attach a mouse move event handler to the body element. As the mouse moves and the event is triggered, test if you're close to an element like this:

```
$('body').mousemove(function(event) {
	if ($('.nav-item-1').isNear(20, event)) {
		// The cursor is within 20 pixels of .nav-item-1, so do something
	}
});
```

## License
MIT License