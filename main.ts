const RIGHT = "right"
const LEFT = "left"

input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(500)
    music.stopAllSounds()

    // move(200)
    // turn(LEFT)
    // move(660)
    // turn(RIGHT)
    // move(300)
    // basic.pause(1000)
    // move(145)
    // turn(LEFT)
    // move(1000)

    let path: any = [{action: "fwd", distance: 200},
                     {action: "left"}, 
                     {action: "fwd", distance: 660},
                     {action: "right"},
                     {action: "fwd", distance: 300},
                     {action: "pause", time: 1000},
                     {action: "fwd", distance: 145},
                     {action: "left"},
                     {action: "fwd", distance: 1000}]
    parse(path)
});

function parse(path: any) {
    path.forEach((item: any) => {
        switch (item.distance) {
            case "fwd":
                move(item.distance)
            case "left":
                turn(LEFT)
            case "right":
                turn(RIGHT)
            case "pause":
                basic.pause(item.time)
            default:
                return
        }
    })
}

function move(amnt: any) {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    basic.pause(amnt / 0.087)
    maqueen.motorStop(maqueen.Motors.All)
}

function turn(dir: any, ms: any = 900) {
    if (dir == 'left') {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 75 / 2)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 75 / 2)
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 75 / 2)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 75 / 2)
    }
    basic.pause(ms * 2)
    maqueen.motorStop(maqueen.Motors.All)
}