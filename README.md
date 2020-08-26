# enim [![npm](https://img.shields.io/npm/v/enim.svg)](http://npm.im/enim) 
by **enim** you can animate html elements without write css or js and save a lot of time.

## How to use

First, you can install enim on your project by npm:
```bash
npm i enim
```
or use `css` and `js` files directly from CDN:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/enim@1.0.0/dist/enim.min.css">
```
```html
<script src="https://cdn.jsdelivr.net/npm/enim@1.0.0/dist/enim.min.js"></script>
```

## Available attributes
| attribute        | value                | description                                               |
|------------------|----------------------|-----------------------------------------------------------|
| enim             | (animation name)     | Set an animation                                          |
| enim-duration    | Time in milliseconds | Duration of animation                                     |
| enim-repeat      | int or 'infinite'    | Set a number to repeat the animation or set infinite      |
| enim-on          | javascript events    | Animation starts after a JavaScript event such as 'click' |
| enim-soft-finish | false                | animation end without slowing down                        |
| enim-keep-end    | true                 | The element never returns to its original state           |

## Available animations
| Animation name for set to enim="" attribute |
|---------------------------------------------|
| up-down                                     |
| down-up                                     |
| rotate-right                                |
| rotate-left                                 |
| fade-in                                     |
| fade-out                                    |
| wink                                        |
| shake                                       |

## Examples
DIV rotation after clicking on it:
```html
<div class="mydiv" enim="rotate-right" enim-on="click" enim-duration="900"></div>
```

Rotate the loading icon indefinitely and without interruption:
```html
<div class="loading" enim="rotate-left" enim-repeat="infinite" enim-soft-finish="true"></div>
```

shaking the button after hovering the mouse over it:
```html
<button enim="shake" enim-repeat="4" enim-on="mouseenter"></div>
```