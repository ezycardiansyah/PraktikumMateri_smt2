// ========================
// DATA COURSE
// ========================
const courses = {
    algoritma: "Algoritma & Struktur Data",
    instrumentasi: "Sistem Instrumentasi",
    statistika: "Statistika Informatika",
    arkom: "Organisasi & Arsitektur Komputer"
};

// ========================
// DATA MATERI
// ========================
const materiData = {

    instrumentasi: [
        "https://docs.google.com/presentation/d/1HPhwFV5DUsit1mmEZpHQYWNOFEonnEtM/embed",
        "https://docs.google.com/presentation/d/12PFVGcjT2bWrg4_jCyO7RRoPnQLFX9yR/embed",
        "https://docs.google.com/presentation/d/164DGgQDrdR_XR7g72fTUpMupdH54EZmZ/embed",
        "https://docs.google.com/presentation/d/1SOnK3RVjZqOnWkWkmi2fRp9_TuQZoXmL/embed",
        "https://docs.google.com/presentation/d/1euF9dFL3_E0fa4i5SAmwI8G4jpIZj_br/embed"
    ],

    arkom: [
        "https://docs.google.com/presentation/d/1OwjOPa1JU44WSVBULojch8pyQHuHbu-v/embed",
        "https://docs.google.com/presentation/d/186gFqXgFqN9v2HG2JK2tVR8Jj5bAhhNt/embed",
        "https://docs.google.com/presentation/d/1xA34MmpcZ7MEp3Qk1MvXQGeNc_Ar6-Hr/embed",
        "https://docs.google.com/presentation/d/18_4SRBptVTsDmdj_8WYDiLtg8LE_7dDZ/embed",
        "https://docs.google.com/presentation/d/1MOkopFqUYTT_9t4W67YJg6jO0m-75L1E/embed'
    ],

    statistika: [
        "https://docs.google.com/presentation/d/123FdM-YHtdiPKRoxJic2znIm-llG1NGZ/embed",
        "https://docs.google.com/presentation/d/1k6EDWHwrzxrmlbERgb69dtaODNsM3p85/embed",
        "https://docs.google.com/presentation/d/1cnXAETIIXfx11wo0w1xnvjNLG-c9egYT/embed"
    ],

    algoritma: [
        {
            url: "https://docs.google.com/file/d/1-P6wl73IczSQdgesgQqtphGDNRuP8e1N/preview",
            type: "embed"
        },
        {
            url: "https://docs.google.com/file/d/1Z2iS_kewGKisuumy69XlA08OuOnLwDXI/preview",
            type: "embed"
        },
        {
            url: "https://docs.google.com/file/d/1vlGC064RplAIsDcgqkVQQta_nNmATniE/preview",
            type: "embed"
        },
        {
            url: "https://drive.google.com/file/d/19DuTperB1PCXZYSBdtUjPbmZCHNQEQTv/view",
            type: "newtab"
        },
        {
            url: "https://drive.google.com/file/d/1lhfkb_Nhe403DxUsI4lBNzsZLq9j1Zy3/view",
            type: "newtab"
        }
    ]
};

// ========================
// OPEN COURSE
// ========================
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

        // kasih icon biar beda
        let label = "Pertemuan " + i;

        if (data[i - 1]) {

            // cek tipe data (string atau object)
            let item = data[i - 1];
            let type = typeof item === "string" ? "embed" : item.type;

            if (type === "newtab") {
                label += " 🔗";
            } else {
                label += " 📄";
            }

            div.onclick = function () {
                previewPPT(item);
            };

        } else {
            div.style.opacity = "0.4";
            label += " (Belum ada)";
        }

        div.innerText = label;
        list.appendChild(div);
    }
}

// ========================
// DETEKSI MOBILE
// ========================
function isMobile() {
    return /Android|iPhone/i.test(navigator.userAgent);
}

// ========================
// PREVIEW / OPEN FILE
// ========================
function previewPPT(item) {

    let url, type;

    if (typeof item === "string") {
        url = item;
        type = "embed";
    } else {
        url = item.url;
        type = item.type;
    }

    // mobile → selalu tab baru
    if (isMobile()) {
        window.open(url, "_blank");
        return;
    }

    // file yang tidak bisa embed
    if (type === "newtab") {
        window.open(url, "_blank");
        return;
    }

    // tampilkan di modal
    document.getElementById("modal").style.display = "block";
    document.getElementById("viewer").src = url;
}

// ========================
// KEMBALI
// ========================
function goBack() {
    document.getElementById("mainPage").style.display = "grid";
    document.getElementById("coursePage").style.display = "none";
}

// ========================
// CLOSE MODAL
// ========================
function closeModal() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("viewer").src = "";
}
