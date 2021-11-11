basic.forever(function () {
    basic.clearScreen()
    led.plot(pins.map(
    pins.analogReadPin(AnalogPin.P1),
    0,
    1023,
    0,
    4
    ), pins.map(
    pins.analogReadPin(AnalogPin.P2),
    0,
    1023,
    0,
    4
    ))
})
