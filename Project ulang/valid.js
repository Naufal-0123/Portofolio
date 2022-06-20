

var nama = document.getElementById('name')
var email = document.getElementById('email')
var nomor = document.getElementById('notelp')
var pesan = document.getElementById('Message')
var errordata = true;

var nama_error = document.getElementById('nama_error')
var email_error = document.getElementById('email_error')
var nomor_error = document.getElementById('nomor_error')
var pesan_error = document.getElementById('pesan_error')

email.addEventListener('textInput', emailVerify);
nama.addEventListener('textInput', namaVerify);
nomor.addEventListener('textInput', nomorVerify);
pesan.addEventListener('textInput', pesanVerify);

function validated() {
    if (email.value.length < 9) {
        email.style.border = '1px solid red';
        email_error.style.display = 'block';
        errordata = false;   
    }
    if (nama.value.length < 4) {
        nama.style.border = '1px solid red';
        nama_error.style.display = 'block';   
        errordata = false;      
    }
    if (nomor.value.length < 10) {
        nomor.style.border = '1px solid red';
        nomor_error.style.display = 'block';   
        errordata = false;    
    }
    if (pesan.value.length < 12) {
        pesan.style.border = '1px solid red';
        pesan_error.style.display = 'block';
        errordata = false;   
    }
    if (errordata == false) {
        return false;
    }
}

function emailVerify() {
    if (email.value.length >= 9) {
        email.style.border = '1px solid silver';
        email_error.style.display = 'none';
        errordata = true;
        return true;
    }
}

function namaVerify() {
    if (nama.value.length >= 4) {
        nama.style.border = '1px solid silver';
        nama_error.style.display = 'none';
        errordata = true;
        return true;
    }
}

function nomorVerify() {
    if (nomor.value.length >= 4) {
        nomor.style.border = '1px solid silver';
        nomor_error.style.display = 'none';
        errordata = true;
        return true;
    }
}

function pesanVerify() {
    if (pesan.value.length >= 4) {
        pesan.style.border = '1px solid silver';
        pesan_error.style.display = 'none';
        errordata = true;
        return true;
    }
}

