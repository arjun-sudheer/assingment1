const collections = [
    ["Elephant", "Lion", "Eagle", "Tiger", "Dolphin"],
    ["danced", "Sprinted", "feasted", "Devoured", "Pursued"],
    ["Joyful", "Melancholic", "Ecstatic", "Carefully", "Vehemently"],
    ["in", "on", "under", "with", "without"],
    ["table", "Guitar", "house", "car", "bike"]
  ];
  
  const buttons = [
    document.getElementById("btn1"),
    document.getElementById("btn2"),
    document.getElementById("btn3"),
    document.getElementById("btn4"),
    document.getElementById("btn5")
  ];
  
  const storyDiv = document.getElementById("story");
  const generateButton = document.getElementById("GenerateBtn");
  const randomStoryBtn = document.getElementById("randomStoryBtn");
  const resetBtn = document.getElementById("resetBtn");
  
  function updateStory() {
    if (buttons.some(btn => btn.textContent.includes('Word'))) {
      alert("Choose all 5 words to make a story");
    } else {
      const story = buttons.map(btn => btn.textContent).join(" ");
      storyDiv.textContent = story + ".";
    }
  }
  
  function bindButtonWord(button, collection) {
    button.textContent = collection[Math.floor(Math.random() * 5)];
  }
  
  buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      bindButtonWord(btn, collections[index]);
    });
  });
  
  generateButton.addEventListener("click", updateStory);
  
  randomStoryBtn.addEventListener("click", () => {
    buttons.forEach((btn, index) => {
      bindButtonWord(btn, collections[index]);
    });
    updateStory();
  });
  
  resetBtn.addEventListener("click", () => {
    buttons.forEach(btn => {
      btn.textContent = "Word " + (buttons.indexOf(btn) + 1);
    });
    storyDiv.textContent = "";
  });
  