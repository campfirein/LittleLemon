import { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: { value: "", isTouched: false },
    role: "individual",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "password") {
      setFormData({
        ...formData,
        password: { ...formData.password, value },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handlePasswordBlur = () => {
    setFormData({
      ...formData,
      password: { ...formData.password, isTouched: true },
    });
  };

  const getIsFormValid = () => {
    return (
      formData.firstName.trim() !== "" &&
      validateEmail(formData.email) &&
      formData.password.value.length >= 8 &&
      ["individual", "business"].includes(formData.role)
    );
  };

  const clearForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: { value: "", isTouched: false },
      role: "individual",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (getIsFormValid()) {
      console.log("Form Submitted:", formData);
      clearForm();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password.value}
          onChange={handleChange}
          onBlur={handlePasswordBlur}
        />
        {formData.password.isTouched && formData.password.value.length < 8 && (
          <PasswordErrorMessage />
        )}
      </label>
      <label>
        Role:
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
        >
          <option value="individual">Individual</option>
          <option value="business">Business</option>
        </select>
      </label>
      <button type="submit" disabled={!getIsFormValid()}>
        Submit
      </button>
    </form>
  );
}

function PasswordErrorMessage() {
  return (
    <p className="error">Password must be at least 8 characters long.</p>
  );
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export default RegistrationForm;