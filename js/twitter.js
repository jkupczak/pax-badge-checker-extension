console.warn("🕹️ [pax-badge-checker " + chrome.runtime.getManifest().version + "] loaded /js/twitter.js");
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// browserNotification("Twitter Reloaded", "paxTw", 'icons/192-pax.png', true);

// Refresh every X minutes because apparently shit breaks and tweets stop coming in? Ugh.
setTimeout(function(){
  if ( navigator.onLine ) {
    location.reload();
  }
}, 500000); // X minutes


// Listen for tweet notifications.
//////////////////////////////////
document.arrive(".js-new-tweets-bar", {existing: true}, function() {

  console.log("new tweet notification, clicking on it to reveal it");
  console.log(this);

  // Found a new tweet notification. Click on it to reveal the tweet.
  this.click();

  console.log("clicked to reveal done")

  // Grab the 1st tweet.
    var newTweet = document.querySelectorAll("#stream-items-id > li:first-child")[0];

    console.log(newTweet);

    // Loop through the body of the tweet and click on all links.
    let linksInTweet = newTweet.querySelectorAll(".js-tweet-text-container a");
    for (let link of linksInTweet) {
      link.click();
    };

  // Grab the 2nd tweet.
    var newTweet2 = document.querySelectorAll("#stream-items-id > li:nth-child(2)")[0];

    console.log(newTweet2);

    // Loop through the body of the tweet and click on all links.
    let linksInTweet2 = newTweet2.querySelectorAll(".js-tweet-text-container a");
    for (let link of linksInTweet2) {
      link.click();
    };

  browserNotification("PAX!", "paxTw", 'icons/192-pax.png', true);

});


//
// // Check Tweets
// function loopLinks() {
//
//   // Check the first tweet.
//   var tweetRow = document.querySelectorAll(".js-stream-item.stream-item")[0];
//   console.log(tweetRow);
//   var isRetweet = elExists(tweetRow.querySelector(".js-retweet-text"), "set");
//   console.log(isRetweet);
//
//   // If it's a retweet, lets check the second tweet.
//   if ( isRetweet ) {
//     var tweetRow = document.querySelectorAll(".js-stream-item.stream-item")[1];
//     console.log(tweetRow);
//     var isRetweet = elExists(tweetRow.querySelector(".js-retweet-text"), "set");
//     console.log(isRetweet);
//   }
//
//   // If the first or second tweets are NOT retweet, loop through the links it contains
//   if ( !isRetweet ) {
//
//     let links = tweetRow.querySelectorAll(".js-tweet-text-container a");
//     for (let link of links) {
//
//       // Only act on the link if the href goes to a different domain (begins with http)
//       if ( /http/gi.test(link.getAttribute("href")) ) {
//         console.warn(link);
//         console.warn("This link (" + link.getAttribute("href") + ") is DEFINITELY what we're looking for.")
//         link.click();
//       } else {
//         console.warn(link);
//         console.warn("This link (" + link.getAttribute("href") + ") is NOT what we're looking for.")
//       }
//     }
//
//   }
//
// }


// // Check AJAX Loaded Tweets
// document.arrive(".js-new-items-bar-container .new-tweets-bar", function() {
//
//   // When a new tweet appears, click the div that loads it.
//   document.querySelector(".new-tweets-bar").click();
//
//   // Now that the new tweet is loaded, run our function to check its contents.
//   loopLinks();
//
//   console.warn("arrived!");
//
// });


// loopLinks();
