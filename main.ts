basic.forever(function () {
    if (HelloBot.Ultrasonic_Car() < 15) {
        HelloBot.Servo_Car(HelloBot.enServo.S1, 0)
        HelloBot.Servo_Car(HelloBot.enServo.S2, 180)
        basic.pause(1000)
    } else {
        HelloBot.Servo_Car(HelloBot.enServo.S1, 120)
        HelloBot.Servo_Car(HelloBot.enServo.S2, 60)
        basic.pause(1000)
    }
})
