//объявление препменных
var canvas;
var context;
//отслеживаем текущую позицию значка
var x = 0;
var y = 0;
//скороть движения по x и по y
var dx = 0;
var dy = 0;

var timer;

//при загрузки страници
window.onload = function () {
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");

	//русуем фон лабиринта
	drawMaze("images/maze.png", 268, 5);

	// При нажатии клавиши исполняем функцию processKey().
	window.onkeydown = processKey;
}

function processKey(e) {
	////Немного побаловался с событием onkeydown
	//alert("window.onkeydown\n"+"e.key= "+e.key+"\ne.keyCode= "+e.keyCode+"\ne.charCode= "+e.charCode+"\ne.char= "+e.char+"\ne.which= "+e.which);	

	// Если значок находится в движении, останавливаем его.
	dx = 0;
	dy = 0;

	//если была нажата стрелка вверх
	if (e.keyCode == 38) {
		dy = -1;
	}
	//если была нажата стрелка вниз
	if (e.keyCode == 40) {
		dy = 1;
	}
	//если была нажата стрелка влево
	if (e.keyCode == 37) {
		dx = -1;
	}
	//если была нажата стрелка вправо
	if (e.keyCode == 39) {
		dx = 1;
	}
}
//Эта функция дл рисования лабиринта
function drawMaze(mazeFile, startingX, startingY) {
	// Stop drawing (if it's taking place).
    clearTimeout(timer);
	
	//1 загружаем изображение лабиринта
	var imgMaze = new Image(); //создаем пользовательский обьект
	imgMaze.onload = function () {
		// Изменяем размер холста в соответствии
		// с размером изображения лабиринта
		canvas.width = imgMaze.width;
		canvas.height = imgMaze.height;
		
		//рисуем сам лабиринт с координатами 0 0
		//drawImage()- это функция canvas для ввода рисунков
		context.drawImage(imgMaze, 0, 0);
		
		// Рисуем значок.
		x = startingX;
		y = startingY;
		var imgFace = document.getElementById("face");
		
		//рисуем сам face с координатами x y
		context.drawImage(imgFace, x, y);
		context.stroke();
		// Рисуем следующий кадр через 10 миллисекунд.
		timer = setTimeout("drawFrame()", 10);
		
	}
	imgMaze.src = mazeFile;//поле выполнеия этой строчки сработает событие ----->onload
	
}

function drawFrame() {
	if (dx != 0 || dy != 0) {

		//рисуем квадратик с координатами (x и y)
		context.beginPath();
		context.fillStyle = "#19cbcb";
		context.rect(x, y, 15, 15);
		context.fill();

		// Обновляем координаты значка.
		x += dx;
		y += dy;
		//Если новая позиция не верна, это означает, что значок столкнулся с пре-
		//градой, и ее нужно возвратить назад в старую позицию и прекратить движение:
		if (checkForCollision()) {
			x -= dx;
			y -= dy;
			dx = 0;
			dy = 0;
		}
	}
	var imgFacee = document.getElementById("face");
	context.drawImage(imgFacee, x, y);
	
	//Выходим из повтора если достигли опредененной координаты
	if(y>(canvas.height-17)) {
		alert("Вы выиграли!");
		return;
	}
	
	// Draw a new frame in 10 milliseconds.
	timer = setTimeout(drawFrame, 10);
}

function checkForCollision() {
	// Захватываем блок пикселов под значком, слегка
	// превышающий размер значка.
	var imgData = context.getImageData(x - 1, y - 1, 15 + 2, 15 + 2);
	var pixels = imgData.data;
	// Проверяем эти пикселы.
	for (var i = 0; n = pixels.length, i < n; i += 4) {
		var red = pixels[i];
		var green = pixels[i + 1];
		var blue = pixels[i + 2];
		var alpha = pixels[i + 3];
		// Смотрим на наличие черного цвета стены, что указывает
		// на столкновение.
		if (red == 0 && green == 0 && blue == 0) {
			return true;
		}
		// Смотрим на наличие серого цвета краев, что указывает
		// на столкновение.
		if (red == 169 && green == 169 && blue == 169) {
			return true;
		}
	}
	// Столкновения не было.
	return false;
}