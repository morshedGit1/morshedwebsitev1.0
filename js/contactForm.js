$(document).ready(function() {

  var $form = $('#contactForm');
  var $field_subject = $form.find('input[name="subject"]');
  var $field_email = $form.find('input[name="email"]');
  var $field_message = $form.find('textarea[name="message"]');
  var $form_submit = $form.find('input[name="submit"]');
  $form_submit.click(function(e) {

      var email_val = $field_email.val();
      var subject_val = $field_subject.val();
      var message_val = $field_message.val();

      e.preventDefault(); // stop default form submit
      /* validation logic goes here */
      $('.notification').removeClass(" success error info animated slideInRight");
      $.ajax({
        url: "//formspree.io/hello@morshedapp.com",
        method: "POST",
        data: {
          "email": email_val,
          "subject": subject_val,
          "message": message_val
        },
        dataType: "json",
        beforeSend: function() {
          // $('.notification').addClass(" info animated slideInRight");
          // $('.notification infoT')
          // setTimeout(function() {
          //   $('.notification').removeClass("info animated slideInRight");
          //   $('.notification').addClass(" animated slideOutRight");
          // }, 3000);
        },
        success: function() {
          $form[0].reset(); // reset form fields
          $('.notification').addClass(" success animated slideInRight");
          $('.notification .successText').css("display", "block");
          setTimeout(function() {
            $('.notification').removeClass("success animated slideInRight");
            $('.notification').addClass(" animated slideOutRight");
            $('.notification .successText').css("display", "none");
          }, 3000);
        },
        fail: function() {
          $('.notification').addClass(" error animated slideInRight");
          $('.notification .errorText').css("display", "block");
          setTimeout(function() {
            $('.notification').removeClass(" error animated slideInRight");
            $('.notification').addClass(" animated slideOutRight");
            $('.notification .errorText').css("display", "none");
          }, 3000);
        }
      });


  });
});
