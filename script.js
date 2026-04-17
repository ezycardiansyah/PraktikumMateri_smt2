const courses = {
    algoritma: "Algoritma & Struktur Data",
    instrumentasi: "Sistem Instrumentasi",
    statistika: "Statistika Informatika",
    arkom: "Organisasi & Arsitektur Komputer"
};

// MATERI PPT (MOBILE FIX)
const materiData = {

    instrumentasi: [
        slide("1HPhwFV5DUsit1mmEZpHQYWNOFEonnEtM"),
        slide("12PFVGcjT2bWrg4_jCyO7RRoPnQLFX9yR"),
        slide("164DGgQDrdR_XR7g72fTUpMupdH54EZmZ"),
        slide("1SOnK3RVjZqOnWkWkmi2fRp9_TuQZoXmL"),
        slide("1euF9dFL3_E0fa4i5SAmwI8G4jpIZj_br")
    ],

    arkom: [
        slide("1OwjOPa1JU44WSVBULojch8pyQHuHbu-v"),
        slide("186gFqXgFqN9v2HG2JK2tVR8Jj5bAhhNt"),
        slide("1xA34MmpcZ7MEp3Qk1MvXQGeNc_Ar6-Hr"),
        slide("18_4SRBptVTsDmdj_8WYDiLtg8LE_7dDZ")
    ],

    statistika: [
        slide("123FdM-YHtdiPKRoxJic2znIm-llG1NGZ"),
        slide("1k6EDWHwrzxrmlbERgb69dtaODNsM3p85"),
        slide("1cnXAETIIXfx11wo0w1xnvjNLG-c9egYT")
    ],

    algoritma: [
        drive("1-P6wl73IczSQdgesgQqtphGDNRuP8e1N"),
        drive("1Z2iS_kewGKisuumy69XlA08OuOnLwDXI"),
        drive("1vlGC064RplAIsDcgqkVQQta_nNmATniE")
    ]
};


// ===== CONVERT LINK (MOBILE FIX) =====
function slide(id) {
    return `https://docs.google.com/presentation/d/${id}/embed`;
}

function drive(id) {
    return `https://drive.google.com/file/d/${id}/preview`;
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
