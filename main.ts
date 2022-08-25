input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(500)
    music.stopAllSounds()

    
});

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