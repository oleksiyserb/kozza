export const select = {
  methods: {
    toggleMenu() {
      if ("active" === this.$refs.select.getAttribute("data-state")) {
        this.$refs.select.setAttribute("data-state", "");
      } else {
        this.$refs.select.setAttribute("data-state", "active");
      }
    },
    selectInput(e) {
      this.$refs.title.textContent = e.target.textContent;
      this.$refs.select.setAttribute("data-state", "");
    }
  }
};
