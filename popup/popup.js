/* initialise variables */
const bgBtns = document.querySelectorAll('button');
const statebuton = true;
function getActiveTab() {
  return browser.tabs.query({ active: true, currentWindow: true });
}

/* apply backgrounds to buttons */
/* add listener so that when clicked, button applies background to page HTML */

for (let i = 0; i < bgBtns.length; i++) {
  bgBtns[i].onclick = function (e) {
    getActiveTab().then((tab) => {
      browser.tabs.sendMessage(tab[0].id, { button: bgBtns[i].innerText });

      // cookieVal.image = fullURL;
      // browser.cookies.set({
      //   url: tab[0].url,
      //   name: "bgpicker",
      //   value: JSON.stringify(cookieVal)
      // })
    });
    // var imgName = bgBtns[i].getAttribute('class');
    // var bgImg = 'url(\'images/' + imgName + '.png\')';
    // bgBtns[i].style.backgroundImage = bgImg;


  }
}

/* apply chosen color to HTML background */

// colorPick.onchange = function (e) {
//   getActiveTab().then((tabs) => {
//     var currColor = e.target.value;
//     browser.tabs.sendMessage(tabs[0].id, { color: currColor });

//     cookieVal.color = currColor;
//     browser.cookies.set({
//       url: tabs[0].url,
//       name: "bgpicker",
//       value: JSON.stringify(cookieVal)
//     })
//   });
// }

/* reset background */

// reset.onclick = function () {
//   getActiveTab().then((tabs) => {
//     browser.tabs.sendMessage(tabs[0].id, { reset: true });

//     cookieVal = {
//       image: '',
//       color: ''
//     };
//     browser.cookies.remove({
//       url: tabs[0].url,
//       name: "bgpicker"
//     })
//   });
// }

/* Report cookie changes to the console */

// browser.cookies.onChanged.addListener((changeInfo) => {
//   console.log(`Cookie changed:\n
//               * Cookie: ${JSON.stringify(changeInfo.cookie)}\n
//               * Cause: ${changeInfo.cause}\n
//               * Removed: ${changeInfo.removed}`);
// });

// Trash
// initializer values
/* var colorPick = document.querySelector('input');
 var reset = document.querySelector('.color-reset button');
 var cookieVal = {
  image: '',
   color: ''
 };
*/