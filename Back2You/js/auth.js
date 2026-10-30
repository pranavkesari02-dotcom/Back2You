/**
 * Back2You – Authentication (Phase 2 – Simulated)
 * Real Supabase auth will replace this in Phase 3.
 * Current behaviour: form validation + friendly messages only.
 * No real sessions or database writes yet.
 */

const Auth = {
  /**
   * Simulated login – shows message only
   */
  handleLogin(form) {
    if (!Validation.validateLogin(form)) {
      UI.showToast("Please fix the errors in the form", "error");
      return;
    }

    const email = form.querySelector("#email").value.trim();
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    submitBtn.disabled = true;
    submitBtn.textContent = "Signing in...";

    // Simulate network delay
    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;

      UI.showToast(
        "Demo mode: Login is simulated. Real authentication will work after Supabase is connected (Phase 3).",
        "warning",
        5000
      );

      // For demo purposes we can pretend success and redirect
      // In real phase this will check actual credentials
      console.log("[Demo] Login attempt for:", email);
    }, 900);
  },

  /**
   * Simulated registration
   */
  handleRegister(form) {
    if (!Validation.validateRegister(form)) {
      UI.showToast("Please fix the errors in the form", "error");
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    submitBtn.disabled = true;
    submitBtn.textContent = "Creating account...";

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;

      UI.showToast(
        "Demo mode: Account creation is simulated. Real registration comes in Phase 3 with Supabase.",
        "warning",
        5000
      );

      console.log("[Demo] Register attempt");
    }, 1000);
  },

  /**
   * Simulated logout
   */
  handleLogout() {
    UI.showToast("Demo mode: Logout is simulated.", "info");
    // In later phase: clear session and redirect to login
  },

  /**
   * Check if user appears logged in (placeholder)
   * Always returns false in Phase 2
   */
  isLoggedIn() {
    return false;
  },

  /**
   * Get current user (placeholder)
   */
  getCurrentUser() {
    return null;
  }
};

// Attach form listeners when pages load
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      Auth.handleLogin(loginForm);
    });
  }

  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      Auth.handleRegister(registerForm);
    });
  }
});

window.Auth = Auth;
