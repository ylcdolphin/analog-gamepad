radio.setGroup(1)
basic.forever(function () {
    radio.sendValue("X", pins.analogReadPin(AnalogReadWritePin.P1))
    radio.sendValue("Y", pins.analogReadPin(AnalogReadWritePin.P2))
})
