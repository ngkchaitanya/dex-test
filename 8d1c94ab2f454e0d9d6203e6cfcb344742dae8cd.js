console.log(`
Hello! I am running from a script injected on the page by Loconotion 🎉
This could be an analytics script, real-time chat support script, or anything you want really.
`);

fetch("https://api.quotable.io/random")
  .then((data) => {
    return data.json();
  })
  .then((response) => {
    console.log("Here's a quote for your time:");
    console.log(response.content + "  --" + response.author);
  })
  .catch((error) => {
    console.log(error);
  });

// header related
var headerText = document.querySelector(".notion-focusable");
var headerBar = document.querySelector(".notion-topbar");
var headerContent = headerBar.firstChild;

// headerBar.style.boxShadow = "0 0 4px 0 rgb(0 0 0 / 25%)";
headerBar.style.backgroundColor = "#F2F2F2";
headerBar.style.height = "60px";

headerContent.style.height = "60px";

headerText.style.fontSize = "16px";
headerText.style.fontWeight = "bold";

// headings
var h1Headers = document.querySelectorAll(".notion-header-block"); // H1
var h2Headers = document.querySelectorAll(".notion-sub_header-block"); // H2
var h3Headers = document.querySelectorAll(".notion-sub_sub_header-block"); // H3

// embed CTA
var embedBlock = document.querySelectorAll(".notion-embed-block");
// var CTABlock = document.querySelectorAll(".w-full.mx-auto.block");

for (var i = 0; i < embedBlock.length; i++) {
  embedBlock[i].style.width = "100%";
}

// notion page name
var pageNameBlock = document.querySelector(
  ".notion-selectable.notion-page-block"
);
pageNameBlock.parentNode.removeChild(pageNameBlock);

// images padding issue
var imageElements = document.querySelectorAll("img");
for (var i = 0; i < imageElements.length; i++) {
  imageElements[i].parentElement.style.paddingBottom = "0px";
}

// removing pseudo selection block
var pseudoBlock = document.querySelector(".pseudoSelection");
var nextSilbling = pseudoBlock.nextSibling;
nextSilbling.parentNode.removeChild(nextSilbling);

// removing page conent padding bottom
var pageContent = document.querySelector('.notion-page-content');
pageContent.style.paddingBottom = "30px";

function myFunction(x) {
  if (x.matches) {
    // If media query matches
    for (var i = 0; i < h1Headers.length; i++) {
      if (i > 0 && i < h1Headers.length - 1) {
        h1Headers[i].style.textAlign = "center";
      } else {
        h1Headers[i].style.textAlign = "left";
      }
      h1Headers[i].style.fontSize = "1rem";
    }

    for (var i = 0; i < h2Headers.length; i++) {
      if (i > 0 && i < h2Headers.length - 1) {
        h2Headers[i].style.textAlign = "center";
      } else {
        h2Headers[i].style.textAlign = "left";
      }
      h2Headers[i].style.fontSize = "1rem";
    }

    for (var i = 0; i < h3Headers.length; i++) {
      if (i > 0 && i < h3Headers.length - 1) {
        h3Headers[i].style.textAlign = "center";
      } else {
        h3Headers[i].style.textAlign = "left";
      }
      h3Headers[i].style.fontSize = "0.9rem";
    }

    // for (var i = 0; i < CTABlock.length; i++) {
    //   CTABlock.style.textAlign = "center";
    // }
  } else {
    for (var i = 0; i < h1Headers.length; i++) {
      h1Headers[i].style.textAlign = "left";
      h1Headers[i].style.fontSize = "1.4rem";
    }

    for (var i = 0; i < h2Headers.length; i++) {
      h2Headers[i].style.textAlign = "left";
      h2Headers[i].style.fontSize = "1.2rem";
    }

    for (var i = 0; i < h3Headers.length; i++) {
      h3Headers[i].style.textAlign = "left";
      h3Headers[i].style.fontSize = "1rem";
    }

    // for (var i = 0; i < CTABlock.length; i++) {
    //   CTABlock.style.textAlign = "left";
    // }
  }
}

var x = window.matchMedia("(max-width: 460px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
