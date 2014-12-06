var submitMail = function () {
  var url = "http://andersw.info/email";
  var from = $('#name').val();
  var fromEmail = $('#email').val();
  var subject = "ANDERSW.INFO CONTACT FORM"
  var msgBody = $('#message').val() + '\n' + '\n'
              + "FROM: " + from + '\n'
              + "EMAIL " + fromEmail + '\n'
              + "PHONE " + $('#phone').val() + '\n'
              + "WEB " + $('#website').val();
  mailData = {
    from: fromEmail,
    subject: subject,
    msg: msgBody
  };
  console.log("About to SEND " + JSON.stringify(mailData));
  $.post(url, mailData, function (data) {
    $("#mailOk").modal('show')
    console.log("RECEIVED "+data);
  }, "json")
  .fail(function() {
    $("#mailFail").modal('show');
  });
  return false;
}

var submitMailDebug = function () {
  var data = "Thank you! Email sent.";
  $("#mailFail").modal('show');
  $("#mailFail")
  console.log("RECEIVED "+data);
  return false;
}


$("#sendButton").click(submitMailDebug);

$("#buttonOk").click(function() {
  $("#mailOk").modal('hide')
});

$("#buttonNotOk").click(function() {
  $("#mailFail").modal('hide')
});