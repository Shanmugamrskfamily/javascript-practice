const currentYear = new Date().getFullYear();
      document.getElementById("copyright-year").textContent = currentYear;
      const modal = document.getElementById("myModal");
      const modalOverlay = document.getElementById("modalOverlay");
      const showModalBtn = document.getElementById("showModalBtn");
      const showModalBtn2 = document.getElementById("showModalBtn2");
      const showModalBtn3 = document.getElementById("showModalBtn3");
      const showModalBtn4 = document.getElementById("showModalBtn4");
      const modalBody = document.getElementById("modalBody");
      const modalTitle = document.getElementById("modalTitle");

      const modalData = [
        {
          title: "Modal 1",
          content: "This is Modal 1 content.",
        },
        {
          title: "Modal 2",
          content: "This is Modal 2 content.",
        },
        {
          title: "Modal 3",
          content: "This is Modal 3 content.",
        },
        {
          title: "Modal 4",
          content: "This is Modal 4 content.",
        },
      ];

      function showModal() {
        const index = this.getAttribute("data-index");
        modal.style.display = "block";
        modalOverlay.style.display = "block";
        modalTitle.innerHTML = `<h1>${modalData[index].title}</h1>`;
        modalBody.innerHTML = `<p>${modalData[index].content}</p>`;
      }

      function hideModal() {
        modal.style.display = "none";
        modalOverlay.style.display = "none";
      }

      showModalBtn.addEventListener("click", showModal);
      showModalBtn2.addEventListener("click", showModal);
      showModalBtn3.addEventListener("click", showModal);
      showModalBtn4.addEventListener("click", showModal);
      modal.querySelector(".close").addEventListener("click", hideModal);
      window.addEventListener("click", (event) => {
        if (event.target === modal) {
          hideModal();
        }
      });
      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          hideModal();
        }
      });