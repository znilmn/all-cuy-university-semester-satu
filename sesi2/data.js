const nama = "muhammad zidni ilman";
let usia = 15;

let biodata = document.getElementById('biodata');

function generateBiodata() {
    let generasi;

    if (usia > 10 && usia <= 18) {
        generasi = "GENERASI REMAJA"
    } 
    else if (usia > 18 && usia < 30) {
        generasi = "GENERASI DEWASA"
    }
    else if (usia < 10 && usia >= 1){
        generasi = "GENERASI BOCIL"
    }
    else if (usia > 30) {
        generasi = "GENERASI MBAH MBAH"
    }
    else {
        console.log('APA YAAA')
    }
    return biodata.innerHTML =generasi;
}

console.log(nama);
console.log(usia);

generateBiodata();