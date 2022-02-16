		  var deferredPrompt = null;
		  
		window.addEventListener('beforeinstallprompt', (e) => { 
      deferredPrompt = e;
			console.log(e);	
      showAddToHomeScreen();
    });
		  
function showAddToHomeScreen()
{
  const a2hsDiv = document.getElementById("homescreen_prompt");
  a2hsDiv.innerHTML = "<span>Add Kings to your home screen?</span><br>" +
    "<button id='a2hsCancelBtn'>Cancel</button>" +
    "<button id='a2hsBtn'>Okay</button>"
  const a2hsBtn = document.getElementById("a2hsBtn");
  a2hsBtn.addEventListener("click", addToHomeScreen);
  const a2hsCancelBtn = document.getElementById("a2hsCancelBtn");
  a2hsCancelBtn.addEventListener("click", hideA2hs);  
  
  setTimeout(function () {
    const a2hsDiv = document.getElementById("homescreen_prompt");
    a2hsDiv.style.display = "block";
    const id = setInterval(frame, 10);
    let pos = -10;
    let opacity = 0.25;
    a2hsDiv.style.opacity = opacity;
    a2hsDiv.style.top = pos;
   function frame() {
     if (pos == 5) {
       clearInterval(id);
     } else {
       pos++;
       a2hsDiv.style.top = pos + 'px';
       if(opacity < 1) {
         opacity = opacity + 0.05;
         a2hsDiv.style.opacity = opacity;
       }
     }
   }
 }, 2000);
}


//------------------------------------------------------------------------------
function addToHomeScreen(e)
{
console.log(e);
  hideA2hs();
  
  if (deferredPrompt != null)
  {
    console.log("calling deferredPrompt.prompt()");
    deferredPrompt.prompt();
    
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice
      .then((choiceResult) => {
        if (choiceResult.outcome === 'accepted')
          { 
            console.log('User accepted the A2HS prompt');
          } else { 
            console.log('User dismissed the A2HS prompt'); 
          }
          deferredPrompt = null;
        });
  }
}

//------------------------------------------------------------------------------
function hideA2hs()
{
  var a2hsDiv = document.getElementById("homescreen_prompt");
  a2hsDiv.style.display = 'none'; 
}

if('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('/kings/serviceWorker.js')
           .then(function() { console.log("Service Worker Registered"); });
}