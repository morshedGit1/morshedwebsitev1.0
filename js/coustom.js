// init();


function initx(){
  $('#warpper').fullpage({


});}

$('#warpper').on('click', 'button#closeButton', function () {
    var section = $('.fp-section.active');
    $.fn.fullpage.moveTo(1);
    setTimeout(function () {
        section.remove();
    }, 700);

});


function openFourm() {
    // var toggle = false;
    // if (toggle == false) {
    //     $('#warpper  > div:nth-child(1)').after('<div class="section"><button id="closeButton"><i class="fa fa-times" aria-hidden="true"></i></button><iframe id="googleFourm" src=""> <h1 style="font-size:100px;"></h1></iframe></div>');
    //
    //     //remembering the active section / slide
    //     var activeSectionIndex = $('.fp-section.active').index();
    //     var activeSlideIndex = $('.fp-section.active').find('.slide.active').index();
    //
    //     $.fn.fullpage.destroy('all');
    //
    //     //setting the active section as before
    //     $('.section').eq(activeSectionIndex).addClass('active');
    //
    //     //were we in a slide? Adding the active state again
    //     if (activeSlideIndex > -1) {
    //         $('.section.active').find('.slide').eq(activeSlideIndex).addClass('active');
    //     }
    //
    //     init();
    //     toggle = true;
    // }

    if (document.getElementById('Istanbul').selected == true) {
      window.open('https://goo.gl/forms/8sdgh76fUPy7izIv1','_blank');
        // $.fn.fullpage.moveTo(2);
        // document.getElementById('googleFourm').src = 'https://docs.google.com/forms/d/e/1FAIpQLSdS75eA6UYY6EtO1znXI9V5w8VCOF5fRJ9J3nVhx1HZEVgAvA/viewform?embedded=true';
    } else if (document.getElementById('Bursa').selected == true) {
      window.open('https://goo.gl/forms/xx9Yk2vvSTSZwH2v1','_blank');
        // $.fn.fullpage.moveTo(2);
        // document.getElementById('googleFourm').src = 'https://docs.google.com/forms/d/e/1FAIpQLScjf1ETpDxt7iLD2VtInaYnt_DWzrZNbpMSazFz9cLG1rqZPw/viewform?embedded=true';
    } else if (document.getElementById('Yalova').selected == true) {
      window.open('https://goo.gl/forms/4XAzxRKGWz1H21ea2','_blank');
        // $.fn.fullpage.moveTo(2);
        // document.getElementById('googleFourm').src = 'https://docs.google.com/forms/d/e/1FAIpQLSehsJyLTDMek4vjIoCHahNzsFrKubWhyXR38xyu7Gib5K76mA/viewform?embedded=true';
    } else if (document.getElementById('Sapanca').selected == true) {
      window.open('https://goo.gl/forms/FLiaBwXBEydeTG6P2','_blank');
        // $.fn.fullpage.moveTo(2);
        // document.getElementById('googleFourm').src = 'https://docs.google.com/forms/d/e/1FAIpQLScKUy821rVeRY3AVWRZxhMlXRpjruI9Ui-S-moKOvLMAFWpVg/viewform?embedded=true';
    }
}

function cancelationTerms() {
    // Get the modal
    var modal = document.getElementById('cancelationTermsModal');

    // Get the button that opens the modal
    var btn = document.getElementById("cancelationTerms");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function () {
        modal.style.display = "block";
        modal.className = "modal animated fadeIn";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.className = "modal animated fadeOut";
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.className = "modal animated fadeOut";
            modal.style.display = "none";

        }
    }
}

function travellerTermsAndCondition() {
    // Get the modal
    var modal = document.getElementById('travellerTermsAndConditionModal');
    // Get the button that opens the modal
    var btn = document.getElementById("travellerTermsAndCondition");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function () {
        modal.style.display = "block";
        modal.className = "modal animated fadeIn";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.className = "modal animated fadeOut";
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.className = "modal animated fadeOut";
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
    btn.onclick = function () {
        modal.style.display = "block";
        modal.className = "modal animated fadeIn";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.className = "modal animated fadeOut";
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.className = "modal animated fadeOut";
            modal.style.display = "none";

        }
    }
}
