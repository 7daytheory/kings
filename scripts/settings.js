let cardSettings = JSON.parse(localStorage.getItem("cardSettings"));

const showSettings = document.getElementById("editRules");

showSettings.innerHTML ="<h3>Twos</h3>" +
"<input id='two' class='settings_input' value='" + cardSettings[0].instruction + "'></input>" +
"<h3>Threes</h3>" +
"<input id='three' class='settings_input' value='" + cardSettings[5].instruction + "'></input>" +
"<h3>Fours</h3>" +
"<input id='four' class='settings_input' value='" + cardSettings[9].instruction + "'></input>" +
"<h3>Fives</h3>" +
"<input id='five' class='settings_input' value='" + cardSettings[13].instruction + "'></input>" +
"<h3>Sixes</h3>" +
"<input id='six' class='settings_input' value='" + cardSettings[17].instruction + "'></input>" +
"<h3>Sevens</h3>" +
"<input id='seven' class='settings_input' value='" + cardSettings[21].instruction + "'></input>" +
"<h3>Eights</h3>" +
"<input id='eight' class='settings_input' value='" + cardSettings[25].instruction + "'></input>" +
"<h3>Nines</h3>" +
"<input id='nine' class='settings_input' value='" + cardSettings[29].instruction + "'></input>" +
"<h3>Tens</h3>" +
"<input id='ten' class='settings_input' value='" + cardSettings[33].instruction + "'></input>" +
"<h3>Jacks</h3>" +
"<input id='jack' class='settings_input' value='" + cardSettings[37].instruction + "'></input>" +
"<h3>Queens</h3>" +
"<input id='queen' class='settings_input' value='" + cardSettings[41].instruction + "'></input>" +
"<h3>Kings</h3>" +
"<input id='king' class='settings_input' value='" + cardSettings[45].instruction + "'></input>" +
"<h3>Aces</h3>" +
"<input id='ace' class='settings_input' value='" + cardSettings[49].instruction + "'></input><br>" +
"<button onClick='editSettings()' class='settings_btn'>SAVE SETTINGS</button";

function editSettings() {
  const twos = document.getElementById("two").value;
  const threes = document.getElementById("three").value;
  const fours = document.getElementById("four").value;
  const fives = document.getElementById("five").value;
  const sixes = document.getElementById("six").value;
  const sevens = document.getElementById("seven").value;
  const eights = document.getElementById("eight").value;
  const nines = document.getElementById("nine").value;
  const tens = document.getElementById("ten").value;
  const jacks = document.getElementById("jack").value;
  const queens = document.getElementById("queen").value;
  const kings = document.getElementById("king").value;
  const aces = document.getElementById("ace").value;
  
  cardSettings[0].instruction = twos;
  cardSettings[1].instruction = twos;
  cardSettings[2].instruction = twos;
  cardSettings[3].instruction = twos;
  
  cardSettings[4].instruction = threes;
  cardSettings[5].instruction = threes;
  cardSettings[6].instruction = threes;
  cardSettings[7].instruction = threes;
  
  cardSettings[8].instruction = fours;
  cardSettings[9].instruction = fours;
  cardSettings[10].instruction = fours;
  cardSettings[11].instruction = fours;
  
  cardSettings[12].instruction = fives;
  cardSettings[13].instruction = fives;
  cardSettings[14].instruction = fives;
  cardSettings[15].instruction = fives;
  
  cardSettings[16].instruction = sixes;
  cardSettings[17].instruction = sixes;
  cardSettings[18].instruction = sixes;
  cardSettings[19].instruction = sixes;
  
  cardSettings[20].instruction = sevens;
  cardSettings[21].instruction = sevens;
  cardSettings[22].instruction = sevens;
  cardSettings[23].instruction = sevens;
  
  cardSettings[24].instruction = eights;
  cardSettings[25].instruction = eights;
  cardSettings[26].instruction = eights;
  cardSettings[27].instruction = eights;
  
  cardSettings[28].instruction = nines;
  cardSettings[29].instruction = nines;
  cardSettings[30].instruction = nines;
  cardSettings[31].instruction = nines;
  
  cardSettings[32].instruction = tens;
  cardSettings[33].instruction = tens;
  cardSettings[34].instruction = tens;
  cardSettings[35].instruction = tens;
  
  cardSettings[36].instruction = jacks;
  cardSettings[37].instruction = jacks;
  cardSettings[38].instruction = jacks;
  cardSettings[39].instruction = jacks;
  
  cardSettings[40].instruction = queens;
  cardSettings[41].instruction = queens;
  cardSettings[42].instruction = queens;
  cardSettings[43].instruction = queens;
  
  cardSettings[44].instruction = kings;
  cardSettings[45].instruction = kings;
  cardSettings[46].instruction = kings;
  cardSettings[47].instruction = kings;
  
  cardSettings[48].instruction = aces;
  cardSettings[49].instruction = aces;
  cardSettings[50].instruction = aces;
  cardSettings[51].instruction = aces;
  
  localStorage.setItem("cardSettings", JSON.stringify(cardSettings));
  
  location.replace("settings.html");
}

