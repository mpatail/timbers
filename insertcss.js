    window.addEventListener("load", () => {
      // (B) GET HTML ELEMENT
      var newcsss = document.getElementById(“body”);
      console.log(newcss);

      // (D) THIS WILL APPEND TO THE CONTENTS
      newcss.innerHTML += " is <strong>NOT</strong> John Wick.";
