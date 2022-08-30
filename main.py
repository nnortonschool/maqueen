path = [
    {"action": "fwd", "distance": 200},
    {"action": "left"},
    {"action": "fwd", "distance": 660},
    {"action": "right"},
    {"action": "fwd", "distance": 300},
    {"action": "pause", "time": 1000},
    {"action": "fwd", "distance": 145},
    {"action": "left"},
    {"action": "fwd", "distance": 1000}
]


def on_button_pressed_a():
    music.play_tone(262, music.beat(BeatFraction.WHOLE))
    basic.pause(500)
    music.stop_all_sounds()

    parse(path)

def parse(path):
    for action in path:
        if action["action"] == "fwd":
            move(action["distance"])
        elif action["action"] == "left":
            turn("left")
        elif action["action"] == "right":
            turn("right")
        elif action["action"] == "pause":
            basic.pause(action["time"])

def move(amnt):
    maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, 50)
    basic.pause(amnt / 0.087)
    maqueen.motor_stop(maqueen.Motors.ALL)

def turn(dir2, ms = 900):
    if dir2 == "left":
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 75 / 2)
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CCW, 75 / 2)
    else:
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 75 / 2)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CCW, 75 / 2)
    basic.pause(ms * 2)
    maqueen.motor_stop(maqueen.Motors.ALL)

input.on_button_pressed(Button.A, on_button_pressed_a)