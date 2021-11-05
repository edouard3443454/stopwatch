let Sart = 0
let elapsed = 0
input.onButtonPressed(Button.A, function () {
    Sart = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    elapsed = input.runningTime() - Sart
    basic.showNumber(elapsed / 1000)
})
basic.forever(function () {
	
})
