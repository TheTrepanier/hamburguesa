$(document).ready(function () {
    $(".munch-btn").on("click", function(event) {
        let id = $(this).data("id");
        let burgerMonch = {
            burger: $(this).data("burger")
        }

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: burgerMonch
        }).then(function () {
            location.reload();
        });
    });
});