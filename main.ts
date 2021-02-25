let total = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    serial.redirectToUSB()
    basic.showString("Hello!")
    serial.writeLine("Hi Jack")
    basic.clearScreen()
    basic.pause(1000)
    total = 100
    serial.writeValue("TotalCost", total)
})
