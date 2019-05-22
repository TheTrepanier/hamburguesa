$(document).ready(function () {
    var nullBurgers = [ 
        "void",
        "negated",
        "ineffectual",
        "nugatory",
        "sterile",
        "unenforceable",
        "worthless",
        "vacuous"]
    $(".munch-btn").on("click", function(event) {
        let id = $(this).data("id");
        let burgerMonch = {
            burger: $(this).data("burger")
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: burgerMonch
        }).then(function () {
            location.reload();
        });
    });
    $("#sling-burger").on("click", function() {
        let burgerName = $("#burger-type").val();
        if (burgerName != "") {
            let slungBurger = {
                burger: burgerName
            };
            $.ajax("/api/burgers", {
                type: "POST",
                data: slungBurger
            }).then(function() {
                location.reload();
            });
        } else {
            let r = Math.floor(Math.random() * nullBurgers.length);
            burgerName = nullBurgers[r];
            let slungBurger = {
                burger: burgerName
            };
            $.ajax("/api/burgers", {
                type: "POST",
                data: slungBurger
            }).then(function() {
                location.reload();
            });
        }
    });
});