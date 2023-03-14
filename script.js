    const learnMoreBtn = document.getElementById('learnMoreBtn');
    const learnMoreSection = document.getElementById('learnMoreSection');

    learnMoreBtn.addEventListener('click', () => {
        learnMoreSection.toggleAttribute('hidden');
    });

const showContentBtn = document.getElementById('showContent');
  const hiddenContent = document.getElementById('hiddenContent');
  
  showContentBtn.addEventListener('click', function() {
    if (hiddenContent.style.display === "none") {
      hiddenContent.style.display = "block";
    } else {
      hiddenContent.style.display = "none";
    }
  });


//font 
module.exports = {
  theme: {
    fontFamily: {
      'sans': ['Montserrat', 'sans-serif']
    }
  },
  variants: {},
  plugins: []
}



//// Get the modal element
//var modal = document.getElementById("signup-modal");
//
//// Get the button that opens the modal
//var btn = document.getElementById("signup-button");
//
//// Get the <span> element that closes the modal
//var cancel = document.getElementById("signup-modal-cancel");
//
//// When the user clicks the button, open the modal
//btn.onclick = function() {
//  modal.classList.remove("hidden");
//}
//
//// When the user clicks on <span> (x), close the modal
//cancel.onclick = function() {
//  modal.classList.add("hidden");
//}
//
//// When the user clicks anywhere outside of the modal, close it
//window.onclick = function(event) {
//  if (event.target == modal) {
//    modal.classList.add("hidden");
//  }
//}
