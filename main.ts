const RIGHT = "right"
const LEFT = "left"

input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(500)
    music.stopAllSounds()

    move(200)
    turn(LEFT, 850)
    move(660)
    turn(RIGHT)
    move(300)
});

function move(amnt: any) {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    basic.pause(amnt / 0.087)
    maqueen.motorStop(maqueen.Motors.All)
}

function turn(dir: any, ms: any = 850) {
    if (dir == 'left') {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 75)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 75)
        basic.pause(ms)
        maqueen.motorStop(maqueen.Motors.All)
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 75)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 75)
        basic.pause(ms)
        maqueen.motorStop(maqueen.Motors.All)
    }
}