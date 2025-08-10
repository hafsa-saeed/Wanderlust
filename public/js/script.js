(() => {
  "use strict";

  //Fetch all the form we eant to apply customs Bootstrao validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  //loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();
