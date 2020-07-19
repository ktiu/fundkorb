---
layout: blank
---

$.getJSON($(location).attr('origin')+"{{ site.basurl }}"+"/assets/json/glossar.json", function(data) {
  $("a[title='Glossar']").each( function() {
    var entry = data.find(x => [x.schlagwort, x.synonym].includes($(this).attr("href")));
    if(typeof entry !== 'undefined') {
      var synonym = (typeof entry.synonym !== 'undefined') ? " (" + entry.synonym + ")" : "";
      var tooltipText = "<strong>" + entry.schlagwort + synonym + "</strong> <br />" + entry.definition + "";
    } else {
      var tooltipText = $(this).attr("href");
    }
    $(this).replaceWith($('<span class="glossar" data-toggle="tooltip" data-placement="top" title="' + tooltipText + '">' + this.innerHTML + '</span>'));
  });
}).done( function() {
  $('[data-toggle="tooltip"]').tooltip({
    html: true
  });
});
