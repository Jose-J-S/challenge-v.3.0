"use strict";

const input = document.querySelector(".input");
const output = document.querySelector(".output");
const btnCopy = document.querySelector(".btn-copy");

/* VALIDAR */
function isValid(text) {
  const validator = text.match(/^[a-z\s]*$/);
  if (validator === null) return false;
  return true;
}

/* ENCRIPTAR */
function onEncrypt() {
  const trimedText = input.value.trim();

  if (!isValid(trimedText)) {
    input.value = "";
    input.focus();
    Swal.fire({
      title: "Oops! Texto inválido",
      text: "Solo debes escribir palabras",
      icon: "error",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    });
    return;
  }

  const encryptedText = encrypt(trimedText);

  output.value = encryptedText;
  output.style.backgroundImage = "none";
  input.value = "";
  input.focus();
  btnCopy.style.display = "block";
}

function encrypt(encryptString) {
  const keys = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  encryptString = encryptString.toLowerCase();

  keys.forEach(function convertir([key, value]) {
    encryptString = encryptString.replaceAll(key, value);
  });
  return encryptString;
}

/* DESENCRIPTAR */
function onDecrypt() {
  const trimedText = input.value.trim();

  if (!isValid(trimedText)) {
    input.value = "";
    input.focus();
    Swal.fire({
      title: "Oops! Texto inválido",
      text: "Solo debes escribir palabras",
      icon: "error",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    });
    return;
  }

  const decryptedText = decrypt(trimedText);

  output.value = decryptedText;
  // output.style.backgroundImage = "none";
  input.value = "";
  input.focus();
  btnCopy.style.display = "block";
}

function decrypt(decryptString) {
  const keys = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  decryptString = decryptString.toLowerCase();

  keys.forEach(function convertir([key, value]) {
    decryptString = decryptString.replaceAll(value, key);
  });
  return decryptString;
}

/* COPIAR TEXTO */
function onCopy() {
  output.select();
  navigator.clipboard.writeText(output.value);

  Swal.fire({
    title: "ONE | Alura LATAM",
    text: "Guardado en el portapapeles",
    icon: "success",
    showConfirmButton: false,
    toast: true,
    timer: 1500,
    timerProgressBar: true,
    position: "bottom-end",
  });

  input.focus();
}
