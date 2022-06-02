$(document).ready(function() {
  $("form#userInfo").submit(function(event) {
    event.preventDefault();
    const fullName = $("#firstName").val();
    const favColor = $("#favColor").val();
    const timeZone = $("#timeZone").val();
    const age = $("input:radio[name=age]:checked").val();
    const date = $("#date").val();
    const result = ("Thanks for taking our survey!");
    alert(result);
  });
});