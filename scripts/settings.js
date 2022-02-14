let cardSettings = JSON.parse(localStorage.getItem("cardSettings"));

const showSettings = document.getElementById("editRules");

showSettings.innerHTML = "<h3>Twos</h3>" +
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
"<input id='ace' class='settings_input' value='" + cardSettings[49].instruction + "'></input>";

