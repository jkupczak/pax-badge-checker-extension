console.warn("🕹️ [pax-badge-checker] loaded /js/global.js");
///////////////////////////////////////////////////////////


//////////////////////////////
// Push a Browser Notification
//////////////////////////////
function browserNotification(title, tag, icon, requireClick, timer) {
  if (Notification.permission !== "granted")
    Notification.requestPermission();
  else {
    var notification = new Notification(title, {
      tag: tag,
      icon: chrome.extension.getURL(icon),
      requireInteraction: requireClick,
    });
    if ( timer ) {
      setTimeout(notification.close.bind(notification), timer);
    }
    notification.onclick = function () { notification.close(); };
  }
}
