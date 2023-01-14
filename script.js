let btn = document.querySelector("#toggleBar");

btn.addEventListener("click", () => {
  let sideBar = document.querySelector("#sideBar");
  sideBar.classList.remove("-right-80");
  sideBar.classList.add("right-0");

  let sideBarWrapper = document.querySelector("#sideBarWrapper");
  sideBarWrapper.classList.remove("opacity-0");
  sideBarWrapper.classList.remove("invisible");
});

document.body.addEventListener("click", (e) => {
  if (e.target.id === "sideBarWrapper") {
    let sideBar = document.querySelector("#sideBar");
    sideBar.classList.add("-right-80");
    sideBar.classList.remove("right-0");

    let sideBarWrapper = document.querySelector("#sideBarWrapper");
    sideBarWrapper.classList.add("opacity-0");
    sideBarWrapper.classList.add("invisible");
  }
});
