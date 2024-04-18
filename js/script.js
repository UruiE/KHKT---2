//nav bar

document
  .querySelector(".hamburger-menu")
  .addEventListener("click", function () {
    document.querySelector(".bar").classList.toggle("animate");
    var mobileNav = document.querySelector(".mobile-nav");
    mobileNav.classList.toggle("show");
  });
//Scroll to top function
const button = document.querySelector(".btn");

const displayButton = () => {
  window.addEventListener("scroll", () => {
    console.log(window.scrollY);

    if (window.scrollY > 300) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  });
};

const scrollToTop = () => {
  button.addEventListener("click", () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    console.log(event);
  });
};

displayButton();
scrollToTop();


function getListStudent() {
  console.log("fetch api get students")
  fetch("http://localhost:3002/").then(function (response){
    return response.json();
  })
  .then(function(students) {
    console.log(students)
    var htmls = students.map(function(student){
      return `
      <div class="name" uid= "${student.uid}" onclick="aboutStudentClick('${student.uid}')">${student.name}</div>
      `
    })
    htmls.join('')

    htmls.push(`<div class="name" onclick="aboutClassClick()">Sơ Đồ Lớp</div>`)

    document.getElementById('dropdown-students').innerHTML = htmls;
  })
  .catch (function(err){
    console.log('Cos looix2', err);
  })

}
getListStudent();

/*CP*/
let iframe = document.getElementById("iframe");
fadeOut(iframe, 1000);

$(document).ready(function () {
  $("iframe#iframe_id").attr("src", "iframe_url");
});



function aboutTBNClick() {
  document.getElementById("iframe").setAttribute("src", "tbn.html");
}

function aboutNQHClick() {
  document.getElementById("iframe").setAttribute("src", "nqh.html");
}

function aboutNHDClick() {
  document.getElementById("iframe").setAttribute("src", "nhd.html");
}

function aboutVGNClick() {
  document.getElementById("iframe").setAttribute("src", "vgn.html");
}

function aboutNDTClick() {
  document.getElementById("iframe").setAttribute("src", "ndt.html");
}

function aboutClassClick() {
  document.getElementById("iframe").setAttribute("src", "sdl.html");
}

//fade bitch
