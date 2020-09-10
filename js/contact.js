$(document).ready(function () {
    $("form").submit(function (event) {
        event.preventDefault();
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var subject = document.getElementById("subject").value;
        var message = document.getElementById("message").value;

        var newName = name.toUpperCase();
        var user = (newName + email + subject + message);

        if (user != null) {
            document.getElementById("name1").innerHTML =
                "Hello " + newName + "!";
            document.getElementById("demo1").innerHTML =
                "We have received your Message below"
            document.getElementById("email1").innerHTML =
                "Email  :" + email;
            document.getElementById("subject1").innerHTML =
                "Subject  " + subject;
            document.getElementById("message1").innerHTML =
                "Message;  " + message;
            document.getElementById("demo").innerHTML =
                "THANK YOU!!"
        }

        $('#card-body').hide();
        $('.card1').show();

        $("form").reset();

    });

});