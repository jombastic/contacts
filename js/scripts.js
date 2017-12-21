$(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var name = $("#name").val();
    var surname = $("#surname").val();
    var address = $("#address").val();
    var emailAddress = $("#emailAddress").val();
    var numberType = $("#numberType").val();
    var phoneNumber = $("#phoneNumber").val();

    var tableElements = $("#contacts").find("tr").length;

    $("#contactList").find("tbody").append("<tr><th>" + tableElements + "</th><th class='contactName'>" + name + " " + surname + "</th></tr>");
  });
});
