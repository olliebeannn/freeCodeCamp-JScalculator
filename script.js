$(document).ready(() => {
  // console.log("Hi!");
  let mainDisplayValue = "";
  let storedOperandValue = "";
  let storedNumberValue = "";

  //Handle a number button being clicked
  const handleNumberButtonClick = (e) => {
    //Get the number from button just clicked
    let numberValue = $(e.currentTarget).html().trim();
    console.log("button just pressed was " + numberValue);

    //Append it to the main display value
    //If condition: only if no decimal points already in string
    if(mainDisplayValue.indexOf('.') === -1 || numberValue !== ".") {
      mainDisplayValue += numberValue;
      updateMainDisplay();
    }
    console.log("total value entered is " + mainDisplayValue);
  }

  //Handle clear button being clicked
  const handleClearButtonClick = () => {
    mainDisplayValue = "";
    updateMainDisplay();

    storedNumberValue = "";
    operandValue = "";
  }

  const handleOperandButtonClick = (e) => {
    //Get the operand clicked if there is a number entered or a stored value
    //Or statement added to allow user to press one operand, change mind, press another
    if(mainDisplayValue !== "" || storedNumberValue !== "") {
      let operandValue = $(e.currentTarget).html().trim();
      console.log("button just pressed was " + operandValue);

      //Store the operand value
      storedOperandValue = operandValue;

      //And store the number value as well, but don't clear the display yet
      //If statement added to allow user to press one operand, change mind, press another
      if(mainDisplayValue !== "") {
        storedNumberValue = mainDisplayValue;
        mainDisplayValue = "";
      }
      console.log("storedNumberValue is " + storedNumberValue);
    }
  }

  const handleEqualsButtonClick = () => {
    let result = "";

    //If there's a previous num and operator entered, and value currently entered
    //Do the calculation and return the value
    if(storedNumberValue !== "" && storedOperandValue !== "" && mainDisplayValue !== "") {
      switch(storedOperandValue) {
        case '+':
          result = parseFloat(storedNumberValue) + parseFloat(mainDisplayValue);
          break;
        case '-':
          result = parseFloat(storedNumberValue) - parseFloat(mainDisplayValue);
          break;
        case '×':
          result = parseFloat(storedNumberValue) * parseFloat(mainDisplayValue);
          break;
        case '÷':
          result = parseFloat(storedNumberValue) / parseFloat(mainDisplayValue);
          break;
      }
      console.log("result is " + result);

      //Rounding to fix floating point issues based on # of decimal places
      let numDecimalPlacesValOne = 0;
      if(storedNumberValue.indexOf('.') !== -1) {
        numDecimalPlacesValOne = storedNumberValue.length - storedNumberValue.indexOf('.') - 1;
      }
      console.log("numDecimalPlacesValOne = " + numDecimalPlacesValOne);

      let numDecimalPlacesValTwo = 0;
      if(mainDisplayValue.indexOf('.') !== -1) {
        numDecimalPlacesValTwo = mainDisplayValue.length - mainDisplayValue.indexOf('.') - 1;
      }

      console.log("numDecimalPlacesValTwo = " + numDecimalPlacesValTwo);

      //If there are any decimal points
      if(numDecimalPlacesValOne + numDecimalPlacesValTwo > 0) {
        result = result.toFixed(Math.min(8, numDecimalPlacesValOne + numDecimalPlacesValTwo));
      }

      result = result.toString();
      mainDisplayValue = result;
      updateMainDisplay();
    }
  }

  //Update the main display value
  const updateMainDisplay = () => {
    $('.calculator__mainDisplayContent').html(mainDisplayValue);
  }

  //Attach number button click handler to all number buttons
  $('.calculator__button--number').on('click', handleNumberButtonClick);

  //Attach operand click handler
  $('.calculator__button--operand').on('click', handleOperandButtonClick);

  //Attach equals button handler
  $('.calculator__button--equals').on('click', handleEqualsButtonClick);

  //Attach clear button handler
  $('.calculator__button--clear').on('click', handleClearButtonClick);
});
