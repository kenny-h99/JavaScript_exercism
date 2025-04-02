export const EXPECTED_MINUTES_IN_OVEN = 40; //40 is the expected time in the oven

function remainingMinutesInOven(actualMinutesInOven){
    return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven; //30 is the time in the oven
}

function preparationTimeInMinutes(layers){
    return layers * 2; //2 is the number of layers and 2 is the time in minutes per layer
}

function TotalTimeInMinutes(numberOfLayers, actualMinutesInOven){
    return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven; //2 is the number of layers and 30 is the time in the oven

}