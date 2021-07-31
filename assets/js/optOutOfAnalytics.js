(function() {
  'use strict';
  window.addEventListener('load', function() {
    var opt = $('#optOutOfAnalytics');
    const inString = "Google Analtyics ist auf fundkorb.de aktiviert.";
    const outString = "Google Analtyics ist auf fundkorb.de deaktiviert.";
    if (Cookies.get('optOutOfAnalytics')) {
      opt.prop("checked", false); 
      $("#optOutLabel").text(outString);
    } else {
      opt.prop("checked", true); 
      $("#optOutLabel").text(inString);
    }
    opt.click(function() {
      if(opt.prop("checked")) {
        console.log('removing cookie');
        Cookies.remove('optOutOfAnalytics', { sameSite: 'strict' });
        $("#optOutLabel").text(inString);
      } else {
        console.log('setting cookie');
        Cookies.set('optOutOfAnalytics', true, {
          sameSite: 'strict',
          expires: 10 * 365
        })
        $("#optOutLabel").text(outString);
      }
    });
  }, false);
})();

