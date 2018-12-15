enum PlantationIcons {
    //% block="flowerpot"
    FlowerPot = 0,
    //% block="flower"
    Flower = 1
}

/**
 * Tools to automate plantation supervision.
 */
//% color=#B22222 weight=30
namespace plantation {
    //% blockId="plantation_measure"
    //% block="measure echo %echo|trig %trig"
    //% echo.fieldEditor="gridpicker" echo.fieldOptions.columns=4
    //% trig.fieldEditor="gridpicker" trig.fieldOptions.columns=4
    export function measure(echo: AnalogPin, trig: AnalogPin): number {
        pins.analogWritePin(trig, 1023)
        control.waitMicros(10)
        let reading = pins.analogReadPin(echo)
        control.waitMicros(10)
        pins.analogWritePin(trig, 0)
        return reading
    }

    //% weight=50 blockGap=8
    //% blockId=plantation_icon_image block="icon image %i"
    //% i.fieldEditor="dropdown"
    //% i.fieldOptions.columns="5"
    //% i.fieldOptions.width="380"
    //% i.fieldOptions.maxRows=4
    export function plantationIconImage(i: PlantationIcons): Image {
        switch (i) {
            case PlantationIcons.FlowerPot: return images.createImage(`
                . . . . .
                . . . . .
                # # # # #
                . # . # .
                . # # # .
                `);
            default: return images.createImage(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    }
}
