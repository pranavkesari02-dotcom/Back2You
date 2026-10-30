/**
 * Back2You – Client-side Form Validation
 * Simple, beginner-friendly helpers
 */

const Validation = {
  /**
   * Show error on a form group
   */
  showError(input, message) {
    const group = input.closest(".form-group");
    if (!group) return;
    group.classList.add("has-error");
    let errorEl = group.querySelector(".form-error");
    if (!errorEl) {
      errorEl = document.createElement("div");
      errorEl.className = "form-error";
      group.appendChild(errorEl);
    }
    errorEl.textContent = message;
  },

  /**
   * Clear error from a form group
   */
  clearError(input) {
    const group = input.closest(".form-group");
    if (!group) return;
    group.classList.remove("has-error");
    const errorEl = group.querySelector(".form-error");
    if (errorEl) errorEl.textContent = "";
  },

  /**
   * Clear all errors in a form
   */
  clearAll(form) {
    form.querySelectorAll(".form-group").forEach(g => g.classList.remove("has-error"));
    form.querySelectorAll(".form-error").forEach(e => (e.textContent = ""));
  },

  /**
   * Basic email check
   */
  isEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  },

  /**
   * Validate login form
   * Returns true if valid
   */
  validateLogin(form) {
    this.clearAll(form);
    let valid = true;

    const email = form.querySelector("#email");
    const password = form.querySelector("#password");

    if (!email.value.trim()) {
      this.showError(email, "Email is required");
      valid = false;
    } else if (!this.isEmail(email.value.trim())) {
      this.showError(email, "Please enter a valid email");
      valid = false;
    }

    if (!password.value) {
      this.showError(password, "Password is required");
      valid = false;
    } else if (password.value.length < 6) {
      this.showError(password, "Password must be at least 6 characters");
      valid = false;
    }

    return valid;
  },

  /**
   * Validate registration form
   */
  validateRegister(form) {
    this.clearAll(form);
    let valid = true;

    const name = form.querySelector("#fullName");
    const email = form.querySelector("#email");
    const password = form.querySelector("#password");
    const confirm = form.querySelector("#confirmPassword");

    if (!name.value.trim() || name.value.trim().length < 2) {
      this.showError(name, "Please enter your full name");
      valid = false;
    }

    if (!email.value.trim()) {
      this.showError(email, "Email is required");
      valid = false;
    } else if (!this.isEmail(email.value.trim())) {
      this.showError(email, "Please enter a valid email");
      valid = false;
    }

    if (!password.value || password.value.length < 6) {
      this.showError(password, "Password must be at least 6 characters");
      valid = false;
    }

    if (password.value !== confirm.value) {
      this.showError(confirm, "Passwords do not match");
      valid = false;
    }

    return valid;
  },

  /**
   * Validate report lost / found form
   */
  validateReport(form) {
    this.clearAll(form);
    let valid = true;

    const title = form.querySelector("#title");
    const category = form.querySelector("#category");
    const location = form.querySelector("#location");
    const date = form.querySelector("#date");
    const description = form.querySelector("#description");

    if (!title.value.trim() || title.value.trim().length < 3) {
      this.showError(title, "Please enter a clear item name (min 3 characters)");
      valid = false;
    }

    if (!category.value) {
      this.showError(category, "Please select a category");
      valid = false;
    }

    if (!location.value.trim()) {
      this.showError(location, "Please enter the location");
      valid = false;
    }

    if (!date.value) {
      this.showError(date, "Please select a date");
      valid = false;
    }

    if (!description.value.trim() || description.value.trim().length < 10) {
      this.showError(description, "Please add a short description (min 10 characters)");
      valid = false;
    }

    return valid;
  },

  /**
   * Validate claim form
   */
  validateClaim(form) {
    this.clearAll(form);
    let valid = true;

    const message = form.querySelector("#claimMessage");

    if (!message.value.trim() || message.value.trim().length < 15) {
      this.showError(message, "Please explain why this item belongs to you (min 15 characters)");
      valid = false;
    }

    return valid;
  }
};

window.Validation = Validation;
