// get the press button
var pressButton = document.querySelector('button[name=press]');
var studentSelect = document.querySelector('select[name="student"]');
var pennySelect = document.querySelector('select[name=penny]');
var pennyImage = document.querySelector('.penny');

// log press button to the console
console.log(pressButton);

// add event listen to press button
pressButton.addEventListener('click', () => {


   // long the student vavlue
   console.log(studentSelect.value)

   // log the penny value
    console.log(pennySelect.value);

    // set the penny image src
   // pennyImage.src = 'img/' + pennySelect.value;
   pennyImage.src = 'https://' + studentSelect.value + '.interactive.rodeo/studio/workshops/pennt-presser/img/' + pennySelect.value;
     //log the penny image
     console.log(pennyImage);
})