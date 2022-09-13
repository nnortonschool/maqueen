const RIGHT = "right"
const LEFT = "left"

input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(500)
    music.stopAllSounds()

    move(200)
    turn(LEFT)
    move(685)
    turn(RIGHT)
    move(315)
    basic.pause(1000)
    move(160)
    turn(LEFT)
    move(1500)
});

function move(amnt: any) {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    basic.pause(amnt / 0.130)
    maqueen.motorStop(maqueen.Motors.All)
}

function turn(dir: any, ms: any = 855) {
    if (dir == 'left') {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 75)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 75)
        basic.pause(ms / 2)
        maqueen.motorStop(maqueen.Motors.All)
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 75)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 75)
        basic.pause(ms / 2)
        maqueen.motorStop(maqueen.Motors.All)
    }
}

// BLINKER

const leftTurn: Image[] = [
    images.createImage(`
            . . . . .
            . . . . .
            # . . . .
            . . . . .
            . . . . .
            `),
    images.createImage(`
            . . . . .
            # . . . .
            # # . . .
            # . . . .
            . . . . .
            `),
    images.createImage(`
            # . . . .
            . # . . .
            # # # . .
            . # . . .
            # . . . .
            `),
    images.createImage(`
            . # . . .
            . . # . .
            # # # # .
            . . # . .
            . # . . .
            `),
    images.createImage(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
]
const rightTurn: Image[] = [
    images.createImage(`
            . . . . .
            . . . . .
            . . . . #
            . . . . .
            . . . . .
            `),
    images.createImage(`
            . . . . .
            . . . . #
            . . . # #
            . . . . #
            . . . . .
            `),
    images.createImage(`
            . . . . #
            . . . # .
            . . # # #
            . . . # .
            . . . . #
            `),
    images.createImage(`
            . . . # .
            . . # . .
            . # # # #
            . . # . .
            . . . # .
            `),
    images.createImage(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
]

function blinker (turn: Image[]) {
    turn.forEach((image: Image) => {
        image.showImage(0)
        basic.pause(1)
    })
    basic.pause(500)
    turn.forEach((image: Image) => {
        image.showImage(0)
        basic.pause(1)
    })
    basic.pause(500)
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0)
}
