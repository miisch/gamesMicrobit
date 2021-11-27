input.onButtonPressed(Button.A, function () {
    basic.showString("" + (randint(1, 6)))
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Ghost)
    BOMB = 0
    while (BOMB > 0) {
        BOMB += -1
        music.playTone(165, music.beat(BeatFraction.Sixteenth))
        basic.pause(1000)
    }
    basic.showIcon(IconNames.Chessboard)
    soundExpression.mysterious.play()
})
input.onGesture(Gesture.Shake, function () {
    music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once)
    basic.showIcon(IconNames.Square)
    basic.pause(100)
    basic.showIcon(IconNames.SmallSquare)
})
let BOMB = 0
let sprite = game.createSprite(3, 3)
let A = 2
let B = 2
basic.forever(function () {
    if (input.rotation(Rotation.Roll) < -10) {
        if (A > 0) {
            A += -1
            music.playTone(262, music.beat(BeatFraction.Sixteenth))
        }
    } else if (input.rotation(Rotation.Roll) > 10) {
        if (A < 4) {
            A += 1
            music.playTone(247, music.beat(BeatFraction.Sixteenth))
        }
    }
    if (input.rotation(Rotation.Pitch) < -10) {
        if (B > 0) {
            B += -1
            music.playTone(330, music.beat(BeatFraction.Sixteenth))
        }
    } else if (input.rotation(Rotation.Pitch) > 10) {
        if (B < 4) {
            B += 1
            music.playTone(349, music.beat(BeatFraction.Sixteenth))
        }
    }
    sprite.set(LedSpriteProperty.X, A)
    sprite.set(LedSpriteProperty.Y, B)
    if (A == 3 && B == 3) {
        basic.showIcon(IconNames.Heart)
    }
    basic.pause(200)
})
