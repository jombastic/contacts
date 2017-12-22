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

    $("#contactList").append("<div class='contactEntry'><strong>#" + rowNumber + "<span class='contactName'> " + name + " " + surname + "</span></strong><div class='hidden-data'><p class='address'>" + address + "</p><p class='emailAddress'>" + emailAddress + "</p><p class='numberType'>" + numberType + "</p><p class='phoneNumber'>" + phoneNumber + "<p></div>");

    $(".contactEntry").click(function() {
      var header = $(this).find(".contactName").text();
      var modalAddress = $(this).find(".address").text();
      var modalEmail = $(this).find(".emailAddress").text();
      var modalNumType = $(this).find(".numberType").text();
      var modalPhoneNum = $(this).find(".phoneNumber").text();

      $(".modal-header h2").text(header);
      $("#modalAddress").text(modalAddress);
      $("#modalEmail").text(modalEmail);
      $("#modalPhoneNum").text(modalPhoneNum);
      $("#modalPhoneNum").append("<br/><small><i>" + modalNumType + "</i></small>");

      $(".modal").show();
      $(".close").click(function() {
        $(".modal").hide();
      });
    });
  });
});
