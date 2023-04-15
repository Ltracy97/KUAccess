function check(){
    emailjs.init("JTeSPyUT-yfQxkN1J");
    var params = {
        names : document.getElementById("name").value,
        location : document.getElementById("bname").value,
        near : document.getElementById("door").value,
        floor : document.getElementById("floor").value,
        email : document.getElementById("email").value
        //image : document.getElementById("image").value
    };
    const serID = "service_0zquxn6";
    const tempID = "template_ufyro17";

    emailjs.send(serID,tempID,params);



    //let formData = new FormData();
    //formData.append("image", image);
    //fetch('/upload/image', {method: "POST", body: formData});

    


}