input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(500)
    music.stopAllSounds()

    move(20)
    turnLeft()
    move(630)
    turnRight()
});

function move(amnt: any) {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    basic.pause(amnt / 0.087)
    maqueen.motorStop(maqueen.Motors.All)
}

function turnRight() {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 75)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 75)
    basic.pause(839)
    maqueen.motorStop(maqueen.Motors.All)
}

function turnLeft() {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 75)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 75)
    basic.pause(839)
    maqueen.motorStop(maqueen.Motors.All)
}