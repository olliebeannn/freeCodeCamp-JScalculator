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
    mainDisplayValue += numberValue;
    updateMainDisplay();
    console.log("total value entered is " + mainDisplayValue);
  }

  //Handle clear button being clicked
  const handleClearButtonClick = () => {
    mainDisplayValue = "";
    updateMainDisplay();
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

  //Update the main display value
  const updateMainDisplay = () => {
    $('.calculator__mainDisplayContent').html(mainDisplayValue);
  }

  //Attach number button click handler to all number buttons
  $('.calculator__button--number').on('click', handleNumberButtonClick);

  //Attach operand click handler
  $('.calculator__button--operand').on('click', handleOperandButtonClick);

  //Attach clear button handler
  $('.calculator__button--clear').on('click', handleClearButtonClick);
});
