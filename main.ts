input.onGesture(Gesture.TiltLeft, function () {
    sprite.move(-1)
})
input.onButtonPressed(Button.A, function () {
    sprite.move(1)
})
input.onButtonPressed(Button.AB, function () {
    sprite.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.Y, 1)
})
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
let sprite2 = game.createSprite(0, 2)
basic.forever(function () {
	
})
basic.forever(function () {
    if (sprite2.isTouching(sprite)) {
        sprite2.delete()
        sprite2 = game.createSprite(randint(-10, 10), randint(-20, 20))
    }
})
