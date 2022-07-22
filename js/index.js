// /* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mNav").style.width = "200px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mNav").style.width = "0";
  }

function nMode() {
    document.body.style.backgroundColor = "black";
    document.getElementById("relText").style.color = "white";
    document.getElementById("relTexts").style.color = "white";
    document.getElementById("relTexts1").style.color = "white";
    document.getElementById("night").style.display = "none";
    document.getElementById("day").style.display = "flex";
    document.getElementById("main").style.boxShadow = "0px 15px 10px -15px white";
    // 0px 15px 10px -15px #111
}

function lMode() {
    document.getElementById("night").style.display = "flex";
    document.body.style.backgroundColor = "white";
    document.getElementById("relText").style.color = "black";
    document.getElementById("relTexts").style.color = "black";
    document.getElementById("relTexts1").style.color = "black";
    document.getElementById("day").style.display = "none";
}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
// function openNav() {
//     document.getElementById("mNav").style.width = "250px";
//     document.getElementById("main").style.marginLeft = "250px";
//     document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
//   }
  
//   /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
//   function closeNav() {
//     document.getElementById("mNav").style.width = "0";
//     document.getElementById("main").style.marginLeft = "0";
//     document.body.style.backgroundColor = "white";
//   }