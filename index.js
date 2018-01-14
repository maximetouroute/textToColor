var inputText = document.getElementById('inputText');
var inputLuminance = document.getElementById('inputLuminance');
var body = document.getElementById('body');
var bodyStyle = body.style;
bodyStyle.transition = 'background 0.2s ease-in-out';


var updateColor = function() {
    var stringToConvert = inputText.value;
    var luminanceRange = inputLuminance.value + '%';
    bodyStyle.background = getColorFromStringWithLuminanceAndSaturation(stringToConvert, luminanceRange, '40%');
};

inputText.oninput = updateColor;
inputLuminance.oninput = updateColor;

function getColorFromStringWithLuminanceAndSaturation(string, luminance, saturation) {
    var hashCode = hashCodeFromString(string);
    var hue = hashCode % 360;
    return 'hsl(' + hue + ',' + saturation + ',' + luminance + ')';
}

function hashCodeFromString(string) {
    var hash = 0;
    if ( string.length === 0 ) {
        return hash;
    }
    for ( var i = 0; i < string.length; i++ ) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

inputText.value = 'Change me!';
updateColor();
