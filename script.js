document.addEventListener("DOMContentLoaded", function() {

    // DARK MODE
    let darkBtn = document.getElementById("darkModeBtn");
    if (darkBtn) {
        darkBtn.addEventListener("click", function() {
            document.body.classList.toggle("dark-mode");
        });
    }

    // SHOW MORE
    let moreText = document.getElementById("moreText");
    let btn = document.getElementById("btnMore");

    if (btn && moreText) {
        moreText.style.display = "none";

        btn.addEventListener("click", function() {
            if (moreText.style.display === "none") {
                moreText.style.display = "inline";
                btn.innerText = "Tampilkan Lebih Sedikit";
            } else {
                moreText.style.display = "none";
                btn.innerText = "Tampilkan Lebih Banyak";
            }
        });
    }

    // VALIDASI FORM
    let form = document.getElementById("formKontak");

    if (form) {
        form.addEventListener("submit", function(e) {
            let nama = document.getElementById("nama").value;
            let email = document.getElementById("email").value;
            let pesan = document.getElementById("pesanError");

            if (nama === "" || email === "") {
                e.preventDefault();
                pesan.innerText = "Nama dan Email wajib diisi!";
                pesan.style.color = "red";
            } else {
                alert("Berhasil dikirim!");
            }
        });
    }

});