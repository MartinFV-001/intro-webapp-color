$(document).ready(function () {
    updateColor();

    // Evento para el selector de color
    $("#colorPicker").on("input", function () {
        updateColor();
    });

    // Eventos para los controles de rojo, verde y azul
    $("#redDecimal, #greenDecimal, #blueDecimal").on("input", function () {
        updateColor();
    });

    $("#redRange, #greenRange, #blueRange").on("input change", function () {
        updateColor();
    });

    function updateColor() {
        var redDecimal = $("#redDecimal").val();
        var greenDecimal = $("#greenDecimal").val();
        var blueDecimal = $("#blueDecimal").val();

        $("#redRange").val(redDecimal);
        $("#greenRange").val(greenDecimal);
        $("#blueRange").val(blueDecimal);

        var rgbColor = "rgb(" + redDecimal + "," + greenDecimal + "," + blueDecimal + ")";
        var hexColor = rgbToHex(redDecimal, greenDecimal, blueDecimal);

        $("#colorBox").css("background-color", rgbColor);
        $("#hexCode").text("Código Hexadecimal: " + hexColor);
    }

    function rgbToHex(red, green, blue) {
        var hexRed = ("0" + parseInt(red, 10).toString(16)).slice(-2);
        var hexGreen = ("0" + parseInt(green, 10).toString(16)).slice(-2);
        var hexBlue = ("0" + parseInt(blue, 10).toString(16)).slice(-2);

        return "#" + hexRed + hexGreen + hexBlue;
    }
});
