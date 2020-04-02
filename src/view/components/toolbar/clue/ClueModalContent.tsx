import * as React from "react";
import { IModalContent, FEATURE_REQUEST_ON_GITHUB } from "../SensorModalUtils";
import { SENSOR_LIST, GESTURES_CLUE } from "../../../constants";
import { TAG_INPUT_SVG } from "../../../svgs/tag_input_svg";
import TemperatureSensorBar from "../TemperatureSensorBar";
import { TAG_OUTPUT_SVG } from "../../../svgs/tag_output_svg";
import { Accelerometer } from "../motion/Accelerometer";
import { Gesture } from "../motion/Gesture";
import { ThreeDimensionSlider } from "../motion/threeDimensionSlider/ThreeDimensionSlider";
import * as SENSOR_PROPERTIES from "./ClueSensorProperties";
export const CLUE_TEMPERATURE_MODAL_CONTENT = (
    onUpdateValue: (sensor: SENSOR_LIST, value: number) => void,
    sensorValues: { [key: string]: number }
): IModalContent => {
    return {
        components: [
            <TemperatureSensorBar
                onUpdateSensor={onUpdateValue}
                value={sensorValues[SENSOR_LIST.TEMPERATURE]}
            />,
        ],
        descriptionText: "toolbar-clue-temperature-sensor.description",
        descriptionTitle: "toolbar-clue-temperature-sensor.title",
        id: "temperature",
        tagInput: TAG_INPUT_SVG,
        tagOutput: undefined,
        tryItDescription: "toolbar-clue-temperature-sensor.tryItDescription",
    };
};

export const CLUE_GPIO_MODAL_CONTENT = (
    onUpdateValue: (sensor: SENSOR_LIST, value: number) => void,
    sensorValues: { [key: string]: number }
): IModalContent => {
    return {
        descriptionTitle: "toolbar-clue-gpio.title",
        tagInput: TAG_INPUT_SVG,
        tagOutput: TAG_OUTPUT_SVG,
        descriptionText: "toolbar-clue-gpio.description",
        tryItDescription: "toolbar-clue-gpio.tryItDescription",
        components: undefined,
        id: "GPIO",
    };
};
export const CLUE_ACCELEROMETER_MODAL_CONTENT = (
    onUpdateValue: (sensor: SENSOR_LIST, value: number) => void,
    sensorValues: { [key: string]: number }
): IModalContent => {
    const accelerometerSensorValues = {
        X: sensorValues[SENSOR_LIST.MOTION_X],
        Y: sensorValues[SENSOR_LIST.MOTION_Y],
        Z: sensorValues[SENSOR_LIST.MOTION_Z],
    };
    return {
        components: (
            <Accelerometer
                onUpdateValue={onUpdateValue}
                axisValues={accelerometerSensorValues}
            />
        ),
        descriptionText: "toolbar-clue-accelerometer-sensor.description",
        descriptionTitle: "toolbar-clue-accelerometer-sensor.title",
        id: "accelerometer",
        tagInput: TAG_INPUT_SVG,
        tagOutput: undefined,
        tryItDescription: "toolbar-clue-accelerometer-sensor.tryItDescription",
    };
};

