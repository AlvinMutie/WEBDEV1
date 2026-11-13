var navToggle = document.getElementById('navToggle');
var navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
        var isOpen = navMenu.classList.toggle('active');
        navToggle.setAttribute('aria-expanded', isOpen);
    });

    var navLinks = navMenu.getElementsByTagName('a');
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function () {
            navMenu.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    }
}

var membershipForm = document.getElementById('membershipForm');
var formAlert = document.getElementById('formAlert');

if (membershipForm) {
    var interestBoxes = membershipForm.querySelectorAll('input[name="interests"]');

    for (var i = 0; i < interestBoxes.length; i++) {
        interestBoxes[i].addEventListener('change', function () {
            interestBoxes[0].setCustomValidity('');
        });
    }

    membershipForm.addEventListener('submit', function (event) {
        event.preventDefault();

        var selectedInterest = membershipForm.querySelector('input[name="interests"]:checked');
        interestBoxes[0].setCustomValidity(selectedInterest ? '' : 'Select at least one club interest.');

        if (!membershipForm.checkValidity()) {
            membershipForm.reportValidity();
            return;
        }

        var fullName = document.getElementById('fullName').value.trim();
        var regNo = document.getElementById('regNo').value.trim();

        membershipForm.reset();

        formAlert.textContent = 'Registration successful. Thank you, ' + fullName +
            ' (' + regNo + '). We will contact you through your student email.';
        formAlert.classList.add('show');
    });

    membershipForm.addEventListener('reset', function () {
        interestBoxes[0].setCustomValidity('');
        formAlert.classList.remove('show');
        formAlert.textContent = '';
    });
}
