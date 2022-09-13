input.onButtonPressed(Button.A, function () {
    Dog = randint(0, 1)
    if (Dog == 0) {
        basic.showString("Truth")
    } else if (Dog == 1) {
        basic.showString("Dare")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    Horse = randint(0, 3)
    if (Horse == 0) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else if (Horse == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . # # # .
            . . # . .
            `)
    } else if (Horse == 2) {
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
    } else if (Horse == 3) {
        basic.showLeds(`
            . . # . .
            . . # # .
            # # # # #
            . . # # .
            . . # . .
            `)
    }
    basic.clearScreen()
})
let Horse = 0
let Dog = 0
basic.showString("Truth or Dare")
