const courses = {
    algoritma: "Algoritma & Struktur Data",
    instrumentasi: "Sistem Instrumentasi",
    statistika: "Statistika Informatika",
    arkom: "Organisasi & Arsitektur Komputer"
};

// DATA LINK PPT
const materiData = {

    instrumentasi: [
        "https://docs.google.com/presentation/d/1HPhwFV5DUsit1mmEZpHQYWNOFEonnEtM/edit?usp=drive_link&ouid=114736929292569281585&rtpof=true&sd=true",
        "https://docs.google.com/presentation/d/12PFVGcjT2bWrg4_jCyO7RRoPnQLFX9yR/edit?usp=drive_link&ouid=114736929292569281585&rtpof=true&sd=true",
        "https://docs.google.com/presentation/d/164DGgQDrdR_XR7g72fTUpMupdH54EZmZ/edit?usp=drive_link&ouid=114736929292569281585&rtpof=true&sd=true",
        "https://docs.google.com/presentation/d/1SOnK3RVjZqOnWkWkmi2fRp9_TuQZoXmL/edit?usp=drive_link&ouid=114736929292569281585&rtpof=true&sd=true"
        "https://docs.google.com/presentation/d/1euF9dFL3_E0fa4i5SAmwI8G4jpIZj_br/edit?usp=drive_link&ouid=114736929292569281585&rtpof=true&sd=true"
    ],

    arkom: [
        "https://docs.google.com/presentation/d/1OwjOPa1JU44WSVBULojch8pyQHuHbu-v/edit?usp=drive_link&ouid=114736929292569281585&rtpof=true&sd=true",
        "https://docs.google.com/presentation/d/186gFqXgFqN9v2HG2JK2tVR8Jj5bAhhNt/edit?usp=drive_link&ouid=114736929292569281585&rtpof=true&sd=true",
        "https://docs.google.com/presentation/d/1xA34MmpcZ7MEp3Qk1MvXQGeNc_Ar6-Hr/edit?usp=drive_link&ouid=114736929292569281585&rtpof=true&sd=true",
        "https://docs.google.com/presentation/d/18_4SRBptVTsDmdj_8WYDiLtg8LE_7dDZ/edit?usp=drive_link&ouid=114736929292569281585&rtpof=true&sd=true"
    ],

    statistika: [
        "https://docs.google.com/presentation/d/123FdM-YHtdiPKRoxJic2znIm-llG1NGZ/edit?usp=drive_link&ouid=114736929292569281585&rtpof=true&sd=true",
        "https://docs.google.com/presentation/d/1k6EDWHwrzxrmlbERgb69dtaODNsM3p85/edit?usp=drive_link&ouid=114736929292569281585&rtpof=true&sd=true",
        "https://docs.google.com/presentation/d/1cnXAETIIXfx11wo0w1xnvjNLG-c9egYT/edit?usp=drive_link&ouid=114736929292569281585&rtpof=true&sd=true"
    ],

    algoritma: [
        "https://docs.google.com/gview?url=https://drive.google.com/uc?id=1-P6wl73IczSQdgesgQqtphGDNRuP8e1N&embedded=true",
        "https://docs.google.com/gview?url=https://drive.google.com/uc?id=1Z2iS_kewGKisuumy69XlA08OuOnLwDXI&embedded=true",
        "https://docs.google.com/gview?url=https://drive.google.com/uc?id=1vlGC064RplAIsDcgqkVQQta_nNmATniE&embedded=true"
    ]

};


// buka praktikum
function openCourse(key) {
    document.getElementById("mainPage").style.display = "none";
    document.getElementById("coursePage").style.display = "block";

    document.getElementById("courseTitle").innerText = courses[key];

    let list = document.getElementById("meetingList");
    list.innerHTML = "";

    let data = materiData[key] || [];

    for (let i = 1; i <= 14; i++) {
        let div = document.createElement("div");
        div.className = "meeting";
        div.innerText = "Pertemuan " + i;

        if (data[i - 1]) {
            div.onclick = function () {
                previewPPT(data[i - 1]);
            };
        } else {
            div.style.opacity = "0.4";
            div.innerText += " (Belum ada)";
        }

        list.appendChild(div);
    }
}


// kembali
function goBack() {
    document.getElementById("mainPage").style.display = "grid";
    document.getElementById("coursePage").style.display = "none";
}


// preview
function previewPPT(url) {
    document.getElementById("modal").style.display = "block";
    document.getElementById("viewer").src = url;
}


// close
function closeModal() {
    document.getElementById("modal").style.display = "none";
}
