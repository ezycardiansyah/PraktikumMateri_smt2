const courses = {
    algoritma: "Algoritma & Struktur Data",
    instrumentasi: "Sistem Instrumentasi",
    statistika: "Statistika Informatika",
    arkom: "Organisasi & Arsitektur Komputer"
};

// DATA LINK PPT
const materiData = {

    instrumentasi: [
        convertSlide("1HPhwFV5DUsit1mmEZpHQYWNOFEonnEtM"),
        convertSlide("12PFVGcjT2bWrg4_jCyO7RRoPnQLFX9yR"),
        convertSlide("164DGgQDrdR_XR7g72fTUpMupdH54EZmZ"),
        convertSlide("1SOnK3RVjZqOnWkWkmi2fRp9_TuQZoXmL"),
        convertSlide("1euF9dFL3_E0fa4i5SAmwI8G4jpIZj_br")
    ],

    arkom: [
        convertSlide("1OwjOPa1JU44WSVBULojch8pyQHuHbu-v"),
        convertSlide("186gFqXgFqN9v2HG2JK2tVR8Jj5bAhhNt"),
        convertSlide("1xA34MmpcZ7MEp3Qk1MvXQGeNc_Ar6-Hr"),
        convertSlide("18_4SRBptVTsDmdj_8WYDiLtg8LE_7dDZ")
    ],

    statistika: [
        convertSlide("123FdM-YHtdiPKRoxJic2znIm-llG1NGZ"),
        convertSlide("1k6EDWHwrzxrmlbERgb69dtaODNsM3p85"),
        convertSlide("1cnXAETIIXfx11wo0w1xnvjNLG-c9egYT")
    ],

    algoritma: [
        convertDrive("1-P6wl73IczSQdgesgQqtphGDNRuP8e1N"),
        convertDrive("1Z2iS_kewGKisuumy69XlA08OuOnLwDXI"),
        convertDrive("1vlGC064RplAIsDcgqkVQQta_nNmATniE")
    ]
};


// ===== FUNCTION KONVERSI LINK =====

// untuk Google Slides
function convertSlide(id) {
    return `https://docs.google.com/gview?url=https://docs.google.com/presentation/d/${id}/edit&embedded=true`;
}

// untuk Google Drive file
function convertDrive(id) {
    return `https://docs.google.com/gview?url=https://drive.google.com/uc?id=${id}&embedded=true`;
}


// ===== FUNCTION UTAMA =====

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


function goBack() {
    document.getElementById("mainPage").style.display = "grid";
    document.getElementById("coursePage").style.display = "none";
}


function previewPPT(url) {
    document.getElementById("modal").style.display = "block";
    document.getElementById("viewer").src = url;
}


function closeModal() {
    document.getElementById("modal").style.display = "none";
}
