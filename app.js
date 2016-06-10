var addLinks = function() {
  var threadSubject = document.getElementsByClassName("hP")[0].innerHTML;

  var openMessages = document.getElementsByClassName("h7");

  Array.prototype.forEach.call(openMessages, function(message){
    if(!message.querySelector(".pw-issue-add")){
      var recipients = Array.prototype.map.call(
        message.querySelector(".hb").children,
        function(elem) {
          return elem.attributes.email.value;
        }
      ).concat(message.querySelector(".gD").attributes.email.value);

      message.
        querySelector("td.ady").
        insertAdjacentHTML("beforeend", link(recipients, threadSubject));
    }
  })
}

var link = function(recipients, threadSubject){
  return(
    "<a " +
    "class='pw-issue-add' " +
    `href='${url(recipients, threadSubject)}' ` +
    "target='_blank' " +
    "style='margin-right: 20px; float: right;'>" +
    "New Pathways Issue" +
    "</a>"
  );
};

var url = function(recipients, threadSubject) {
  return(
    "https://pathwaysbc.ca/issues/new?" +
    `threadSubscribers=${encodeURIComponent(recipients.join(";"))}&` +
    `threadSubject=${encodeURIComponent(threadSubject)}`
  );
};

window.addEventListener("load", function() {
  setTimeout(addLinks, 500);
  document.addEventListener("click", function() { setTimeout(addLinks, 500)})
})
