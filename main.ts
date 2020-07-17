input.onButtonPressed(Button.A, function () {
    big_image.scrollImage(1, 200)
    basic.pause(200)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    myImage.scrollImage(1, 200)
    basic.pause(200)
    basic.clearScreen()
})
let myImage: Image = null
let big_image: Image = null
big_image = images.createBigImage(`
    # # # . . . . # # #
    # # # . # # . # # #
    # # # . # # . # # #
    . . . . . . . . . .
    # # # # # # # # # #
    `)
myImage = images.createBigImage(`
    . . . . . # # # . #
    . . . . . # # # . #
    . . # . . # # # . .
    # . # . . . # . # .
    # . # . . . # . # .
    `)
basic.forever(function () {
	
})
