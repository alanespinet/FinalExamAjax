$("#contact-div").find("a").on("click", function(e){
  e.preventDefault();
  var $form = $("#card-text");
  $form.html('<form method="post"></form>');
  $form.append('<span>Name:</span><input type="text" name="name" id="form-nm">');
  $form.append('<span>Phone number:</span><input type="text" name="phone" id="form-ph">');
  $form.append('<span>Email:</span><input type="text" name="email" id="form-e">');
  $form.append('<button type="submit">Submit</button>');
  $("#contact-div").find("a").hide();
});


$("#card-text").on("click", "button", function(){
  var name = $("#card-text").find("#form-nm").val();
  var phone = $("#card-text").find("#form-ph").val();
  var email = $("#card-text").find("#form-e").val();

  var qs = "name=" + name + "&phone=" + phone + "&email=" + email;

  $.ajax({
    url: "http://fvi-grad.com:4004/fakeform?" + qs,
    success: function(resp, txt, xhr){
      alert(resp);
    },
    method: "POST",
    error: function(error){
      alert("error " + error);
    }
  });
});
