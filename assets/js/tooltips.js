---
layout: blank
---

$.getJSON($(location).attr('origin')+"{{ site.basurl }}"+"/assets/json/glossar.json", function(data) {
  $("a[title='Glossar']").add("a[title='Glossar-']").each( function() {
    var entry = data.find(x => [x.schlagwort, x.synonym, x.slug].includes($(this).attr("href")));
    if(typeof entry !== 'undefined') {
      var synonym = (typeof entry.synonym !== 'undefined' && entry.synonym != '') ? " (" + entry.synonym + ")" : "";
      var tooltipText = "";
      tooltipText += ($(this).attr("title") === "Glossar") ? "<strong>" + entry.schlagwort + synonym + "</strong> <br />" : "";
      tooltipText += entry.output;
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
