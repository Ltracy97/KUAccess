window.onload = function() {
    document.getElementById('report_form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        var params = {
            name: document.getElementById("name").value,
            email:document.getElementById("email").value,
            building:document.getElementById("building").value,
            location:document.getElementById("inorout").value,
            description:document.getElementById("loc").value

        }
        this.test = params;


        emailjs.sendForm('service_0zquxn6', 'template_ufyro17', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });

}