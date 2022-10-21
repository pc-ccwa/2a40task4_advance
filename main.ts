let x_value = 0
let go_right = 0
basic.forever(function () {
	
})
basic.forever(function () {
	
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.clearScreen()
        led.plot(x_value, 0)
        basic.pause(200)
        if (x_value == 0) {
            go_right = 1
        }
        if (go_right == 1) {
            x_value += 1
        } else {
            x_value += -1
        }
    }
    if (x_value > 4) {
        x_value = 3
        go_right = 0
    }
})
