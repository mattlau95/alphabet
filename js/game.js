const timerBar = document.getElementById("timer-bar");
const timerNum = document.getElementById("counttimer");
const duration = 5; // 5 seconds
const barImage = document.getElementById("statuses");
let pass = 0;
let intervalId; 
let timeLeft = duration;
const passwrd = document.getElementById("password");

const countdown = () => {

  timerBar.style.width = `${(timeLeft / duration) * 100}%`;
  timerNum.innerText = timeLeft;
  timeLeft--;

  if (timeLeft >= 0 && pass != 1) {
    intervalId = setTimeout(countdown, 1000); // Update every second
  } else {
    // Timer finished, do something here if needed
    timerBar.style.width = `${(timeLeft / duration) * 100}%`;
    barImage.src = 'images/fail.png';
  }
};

countdown();

const letters = "QWERASD";
let code = "";
const images = [];
let codeLength = code.length;
let number = 0;

// Generate a 15-letter code using random letters from the "letters" string
for (let i = 0; i < 15; i++) {
  code += letters[Math.floor(Math.random() * letters.length)];
}

// Create image elements for each character in the code
for (let i = 0; i < code.length; i++) {
  const letter = code[i].toUpperCase(); // Use lowercase letter for image filename
  const image = document.createElement("img");
  image.classList.add("image"); // Add the "image" class for styling
  image.src = `images/${letter}-blue.png`;
  images.push(image); // Add the image to the array
}

// Display the images
passwrd.innerText = code;
const imageContainer = document.getElementById("image-display");
images.forEach((image) => imageContainer.appendChild(image));


let currentCharacterIndex = 0;

document.addEventListener("keydown", (event) => {
  const pressedKey = event.key.toUpperCase();
  const currLetter = code[currentCharacterIndex];

  if (pressedKey === currLetter) {
    console.log("Correct key!");
    images[currentCharacterIndex].src = `images/${currLetter}-green.png`; // Change the first image to green
    currentCharacterIndex++;

    if (currentCharacterIndex === code.length) {
      barImage.src = 'images/pass.png';
      document.removeEventListener("keydown", this);
      clearInterval(intervalId);
      console.log("Password entered correctly!");
      // Do something when the password is entered correctly
    }
  } else {
    images[currentCharacterIndex].src = `images/${currLetter}-red.png`; // Change the first image to red
    barImage.src = 'images/fail.png';
    document.removeEventListener("keydown", this);
    clearInterval(intervalId);
    console.log("Wrong key!");
    // Handle incorrect keypresses as needed
  }
});


// Listen for keyboard input
/*document.addEventListener("keydown", (event) => {
  //const barImage = document.getElementById("statuses");

  const pressedKey = event.key.toUpperCase(); // Get the uppercase pressed key
  const firstLetter = code[0].toUpperCase(); // Get the first letter of the code
  if (pressedKey === firstLetter && code.length > 0 && timeLeft != 0) {
    passwrd.innerText = firstLetter;
  	codeLength = code.length;
  	number = 15 - codeLength;
    images[number].src = `images/${firstLetter}-green.png`; // Change the first image to green
    code = code.slice(1); // Remove the first letter from the code
    if(codeLength == 1){
    	barImage.src = 'images/pass.png';
    	document.removeEventListener("keydown", this);
      clearInterval(intervalId);
    }
  } else {
  	timeLeft = 0;
  	codeLength = code.length;
  	number = 15 - codeLength;
    images[number].src = `images/${firstLetter}-red.png`; // Change the first image to green
    code = code.slice(1); // Remove the first letter from the code
    barImage.src = 'images/fail.png';
    document.removeEventListener("keydown", this);
    code = "";
  }
});
*/
