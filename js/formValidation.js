document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Evitar el envío por defecto

  // Capturar los elementos del formulario
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  // Validar cada campo
  const isValidName = validateField(nameInput, "Por favor, ingresa tu nombre.");
  const isValidEmail = validateEmail(
    emailInput,
    "Por favor, ingresa un email válido."
  );
  const isValidMessage = validateField(
    messageInput,
    "Por favor, escribe un mensaje."
  );

  // Si todos los campos son válidos, mostrar mensaje de confirmación
  if (isValidName && isValidEmail && isValidMessage) {
    const confirmationMessage = document.getElementById("confirmationMessage");
    confirmationMessage.style.display = "block";

    // Limpiar el formulario
    document.getElementById("contactForm").reset();

    // Limpiar los estilos de error
    clearError(nameInput);
    clearError(emailInput);
    clearError(messageInput);
  }
});

// Función para validar un campo vacío
function validateField(input, errorMessage) {
  if (input.value.trim() === "") {
    showError(input, errorMessage);
    return false;
  } else {
    clearError(input);
    return true;
  }
}

// Función específica para validar el email
function validateEmail(input, errorMessage) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (input.value.trim() === "" || !emailRegex.test(input.value)) {
    showError(input, errorMessage);
    return false;
  } else {
    clearError(input);
    return true;
  }
}

// Mostrar error: resalta el borde en rojo y añade un mensaje de error
function showError(input, message) {
  input.style.borderColor = "red";

  // Crear o actualizar el mensaje de error
  let errorElement = input.nextElementSibling;
  if (!errorElement || !errorElement.classList.contains("error-message")) {
    errorElement = document.createElement("p");
    errorElement.classList.add("error-message");
    errorElement.style.color = "red";
    errorElement.style.fontSize = "0.9em";
    errorElement.style.marginTop = "5px";
    input.parentNode.insertBefore(errorElement, input.nextSibling);
  }
  errorElement.textContent = message;
}

// Eliminar los errores visuales y de texto
function clearError(input) {
  input.style.borderColor = "";

  const errorElement = input.nextElementSibling;
  if (errorElement && errorElement.classList.contains("error-message")) {
    errorElement.remove();
  }
}
