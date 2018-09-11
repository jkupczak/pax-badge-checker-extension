console.warn("🕹️ [pax-badge-checker] loaded /js/pax-badge-checker-on-twitter.js");
//////////////////////////////////////////////////////////////////////////////////


// On page load, click on the last link in the messages section.
document.querySelector(".pushwrap:last-child .text-part a").click();

// Then click again 3 seconds later. Probably because it may have updated?
setTimeout(function(){ document.querySelector(".pushwrap:last-child .text-part a").click(); }, 3000);


browserNotification("PAX!", "paxTw", 'icons/192-pax.png', true);
