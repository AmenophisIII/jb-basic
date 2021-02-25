basic.show_icon(IconNames.HEART)

def on_forever():
    basic.show_string("Hello!")
    basic.clear_screen()
    basic.pause(1000)
basic.forever(on_forever)
serial.write_line("Hi Jack")