// Generated by CoffeeScript 1.9.3
(function() {
  window.addEventListener("load", function() {
    var ref, ref1;
    if (!window.location.toString().includes("autoLanguage=no")) {
      if (!window.location.toString().includes("index.html")) {
        if ((ref = navigator.language) === "en" || ref === "en-US") {
          window.location = "index.html";
        }
      }
      if (!window.location.toString().includes("index-eo.html")) {
        if (navigator.language === "eo") {
          window.location = "index-eo.html";
        }
      }
      if (!window.location.toString().includes("index-pt.html")) {
        if ((ref1 = navigator.language) === "pt" || ref1 === "pt-BR") {
          return window.location = "index-pt.html";
        }
      }
    }
  });

}).call(this);
