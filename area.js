let count = 0;


// Get Input Values by Function
function getInputFieldValue(inputFieldID) {
    const getInput = document.getElementById(inputFieldID);
    // if(getInput.value === ''){
    //     return alert('Please Fill up the both input values')
    // }
    const getTextInput = getInput.value;
    const getIntInput = parseFloat(getTextInput);
    return getIntInput;
}

// Clearing Input Field 
function clearInput(inputFieldID) {
    document.getElementById(inputFieldID).value = "";
}

// get addingToCalculator by function
function addingToCalculator(area, shape, calculatorID, getIntBase, getintHeight, b, h) {
    const areaCalculator = document.getElementById(calculatorID);
    const parameters = document.createElement('p');
    parameters.innerText = `${count}. ${b} ${getIntBase} cm, ${h} ${getintHeight} cm`
    areaCalculator.appendChild(parameters);


    const areaTag = document.createElement('p');
    areaTag.innerHTML = ` ${shape} Area: ${area.toFixed(2)} ` + "cm<sup>2</sup>"; //innerHTML tag ta use korar karone vitorer shob HTML tag hishebe ashbe;
    areaCalculator.appendChild(areaTag);

    const breakTag = document.createElement('br');
    areaCalculator.appendChild(breakTag);
}

// For Triangular 
document.getElementById("triangle-button").addEventListener('click', function () {
    // if(getInputFieldValue(inputFieldID) === 'return'){
    //     return alert("alert")
    // }
    getIntBase = getInputFieldValue('getTriangleBase');
    getIntHeight = getInputFieldValue('getTriangleHeight');


    const areaOfShape = 0.5 * getIntBase * getIntHeight;

    if (isNaN(areaOfShape)) {
        return alert("Please fill up both input values");
    }

    count++



    let shape = "Triangular";

    // adding to calculaion 
    addingToCalculator(areaOfShape, shape, 'areaCalculator', getIntBase, getIntHeight, "Base:", "Height:")


    clearInput('getTriangleBase');
    clearInput('getTriangleHeight');

})

// For Rectangle 
document.getElementById("rectangular-button").addEventListener('click', function () {

    getIntBase = getInputFieldValue('getRectangularBase');
    getIntHeight = getInputFieldValue('getRectangularHeight');


    const areaOfShape = getIntBase * getIntHeight;

    if (isNaN(areaOfShape)) {
        return alert("Please fill up both input values");
    }

    count++



    let shape = "Rectangular";

    // adding to calculaion 
    addingToCalculator(areaOfShape, shape, 'areaCalculator', getIntBase, getIntHeight, "Width:", "Length:")


    clearInput('getRectangularBase');
    clearInput('getRectangularHeight');

})


// For Parallelogram
document.getElementById("parallelogram-button").addEventListener('click', function () {

    getIntBase = getInputFieldValue('getParallelogramBase');
    getIntHeight = getInputFieldValue('getParallelogramHeight');


    const areaOfShape = getIntBase * getIntHeight;

    if (isNaN(areaOfShape)) {
        return alert("Please fill up both input values");
    }
    count++



    let shape = "Parallelogram";

    // adding to calculaion 
    addingToCalculator(areaOfShape, shape, 'areaCalculator', getIntBase, getIntHeight, "Base:", "Height:")

    clearInput('getParallelogramBase');
    clearInput('getParallelogramHeight');

})

// For Rhombus 
document.getElementById("rhombus-button").addEventListener('click', function () {

    getIntBase = getInputFieldValue('getRhombusBase');
    getIntHeight = getInputFieldValue('getRhombusHeight');


    const areaOfShape = 0.5 * getIntBase * getIntHeight;

    if (isNaN(areaOfShape)) {
        return alert("Please fill up both input values");
    }
    count++



    let shape = "Rhombus";

    // adding to calculaion 
    addingToCalculator(areaOfShape, shape, 'areaCalculator', getIntBase, getIntHeight, "First Diagonal:", "Second Diagonal:")

    clearInput('getRhombusBase');
    clearInput('getRhombusHeight');

})

// For Pentagon 
document.getElementById("pentagon-button").addEventListener('click', function () {

    getIntBase = getInputFieldValue('getPentagonBase');
    getIntHeight = getInputFieldValue('getPentagonHeight');


    const areaOfShape = 0.5 * getIntBase * getIntHeight;
    if (isNaN(areaOfShape)) {
        return alert("Please fill up both input values");
    }
    count++



    let shape = "Pentagon";

    // adding to calculaion 
    addingToCalculator(areaOfShape, shape, 'areaCalculator', getIntBase, getIntHeight, "No of Arms:", "Apothem:")

    clearInput('getPentagonBase');
    clearInput('getPentagonHeight');

})

// For Ellipse
document.getElementById("ellipse-button").addEventListener('click', function () {

    getIntBase = getInputFieldValue('getEllipseBase');
    getIntHeight = getInputFieldValue('getEllipseHeight');

    //    console.log(typeof getIntBase);
    //    console.log(typeof getintHeight);

    // alternative condition 
    //    if(!getIntBase || !getintHeight ){
    //     return alert("Please fill up both input values");
    //    }

    const areaOfShape = 3.1416 * getIntBase * getIntHeight;

    if (isNaN(areaOfShape)) {
        return alert("Please fill up both input values");
    }
    count++


    let shape = "Ellipse";

    // adding to calculaion 
    addingToCalculator(areaOfShape, shape, 'areaCalculator', getIntBase, getIntHeight, "Semi-Major:", "Semi-Minor:")

    clearInput('getEllipseBase');
    clearInput('getEllipseHeight');

})