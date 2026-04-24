const courses = {
    algoritma: "Algoritma & Struktur Data",
    instrumentasi: "Sistem Instrumentasi",
    statistika: "Statistika Informatika",
    arkom: "Organisasi & Arsitektur Komputer"
};

// DATA LINK PPT
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
        "https://docs.google.com/presentation/d/18_4SRBptVTsDmdj_8WYDiLtg8LE_7dDZ/embed"
    ],
    statistika: [
        "https://docs.google.com/presentation/d/123FdM-YHtdiPKRoxJic2znIm-llG1NGZ/embed",
        "https://docs.google.com/presentation/d/1k6EDWHwrzxrmlbERgb69dtaODNsM3p85/embed",
        "https://docs.google.com/presentation/d/1cnXAETIIXfx11wo0w1xnvjNLG-c9egYT/embed"
    ],
    algoritma: [
        "https://docs.google.com/file/d/1-P6wl73IczSQdgesgQqtphGDNRuP8e1N/preview",
        "https://docs.google.com/file/d/1Z2iS_kewGKisuumy69XlA08OuOnLwDXI/preview",
        "https://docs.google.com/file/d/1vlGC064RplAIsDcgqkVQQta_nNmATniE/preview",
        "https://drive.google.com/file/d/19DuTperB1PCXZYSBdtUjPbmZCHNQEQTv/preview",
        "https://drive.google.com/file/d/1lhfkb_Nhe403DxUsI4lBNzsZLq9j1Zy3/preview"
    ]
};

// Pastikan DOM sudah loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log("Website siap digunakan!");
});

function openCourse(key) {
    console.log("Membuka course:", key);
    
    // Sembunyikan halaman utama
    const mainPage = document.getElementById("mainPage");
    const coursePage = document.getElementById("coursePage");
    
    if (mainPage) mainPage.style.display = "none";
    if (coursePage) coursePage.style.display = "block";

    const courseTitle = document.getElementById("courseTitle");
    if (courseTitle) courseTitle.innerText = courses[key];

    let list = document.getElementById("meetingList");
    if (!list) return;
    
    list.innerHTML = "";

    let data = materiData[key] || [];

    for (let i = 1; i <= 14; i++) {
        let div = document.createElement("div");
        div.className = "meeting";
        div.innerText = "Pertemuan " + i;

        if (data[i - 1]) {
            // Buat closure untuk menyimpan URL
            const url = data[i - 1];
            div.onclick = function() {
                previewPPT(url);
            };
            div.style.cursor = "pointer";
        } else {
            div.style.opacity = "0.4";
            div.style.cursor = "not-allowed";
            div.innerText += " (Belum ada)";
        }

        list.appendChild(div);
    }
}

function isMobile() {
    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function goBack() {
    const mainPage = document.getElementById("mainPage");
    const coursePage = document.getElementById("coursePage");
    
    if (mainPage) mainPage.style.display = "grid";
    if (coursePage) coursePage.style.display = "none";
}

function previewPPT(url) {
    console.log("Membuka preview:", url);
    
    if (isMobile()) {
        window.open(url, "_blank");
    } else {
        const modal = document.getElementById("modal");
        const viewer = document.getElementById("viewer");
        
        if (modal && viewer) {
            modal.style.display = "block";
            viewer.src = url;
        } else {
            // Fallback: buka di tab baru
            window.open(url, "_blank");
        }
    }
}

function closeModal() {
    const modal = document.getElementById("modal");
    const viewer = document.getElementById("viewer");
    
    if (modal) modal.style.display = "none";
    if (viewer) viewer.src = "";
}

// Debug: cek apakah fungsi global tersedia
console.log("Fungsi tersedia:", {
    openCourse: typeof openCourse,
    goBack: typeof goBack,
    previewPPT: typeof previewPPT,
    closeModal: typeof closeModal
});