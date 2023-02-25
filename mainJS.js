  //////////////////////////////////// PROGRESSBAR ////////////////////////////////////
window.addEventListener("scroll", progressAll);

function progressAll() {
  const triggerProgress = (window.innerHeight / 8) * 4;
  const progressTop = document.getElementById("about-b");

  const progressStart = progressTop.getBoundingClientRect().top;

  if (progressStart < triggerProgress) {

    const progress = document.getElementById("progressDoneHtml");
    progress.style.width = progress.getAttribute("data-done");
    progress.style.opacity = 1;

    const progressCss = document.getElementById("progressDoneCss");
    progressCss.style.width = progressCss.getAttribute("data-done");
    progressCss.style.opacity = 1;

    const progressSass = document.getElementById("progressDoneCPP");
    progressSass.style.width = progressSass.getAttribute("data-done");
    progressSass.style.opacity = 1;

    const progressBootstrap = document.getElementById("progressDoneAndroid");
    progressBootstrap.style.width = progressBootstrap.getAttribute("data-done");
    progressBootstrap.style.opacity = 1;

    const progressJavscript = document.getElementById("progressDoneJavascript");
    progressJavscript.style.width = progressJavscript.getAttribute("data-done");
    progressJavscript.style.opacity = 1;

    const progressReact = document.getElementById("progressDonePHP");
    progressReact.style.width = progressReact.getAttribute("data-done");
    progressReact.style.opacity = 1;
  }
}


//////////////////////////////////// READ MORE/LESS ////////////////////////////////////
function display1() {
  const txt1 = document.querySelector(".readMore1");
  const btn1 = document.querySelector(".btnRead1");

  if(btn1.textContent == "Read More") {
    btn1.innerHTML = "Read Less";
    txt1.style = "display:inline";
  } else {
    btn1.innerHTML = "Read More";
    txt1.style = "display:none";
  }
}

function display2() {
  const txt2 = document.querySelector(".readMore2");
  const btn2 = document.querySelector(".btnRead2");

  if(btn2.textContent == "Read More") {
    btn2.innerHTML = "Read Less";
    txt2.style = "display:inline";
  } else {
    btn2.innerHTML = "Read More";
    txt2.style = "display:none";
  }
}


//////////////////////////////////// FORM LABEL ANIMATION ////////////////////////////////////
const labels = document.querySelectorAll( "label" );

labels.forEach( function( label ) {
  label.innerHTML = label.innerText
    .split( "" )
    .map(function(letter, idx){
      return `<span style='transition-delay:${idx * 80}ms'>${letter}</span>`
    })
    .join( "" );
} );