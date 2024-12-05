/**
 *objective : get base, height of a triangle. calculate the area aby using the formula. and then display the area
 *
 */

function calculateTriangleArea() {
  const triangleBaseInput = document.getElementById("triangle-base");
  const triangleBase = parseFloat(triangleBaseInput.value);
  const triangleHeightInput = document.getElementById("triangle-height");
  const triangleHeight = parseFloat(triangleHeightInput.value);
  const area = 0.5*triangleBase*triangleHeight;
  const triangleAreaSpan = document.getElementById('triangle-area');
  triangleAreaSpan.innerText = area.toFixed(2);
  triangleBaseInput.value = '';
  triangleHeightInput.value = '';
}

function calculateRectangleArea(){
    const lengthInput= document.getElementById('rectangle-length');
    const length = parseFloat(lengthInput.value);
    const widthInput= document.getElementById('rectangle-width');
    const width = parseFloat(widthInput.value);
    const area = length * width;
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area.toFixed(2);
    lengthInput.value='';
    widthInput.value='';
}
function calculateParallelogramArea(){
    const baseInput= document.getElementById('parallelogram-base');
    const base = parseFloat(baseInput.value);
    const heightInput= document.getElementById('parallelogram-height');
    const height = parseFloat(heightInput.value);
    const area = base * height;
    const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    parallelogramAreaSpan.innerText = area.toFixed(2);
    baseInput.value='';
    heightInput.value='';
}
function calculateRhombusArea(){
    const d1Input= document.getElementById('rhombus-diagonal1');
    const d1 = parseFloat(d1Input.value);
    const d2Input= document.getElementById('rhombus-diagonal2');
    const d2 = parseFloat(d2Input.value);
    const area = 0.5 * d1 * d2;
    const rhombusAreaSpan = document.getElementById('rhombus-area');
    rhombusAreaSpan.innerText = area.toFixed(2);
    d1Input.value='';
    d2Input.value='';
}
function calculatePentagonArea(){
    const diagonalInput= document.getElementById('pentagon-diagonal');
    const diagonal = parseFloat(diagonalInput.value);
    const perimeterInput= document.getElementById('pentagon-perimeter');
    const perimeter = parseFloat(perimeterInput.value);
    const area = 0.5 * diagonal * perimeter;
    const pentagonAreaSpan = document.getElementById('pentagon-area');
    pentagonAreaSpan.innerText = area.toFixed(2);
    diagonalInput.value='';
    perimeterInput.value='';
}


function calculateEllipseArea(){
    const aAxisInput= document.getElementById('ellipse-a-axis');
    const a = parseFloat(aAxisInput.value);
    const bAxisInput= document.getElementById('ellipse-b-axis');
    const b = parseFloat(bAxisInput.value);
    const area = 3.14 * a * b;
    const ellipseAreaSpan = document.getElementById('ellipse-area');
    ellipseAreaSpan.innerText = area.toFixed(2);
    aAxisInput.value='';
    bAxisInput.value='';
}
