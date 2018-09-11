console.warn("🕹️ [pax-badge-checker] loaded /js/pax-badge-checker-on-google-voice.js");
///////////////////////////////////////////////////////////////////////////////////////


// Listen for new messages in the contacts column
/////////////////////////////////////////////////
document.arrive("div[gv-thread-id='t.40404'] gv-annotation[gv-test-id='text-message-content']", {existing: true}, function() {

  console.log(this);
  console.log(this.innerText);

  var urlInNotification = this.innerText.match(/http.+? /i);

  window.open(urlInNotification,'_blank');

  browserNotification("PAX!", "paxGv", 'icons/192-pax.png', true);

});


// Listen for new messages in the messages column, specific to Twitter
//////////////////////////////////////////////////////////////////////
document.arrive("div[gv-test-id='message-item-container']:nth-last-child(2)", function() {

  // Loop through the body of the tweet and click on all links.
  let linksInTweet = this.querySelectorAll("a");
  for (let link of linksInTweet) {
    link.click();
    console.log(link);
  };

  browserNotification("PAX!", "paxGv", 'icons/192-pax.png', true);

});
