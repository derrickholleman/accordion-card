function togglediv(id) {
    document.querySelectorAll(".panel").forEach(function(div) {
      if (div.id == id) {
        // Toggle specified DIV
        div.style.display = div.style.display == "block" ? "none" : "block";
      } else {
        // Hide other DIVs
        div.style.display = "none";
      }
    });
  }