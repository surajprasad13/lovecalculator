$(document).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    var name1 = $("#name1").val();
    var name2 = $("#name2").val();

    var url = "https://love-calculator.p.rapidapi.com/getPercentage?";

    $.ajax({
      method: "GET",
      datatype: "json",
      headers: {
        "x-rapidapi-host": "love-calculator.p.rapidapi.com",
        "x-rapidapi-key": "137332e08cmsh83a73a314e0a5b2p13aa8djsn84ba447f737f",
      },
      url: url + "fname=" + name1 + "&" + "sname=" + name2,
      success: function (data) {},
    }).done(function (data) {
      const detail = data["percentage"];
      $(".result p").html(data["percentage"]);
      $(".result textarea").html(data["result"]);
      if (data["percentage"] < 50) {
        $("textarea").css("background-color", "red").css("color", "white");
        $("i").css("color", "red").attr("class","fas fa-heart-broken");
      } else {
        $("textarea").css("background-color", "green").css("color", "white");
        $("i").css("color", "green").attr("class", "fas fa-heartbeat");
      }
    });

    $("#img1").attr("src", `https://joeschmoe.io/api/v1/male/${name1}`);
    $("#img2").attr("src", `https://joeschmoe.io/api/v1/female/${name2}`);
  });
});
