import React from "react";

export default function validate(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Masukkan Username";
  }

  // Email
  if (!values.email) {
    errors.email = "Masukkan Email";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is Invalid";
  }

  // Password
  if (!values.password) {
    errors.password = "Masukkan Password";
  } else if (values.password.length < 5) {
    errors.password = "Password minimal 5 karakter";
  }

  if (!values.password2) {
    errors.password2 = "Password is required";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Passwords do not match";
  }

  return errors;
}
