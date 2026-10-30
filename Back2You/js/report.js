/**
 * Back2You – Report Lost / Found forms
 */

document.addEventListener("DOMContentLoaded", () => {
  // Populate category select
  const categorySelect = document.getElementById("category");
  if (categorySelect && window.CATEGORIES) {
    window.CATEGORIES.forEach(c => {
      const opt = document.createElement("option");
      opt.value = c;
      opt.textContent = c;
      categorySelect.appendChild(opt);
    });
  }

  // Image preview
  const imageInput = document.getElementById("image");
  const preview = document.getElementById("imagePreview");
  const fileUpload = document.querySelector(".file-upload");

  if (imageInput && preview) {
    imageInput.addEventListener("change", () => {
      const file = imageInput.files[0];
      if (file) {
        if (file.size > 5 * 1024 * 1024) {
          UI.showToast("Image must be smaller than 5 MB", "error");
          imageInput.value = "";
          return;
        }
        const reader = new FileReader();
        reader.onload = (e) => {
          preview.src = e.target.result;
          preview.style.display = "block";
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Drag & drop visual
  if (fileUpload) {
    ["dragenter", "dragover"].forEach(evt => {
      fileUpload.addEventListener(evt, (e) => {
        e.preventDefault();
        fileUpload.classList.add("dragover");
      });
    });
    ["dragleave", "drop"].forEach(evt => {
      fileUpload.addEventListener(evt, (e) => {
        e.preventDefault();
        fileUpload.classList.remove("dragover");
      });
    });
    fileUpload.addEventListener("drop", (e) => {
      if (imageInput && e.dataTransfer.files.length) {
        imageInput.files = e.dataTransfer.files;
        imageInput.dispatchEvent(new Event("change"));
      }
    });
  }

  // Form submit
  const reportForm = document.getElementById("reportForm");
  if (reportForm) {
    reportForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      if (!Validation.validateReport(reportForm)) {
        UI.showToast("Please fix the highlighted fields", "error");
        return;
      }

      const submitBtn = reportForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = "Submitting...";

      const formData = {
        title: reportForm.querySelector("#title").value.trim(),
        category: reportForm.querySelector("#category").value,
        location: reportForm.querySelector("#location").value.trim(),
        date: reportForm.querySelector("#date").value,
        description: reportForm.querySelector("#description").value.trim(),
        type: reportForm.dataset.type || "lost",
        hasImage: !!(imageInput && imageInput.files.length)
      };

      try {
        const result = await API.submitReport(formData);
        UI.showToast(result.message, "warning", 5000);

        // Reset form after short delay
        setTimeout(() => {
          reportForm.reset();
          if (preview) {
            preview.style.display = "none";
            preview.src = "";
          }
        }, 1500);
      } catch (err) {
        UI.showToast("Something went wrong. Please try again.", "error");
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    });
  }
});
