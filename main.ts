radio.onReceivedString(function (receivedString) {
	
})
radio.setGroup(10)
basic.forever(function () {
    if (input.acceleration(Dimension.Y) < -500) {
        radio.sendNumber(1)
    } else if (input.acceleration(Dimension.Y) > 500) {
        radio.sendNumber(2)
    } else if (input.acceleration(Dimension.X) < -500) {
        radio.sendNumber(3)
    } else if (input.acceleration(Dimension.X) > 500) {
        radio.sendNumber(4)
    } else {
        radio.sendNumber(5)
    }
})
