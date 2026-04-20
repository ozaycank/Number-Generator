// Elements
const input = document.querySelector("#numberInput");
const generateBtn = document.querySelector("#generateBtn");
const numbersContainer = document.querySelector("#numberList");

// Number Reset Function: Clear previous numbers
const resetNnumbers = () => {
  numbersContainer.innerHTML = "";
};

// Input validation: Allow only positive integers
input.addEventListener("input", () => {
  const value = input.value;
  // Edge Case: Sayı değilse veya 1'den küçükse temizle
  if (isNaN(value) || value < 0) {
    input.value = "";
  }
});

// Prime Number Check Function
const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
};

// Generate Numbers Function
const generateNumbers = () => {
  const count = parseInt(input.value);
  if (isNaN(count) || count < 1) {
    alert("Please enter a valid positive integer.");
    return;
  }
  resetNnumbers();
  // Number generation loop
  for (let i = 0; i <= count; i++) {
    const li = document.createElement("li");
    li.textContent = i;
    if (isPrime(i)) {
      li.classList.add("prime");
    } else if (i % 2 === 0) {
      li.classList.add("even");
    } else {
      li.classList.add("odd");
    }
    numbersContainer.appendChild(li);
  }
};

generateBtn.addEventListener("click", generateNumbers);
