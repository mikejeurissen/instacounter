input.onButtonPressed(Button.B, function () {
    likes += 1
    basic.showNumber(likes)
    if (likes == 5) {
        basic.showIcon(IconNames.Yes)
    }
    if (likes == 10) {
        basic.showIcon(IconNames.Heart)
    }
})
let likes = 0
likes = 0
basic.forever(function () {
	
})
