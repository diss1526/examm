var san1 = prompt("Бірінші санды енгізіңіз")
var san2 = prompt("Екінші санды енгізіңіз")
var san3 = prompt("Үшінші санды енгізіңіз")

if (san1 > san2 > san3) {
    alert("Ең үлкен сан мен ең кіші санның айырмасы" + (san1-san3))
} else if(san1 < san2 < san3) {
    alert("Ең үлкен сан мен ең кіші санның айырмасы" + (san3-san1))
} else if(san2 > san1 > san3) {
    alert("Ең үлкен сан мен ең кіші санның айырмасы" + (san2-san3))
}