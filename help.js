const outputDiv = document.getElementById("output"); 
const gameSettings = {
    difficulty: "hard",
    soundOn: true,
    maxPlayers: 100,
  }
function problem1(){
    let results = "<strong>Game Settings: <br></strong>"
    for (let i in gameSettings) {
        results += `${i} : ${gameSettings[i]} <br>`
    }
    outputDiv.innerHTML = results;
}

function problem2() {
    gameSettings.toggleSound = gameSettings.soundOn
    gameSettings.soundOn = !gameSettings.soundOn
    outputDiv.innerHTML = `<strong>Sound is now:</strong> ${gameSettings.toggleSound}`;
}

const smoothie =  {
    flavor: "blueberries",
    size: "large",
    hasProtien : true,
}
function problem3() {
    newSize = prompt("Enter a new size for your smoothie")
    smoothie.size = newSize
    
    if (newSize && newSize.trim() !== "") {
      smoothie.size = newSize.trim();
    }
    outputDiv.innerHTML = `<strong>Smoothie Size Updated:</strong> ${smoothie.size}`;
  }

const Gadget = {
    name: "gadget",
    batteryLife: "low",
    isWireless: true, 
}

function printGadgetSpecs(gadget) {
    return `<br>Name: ${Gadget["name"]}<br> Battery Life: ${Gadget['batteryLife']}<br> Wireless: ${Gadget["isWireless"]}`
  }
  
  function problem4() {
    outputDiv.innerHTML = `<strong>Gadget Specs:</strong> ${printGadgetSpecs(Gadget)}`;
  }

function problem5() {
    const garden = {
        plantlist : ["rose", "green onions"],
        addPlant(newPlant) {
            this.plantlist.push(newPlant)
        },
    }
    garden.addPlant("Gardenia")
    garden.addPlant("Tulip")
    plantInput = document.getElementById("plantInput")
    const newPlant = document.getElementById("plantInput").value;
    if (newPlant.trim() !== "") {
      garden.addPlant(newPlant);
      document.getElementById("plantInput").value = "";
    }
    // Keep this and make use of it to help with outputting your results :)
    let result = "<strong>Plants in Garden:</strong><ul>";
    for (let plant of garden.plantlist) {
      result += `<li>${plant}</li>`;
    }
    result += "</ul>";
    outputDiv.innerHTML = result;
  }
playlist = {
    name: "I need to finish this assigment",
    songlist: ['Heaven Knows', "Beatopia"],
    addSong(songname){
        this.songlist.push(songname)
    },
}
function problem6() {
    for (let i = 0; i<2; i++) {
        const song = prompt(`Enter song ${i + 1}:`);
        if (song && song.trim() !== "") {
        playlist.addSong(song.trim());
        }
    }
      
  // This will output to the page for you:
  // Just fill in the PLACEHOLDERs with the correct info.
  let result = `<strong>Playlist: ${playlist["name"]} </strong><ul>`;
  for (let song of playlist.songlist) {
    result += `<li>${song}</li>`;
  }
  result += "</ul>";
  outputDiv.innerHTML = result;
}