export const CLUE_LIGHT_MODAL_CONTENT = (
    onUpdateValue: (sensor: SENSOR_LIST, value: number) => void,
    sensorValues: { [key: string]: number }
): IModalContent => {
    const accelerometerSensorValues = {
        R: sensorValues[SENSOR_LIST.LIGHT_R],
        G: sensorValues[SENSOR_LIST.LIGHT_G],
        B: sensorValues[SENSOR_LIST.LIGHT_B],
        C: sensorValues[SENSOR_LIST.LIGHT_C],
    };
    return {
        components: (
            <ThreeDimensionSlider
                onUpdateValue={onUpdateValue}
                axisValues={accelerometerSensorValues}
                axisProperties={SENSOR_PROPERTIES.CLUE_LIGHT_PROPERTIES}
            />
        ),
        descriptionText: "toolbar-clue-light-sensor.description",
        descriptionTitle: "toolbar-clue-light-sensor.title",
        id: "light_sensor",
        tagInput: TAG_INPUT_SVG,
        tagOutput: undefined,
        tryItDescription: "toolbar-clue-light-sensor.tryItDescription",
    };
};
export const CLUE_HUMIDITY_MODAL_CONTENT = (
    onUpdateValue: (sensor: SENSOR_LIST, value: number) => void,
    sensorValues: { [key: string]: number }
): IModalContent => {
    const humiditySensorValues = {
        H: sensorValues[SENSOR_LIST.HUMIDITY],
    };
    return {
        descriptionTitle: "toolbar-clue-humidity-sensor.title",
        tagInput: TAG_INPUT_SVG,
        tagOutput: undefined,
        descriptionText: "toolbar-clue-humidity-sensor.description",
        tryItDescription: "toolbar-clue-humidity-sensor.tryItDescription",
        components: [
            <ThreeDimensionSlider
                onUpdateValue={onUpdateValue}
                axisValues={humiditySensorValues}
                axisProperties={SENSOR_PROPERTIES.CLUE_HUMIDITY_PROPERTIES}
            />,
        ],
        id: "humidity_sensor",
    };
};
export const CLUE_GESTURE_MODAL_CONTENT = (
    onSelectGestures?: (event: React.ChangeEvent<HTMLSelectElement>) => void,
    sendGesture?: (isActive: boolean) => void
): IModalContent => {
    return {
        descriptionTitle: "toolbar-clue-gesture-sensor.title",
        tagInput: TAG_INPUT_SVG,
        tagOutput: undefined,
        descriptionText: "toolbar-clue-gesture-sensor.description",
        tryItDescription: "toolbar-clue-gesture-sensor.tryItDescription",
        components: [
            <Gesture
                gestures={GESTURES_CLUE}
                onSelectGestures={onSelectGestures}
                onSendGesture={sendGesture}
            />,
        ],
        id: "gesture_sensor",
    };
};
export const CLUE_PROXIMITY_MODAL_CONTENT = (
    onUpdateValue: (sensor: SENSOR_LIST, value: number) => void,
    sensorValues: { [key: string]: number }
): IModalContent => {
    const proximitySensorValues = {
        P: sensorValues[SENSOR_LIST.PROXIMITY],
    };
    return {
        descriptionTitle: "toolbar-clue-proximity-sensor.title",
        tagInput: TAG_INPUT_SVG,
        tagOutput: undefined,
        descriptionText: "toolbar-clue-proximity-sensor.description",
        tryItDescription: "toolbar-clue-proximity-sensor.tryItDescription",
        components: [
            <ThreeDimensionSlider
                onUpdateValue={onUpdateValue}
                axisValues={proximitySensorValues}
                axisProperties={SENSOR_PROPERTIES.CLUE__PROXIMITY_PROPERTIES}
            />,
        ],
        id: "proximity_sensor",
    };
};
export const CLUE_PRESSURE_MODAL_CONTENT = (
    onUpdateValue: (sensor: SENSOR_LIST, value: number) => void,
    sensorValues: { [key: string]: number }
): IModalContent => {
    const pressureSensorValues = {
        P: sensorValues[SENSOR_LIST.PRESSURE],
    };
    return {
        descriptionTitle: "toolbar-clue-pressure-sensor.title",
        tagInput: TAG_INPUT_SVG,
        tagOutput: undefined,
        descriptionText: "toolbar-clue-pressure-sensor.description",
        tryItDescription: "toolbar-clue-pressure-sensor.tryItDescription",
        components: [
            <ThreeDimensionSlider
                onUpdateValue={onUpdateValue}
                axisValues={pressureSensorValues}
                axisProperties={SENSOR_PROPERTIES.CLUE_PRESSURE_PROPERTIES}
            />,
        ],
        id: "pressure_sensor",
    };
};
export const CLUE_BUTTON_CONTENT = (
    onUpdateValue: (sensor: SENSOR_LIST, value: number) => void,
    sensorValues: { [key: string]: number }
): IModalContent => {
    return {
        descriptionTitle: "toolbar-clue-a-b-push.title",
        tagInput: undefined,
        tagOutput: TAG_INPUT_SVG,
        descriptionText: "toolbar-clue-a-b-push.description",
        tryItDescription: "toolbar-clue-a-b-push.tryItDescription",
        components: undefined,
        id: "microbit_button",
    };
};

export const CLUE_BLUETOOTH_CONTENT = (
    onUpdateValue: (sensor: SENSOR_LIST, value: number) => void,
    sensorValues: { [key: string]: number }
): IModalContent => {
    return {
        descriptionTitle: "toolbar-clue-bluetooth.title",
        tagInput: undefined,
        tagOutput: TAG_INPUT_SVG,
        descriptionText: "toolbar-clue-bluetooth.description",
        tryItDescription: "toolbar-clue-bluetooth.tryItDescription",
        components: undefined,
        id: "bluetooth",
    };
};

export const CLUE_SOUND_MODAL_CONTENT = (
    onUpdateValue: (sensor: SENSOR_LIST, value: number) => void,
    sensorValues: { [key: string]: number }
): IModalContent => {
    return {
        descriptionTitle: "toolbar-clue-sound-sensor.title",
        tagInput: undefined,
        tagOutput: TAG_OUTPUT_SVG,
        descriptionText: "toolbar-clue-sound-sensor.description",
        tryItDescription: "toolbar-clue-sound-sensor.tryItDescription",
        components: [FEATURE_REQUEST_ON_GITHUB],
        id: "sound_sensor",
    };
};
export const CLUE_LED_CONTENT = (
    onUpdateValue: (sensor: SENSOR_LIST, value: number) => void,
    sensorValues: { [key: string]: number }
): IModalContent => {
    return {
        descriptionTitle: "toolbar-clue-led.title",
        tagInput: undefined,
        tagOutput: TAG_OUTPUT_SVG,
        descriptionText: "toolbar-clue-led.description",
        tryItDescription: "toolbar-clue-led.tryItDescription",
        components: undefined,
        id: "clue_neopixel",
    };
};
