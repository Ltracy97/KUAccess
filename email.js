function check(){
    document.getElementById('test').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_0zquxn6', 'template_ufyro17', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });



    //let formData = new FormData();
    //formData.append("image", image);
    //fetch('/upload/image', {method: "POST", body: formData});

    


}