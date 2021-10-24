$(function() {
    $("#kontaktformular").submit(function() {
       console.log($("#subject").value())
       if ($("#subject").value() == "")
        $("#subject").value("Kein Betreff")
       return false
    })
})
