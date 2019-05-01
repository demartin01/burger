

$(document).on("click", "#text-enter-button", function () {
    let newBurger = { burger_name: $("#enter_text").val().trim()};
  
    $.ajax({
      url: "/burgers/create",
      method: "POST",
      data: newBurger
    })
    .then(()=>location.reload())
  })
  
  $(document).on("click", ".fa-trash", function () {
    let id = $(this).attr("id");
  
    $.ajax({
      url: "/burgers/" + id,
      method: "DELETE"
    })
    .then(()=>location.reload())
  })