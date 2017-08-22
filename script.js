$(document).ready(() => {
  // console.log("Hi!");
  let mainDisplayValue = "";

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

  //Update the main display value
  const updateMainDisplay = () => {
    $('.calculator__mainDisplayContent').html(mainDisplayValue);
  }

  //Attach number button click handler to all number buttons
  $('.calculator__button--number').on('click', handleNumberButtonClick);

  //Attach clear button handler
  $('.calculator__button--clear').on('click', handleClearButtonClick);
});
