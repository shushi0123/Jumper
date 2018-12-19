var canvas = document.getElementById('game_canvas');
var gl = canvas.getContext('webgl');
var programe = gl.createProgram();
var fragShader;
var vertexShader;


//gl.attachShader(programe,fragShader);
//gl.attachShader(programe,vertexShader);
//gl.linkProgram(programe);
//gl.

gl.program = programe;

gl.clearColor(255, 255, 255,255);
gl.clear(glBitField.GL_COLOR_BUFFER_BIT);