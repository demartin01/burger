

$(document).on("click", "#addBurger", function () {
    let newBurger = { burger_name: $("#newBurger").val().trim()};
  
    $.ajax({
      url: "/burgers/create",
      method: "POST",
      data: newBurger
    })
    .then(()=>location.reload())
  })
  
$(document).on("click", ".devour", function () {

    $.ajax({
      url: "/burgers/" + this.id,
      method: "PUT"
    })
    .then(()=>location.reload())
  })
  
  $(document).on("click", ".delBurger", function () {
  
    $.ajax({
      url: "/burgers/" + this.id,
      method: "DELETE"
    })
    .then(()=>location.reload())
  })