let x_value = 0
input.onButtonPressed(Button.A, function () {
	
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        led.plot(x_value, 0)
        x_value += 1
        basic.pause(200)
        if (x_value > 4) {
            x_value = 0
        }
    }
})
