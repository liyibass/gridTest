export class EventHandler {
  constructor() {
    this.menuIcon = document.querySelector(".header__menu-icon");
    this.menuContent = document.querySelector(".options");

    this.boxSection = Array.prototype.slice.call(
      document.querySelectorAll(".box")
    );

    this.imgSection = Array.prototype.slice.call(
      document.querySelectorAll(".img")
    );

    this.infoSection = document.querySelector(".info");

    this.menuIconEventHandler();
    this.boxAppear();
    this.imgAppear();
    this.infoSectionAppear();
  }

  menuIconEventHandler() {
    console.log("fired");

    this.menuIcon.addEventListener("click", () => {
      this.ToggleTheMenu();
      this.boxAppear();
    });
  }

  ToggleTheMenu() {
    this.menuContent.classList.toggle("options--is-visible");
    this.menuContent.classList.toggle("options--is-expanded");
    this.menuIcon.classList.toggle("header__menu-icon--close-x");
  }

  boxAppear() {
    const boxObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // console.log("appear");
        // 如果目標未出現則return
        if (!entry.isIntersecting) return;
        // 目標完全出現則顯示
        entry.target.classList.add("box-appear");
        // 並且取消觀察
        boxObserver.unobserve(entry.target);
      });
    });

    this.boxSection.forEach((box) => {
      boxObserver.observe(box);
    });
  }

  imgAppear() {
    const imgObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("img-appear");
        imgObserver.unobserve(entry.target);
      });
    });

    this.imgSection.forEach((img) => {
      imgObserver.observe(img);
    });
  }

  infoSectionAppear() {
    console.log(this.infoSection);

    const infoSectionObserver = new IntersectionObserver((entry) => {
      console.log(entry);
      if (!entry[0].isIntersecting) return;

      entry[0].target.classList.add("info--in");
    });

    infoSectionObserver.observe(this.infoSection);
  }
}
