function showPyramid() {
    var row = Number(document.getElementById("getRow").value);
    
    document.getElementById("pyramid").innerHTML = "";
    for (var i = 1; i <= row; i++) {
        var output = "";
        for (var j = 1; j <= row - i; j++) {
            output += " ";
        }
        for (var k = 1; k <= i; k++) {
            output += "\u2605 ";
        }
        document.getElementById("pyramid").innerHTML += output+"<br>";
    }

    document.getElementById("invPyramid").innerHTML ="";
    for (var i = row; i >= 1; i--) {
        var output = "";
        for (var j = 1; j <= row - i; j++) {
            output += " ";
        }
        for (var k = 1; k <= i; k++) {
            output += "\u2605 ";
        }
        document.getElementById("invPyramid").innerHTML += output+"<br>";
    }

    document.getElementById("rPyramid").innerHTML = "";
    document.getElementById("lPyramid").innerHTML = "";
    
    for (var i = 1; i <= row; i++) {
        var output = "";
        for (var j = 1; j <= i; j++) {
            output += "\u2605 ";
        }
        document.getElementById("rPyramid").innerHTML += output+"<br>";
        document.getElementById("lPyramid").innerHTML += output+"<br>";
    }
    
     document.getElementById("showPyramid").style.display = "block";
     document.getElementById("getRow").value = "";
}



