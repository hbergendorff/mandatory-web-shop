let emailPatter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
let btn = document.getElementById("send");
btn.addEventListener('click',function (e) {
    e.preventDefault();
    alertMessage = "";

    if(document.getElementById("fName").value === ""){
        alertMessage += "Fyll i ditt Förnamn \n";
    }

    if(document.getElementById("lName").value === ""){
        alertMessage += "Fyll i ditt Efternamn \n";
    }

    if(document.getElementById("eMail").value === ""){
        alertMessage += "Fyll i din Epost \n";
    }

    if(!emailPatter.test(eMail.value)){
        alertMessage += "Kontrollera att din Epost är korrekt \n";
    }

    if(document.getElementById("address").value === ""){
        alertMessage += "Fyll i din Gatuadress \n";
    }

    if(document.getElementById("zip").value === ""){
        alertMessage += "Fyll i ditt Postnummer \n";
    }

    if(document.getElementById("city").value === ""){
        alertMessage += "Fyll i din Stad \n";
    }

    if(alertMessage !== ""){
        alert(alertMessage);
        return false;
    }
    document.getElementById("check").submit();
});
