# 8 Bit-like Comic Bubbles

Simple CSS only, one element, 8 Bit-like comic bubble. Based on [http://wigflip.com/ds/](http://wigflip.com/ds/).


But Christian, **3kb** for only those simple balloons?

> Well, on average, a transparent .png from **wigflip** will weight around 4/5kb depending on its text. A gif with background will weight something like 1kb. If you do happen to need more than one of those bubbles, you can quickly get more than 3kb worth of images. That's more http requests for you. 

> And come on, things done with CSS only are way more cooler. PS: you can always remove what you don't need :)

## Classes
* **.cbbl**
	* Obligatory. Defaults to left side balloon.
* **.cbbl--right**
	* Optional. Makes the bubble tail go to the right side.
* **.cbbl--up**
	* Optional. Makes the bubble tail come from the balloon's upper side. Works with _.cbbl--right_
* **.cbbl--hover**
	* Optional. Indicates that the bubble will change colors on mouse hover.
* **.cbbl--btn**
	* Optional. Indicates that the bubble will be used as a button (with click transform animation).
* **.cbbl--no-selection**
	* Optional. Makes the bubble unselectable by the user's cursor.

## Installation

* _bower install --save comicbbls_
* Manual copy :)

## Examples & some usages

You can see some examples on codepen: http://codepen.io/chrispif/pen/xZWVrG

* Custom button;
* Section title;
* Input boxes (remove the input borders);
* And of course, actual speech bubbles.

###### Sample code
```` 
<div class="cbbl">
	Hello</div>
</div>
<div class="cbbl cbbl--right">
	How are you?</div>
</div>
````
Will produce: 

![](https://github.com/kaisermann/comicbbls/blob/master/comicbbl.gif?raw=true)

## Compatibility

IE 9+, Chrome, Safari, Firefox, Opera...

## Observations

* To rebuild the project, just run '**gulp**' on your terminal.