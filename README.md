# Product preview 360
![Screenshot](screenshot.png)

Credit to https://sketchfab.com/3d-models/car-model-blender-2be4c41ccc774fc79f3e598e0091e3b9 for the car model

This is a repo of a sample 360 product preview app.
I've made this repo as a mutation of https://github.com/AugustinasK/product-preview - an older project for product preview.

## How to use
* Select a circle/dot on a product or click a button indicating desired part
* You can rotate the product by using a slider below the image
* You can automate product rotation by using play/stop button

## Development
* Run `npm i` to get dependencies
* Run `npm start` to start a project
* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Other
* Images of a producs must have the same dimensions
* In the future versions it would be nice to think of a solution for points which are behind the image (e.g. back bumper shouldn't be visible when the car is front-facing)