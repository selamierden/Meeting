$(document).ready(function() {
    var users = [
        { username: "selami", password: "ripple"},
        { username: "cemil", password: "bigmac"},
        { username: "elyasa", password: "cashier"},
        { username: "talha", password: "oç"}
    ];

    $("#login-div").on("submit", function(e) {
        e.preventDefault();

        const username = $("#username").val();
        const password = $("#password").val();

        var currentUser = users.find(user => user.username === username && user.password === password);

        if(currentUser){
            localStorage.setItem("currentUser", JSON.stringify(currentUser));
            window.location.href = "dashboard.html";
        } else {
            window.alert("Yanlış kullanıcı adı veya şifre!");
        }
    });
});

