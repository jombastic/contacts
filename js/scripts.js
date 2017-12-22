$(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var name = $("#name").val();
    var surname = $("#surname").val();
    var address = $("#address").val();
    var emailAddress = $("#emailAddress").val();
    var numberType = $("#numberType").val();
    var phoneNumber = $("#phoneNumber").val();

    var rowNumber = $("#contactList").find("div.contactEntry").length;

    $("#contactList").append("<div class='contactEntry'><strong>#" + rowNumber + "<span class='contactName'> " + name + " " + surname + "</span></strong><div class='hidden-data'><p class='address'" + address + "</p><p class='emailAddress'>" + emailAddress + "</p><p class='numberType'>" + numberType + "</p><p class='phoneNumber'>" + phoneNumber + "<p></div>");
  });
});
