OpenIpAddress = function (word) {
  var query = word.selectionText;
  //check if query is an ip address
  var ipRegex = new RegExp(
    "^([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\." +
      "([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\." +
      "([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\." +
      "([01]?\\d\\d?|2[0-4]\\d|25[0-5])$"
  );
  if (!ipRegex.test(query)) {
    console.log("Invalid IP Address");
    return;
  }
  chrome.tabs.create({ url: "ssh://" + query });
};

chrome.contextMenus.removeAll(function () {
  chrome.contextMenus.create({
    id: "1",
    title: "Open IP Address",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener(OpenIpAddress);
//TODO: Add keyboard shortcut


