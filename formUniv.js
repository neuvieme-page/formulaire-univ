var formUniv = (function() {


    var validateEmail = function(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    /* Please fill these 2 variables */
    var artistId = "artist_357727515";
    var artistName = "florentpagny9635";


    var email = document.getElementById('email');
    var form = document.getElementById('requestForm');

    var onFormSubmit = function(e) {

        e.preventDefault();

        if (!validateEmail(email.value)) {

            email.value = 'Veuillez renseigner un email valide';
            window.setTimelout(function() {
                email.value = "";
            }, 500);
            return false;

        }

        var data = new FormData();
        data.append('email', email.value);

        fetch('https://link.umusicconnect.net/umgi/register.jssp', {
            method: 'post',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            body: artistId + '=true&country=FR&email=' + email.value + '&name=' + artistName
        }).then(function(resp) {
        }).catch(function(respError){
            email.value = 'Inscription Enregistrée, merci.';
        });

    };

    form.addEventListener('submit', onFormSubmit);


})();

module.exports = formUniv;