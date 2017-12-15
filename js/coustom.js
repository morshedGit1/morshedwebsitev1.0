function cancelationTerms() {
  // Get the modal
  var modal = document.getElementById('cancelationTermsModal');
  var modalContent = document.getElementById('modal-content');
  // Get the button that opens the modal
  var btn = document.getElementById("cancelationTerms");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function() {
      modal.style.display = "block";
      modalContent.className += " animated fadeIn";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
      modalContent.className = " modal-content";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
}

function travellerTermsAndCondition() {
  // Get the modal
  var modal = document.getElementById('travellerTermsAndConditionModal');
  var modalContent = document.getElementById('modal-content');
  // Get the button that opens the modal
  var btn = document.getElementById("travellerTermsAndCondition");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function() {
      modal.style.display = "block";
      modalContent.className += " animated fadeIn";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
      modalContent.className = " modal-content";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
}

function privacyAndPolicy() {
  // Get the modal
  var modal = document.getElementById('privacyAndPolicyModal');
  var modalContent = document.getElementById('modal-content');
  // Get the button that opens the modal
  var btn = document.getElementById("privacyAndPolicy");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function() {
      modal.style.display = "block";
      modalContent.className += " animated fadeIn";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
      modalContent.className = " modal-content";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
}
