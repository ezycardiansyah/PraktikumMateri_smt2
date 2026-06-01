const courses = {
    algoritma: "Algoritma & Struktur Data",
    instrumentasi: "Sistem Instrumentasi",
    statistika: "Statistika Informatika",
    arkom: "Organisasi & Arsitektur Komputer"
};

const materiData = {
    instrumentasi: [
        "https://docs.google.com/presentation/d/1HPhwFV5DUsit1mmEZpHQYWNOFEonnEtM/embed",
        "https://docs.google.com/presentation/d/12PFVGcjT2bWrg4_jCyO7RRoPnQLFX9yR/embed",
        "https://docs.google.com/presentation/d/164DGgQDrdR_XR7g72fTUpMupdH54EZmZ/embed",
        "https://docs.google.com/presentation/d/1SOnK3RVjZqOnWkWkmi2fRp9_TuQZoXmL/embed",
        "https://docs.google.com/presentation/d/1euF9dFL3_E0fa4i5SAmwI8G4jpIZj_br/embed",
        "https://docs.google.com/presentation/d/1A9O03G_pzrmCQ5J-Sa00FNj1pWTKDUEr/embed",
        "https://docs.google.com/presentation/d/../embed",
        "https://docs.google.com/presentation/d/157wof3SjisTKxDEVMkQaHmdpiWGqjkXW/embed",
        "https://docs.google.com/presentation/d/17s_XeyESkONDG7Tn0482d4io3IfmA-gm/embed",
    ],
    arkom: [
        "https://docs.google.com/presentation/d/1OwjOPa1JU44WSVBULojch8pyQHuHbu-v/embed",
        "https://docs.google.com/presentation/d/186gFqXgFqN9v2HG2JK2tVR8Jj5bAhhNt/embed",
        "https://docs.google.com/presentation/d/1xA34MmpcZ7MEp3Qk1MvXQGeNc_Ar6-Hr/embed",
        "https://docs.google.com/presentation/d/18_4SRBptVTsDmdj_8WYDiLtg8LE_7dDZ/embed",
        "https://docs.google.com/presentation/d/1MOkopFqUYTT_9t4W67YJg6jO0m-75L1E/embed",
        "https://docs.google.com/presentation/d/1ENzvpgvoBK8PF5Kov6WiMM18aB2-PojM/embed",
        "https://docs.google.com/presentation/d/../embed",
        "https://docs.google.com/presentation/d/1OYtkTet4y84jaoAjfatLpkCsFA3sIE0m/embed",
    ],
    statistika: [
        "https://docs.google.com/presentation/d/123FdM-YHtdiPKRoxJic2znIm-llG1NGZ/embed",
        "https://docs.google.com/presentation/d/1k6EDWHwrzxrmlbERgb69dtaODNsM3p85/embed",
        "https://docs.google.com/presentation/d/1cnXAETIIXfx11wo0w1xnvjNLG-c9egYT/embed",
        "https://docs.google.com/presentation/d/1WOG0OxpKvkm7JxiU7cqlBjyvEBy8nvHk/embed",
        "https://docs.google.com/presentation/d/1lmdlrO1Ai12yh41vwYnZReaiQ1abBAHt/embed",
        "https://docs.google.com/presentation/d/../embed",
        "https://docs.google.com/presentation/d/1b3TaPB4LiwiiufDAIGUlmQUBiqfzlj_T/embed",
        "https://docs.google.com/presentation/d/1_0tZtV0Af_FESTY4wKAv3lG0GN2NgNV7/embed",
        "https://docs.google.com/presentation/d/1-lA50n_W7UFY-OsHYSw6l2oAvD0yoEUV/embed",
    ],
    algoritma: [
        "https://docs.google.com/file/d/1-P6wl73IczSQdgesgQqtphGDNRuP8e1N/preview",
        "https://docs.google.com/file/d/1Z2iS_kewGKisuumy69XlA08OuOnLwDXI/preview",
        "https://docs.google.com/file/d/1vlGC064RplAIsDcgqkVQQta_nNmATniE/preview",
        "https://drive.google.com/file/d/19DuTperB1PCXZYSBdtUjPbmZCHNQEQTv/preview",
        "https://drive.google.com/file/d/1lhfkb_Nhe403DxUsI4lBNzsZLq9j1Zy3/preview",
        "https://drive.google.com/file/d/../preview",
        "https://drive.google.com/file/d/18KQs_SRYHM6-HvLiljlPiCSLsze4B2Tn/preview",
        "https://drive.google.com/file/d/1uvR3oiVk4PU2L27l0nT2rf7H57ROA5OM/preview",
        "https://drive.google.com/file/d/1ccD37bGLN--KV_A7yWUQ8gDdySEXZ7F0/preview",
    ]
};

function openCourse(key) {
    document.getElementById("mainPage").style.display = "none";
    document.getElementById("coursePage").style.display = "block";
    document.getElementById("courseTitle").innerText = courses[key];
    
    var list = document.getElementById("meetingList");
    list.innerHTML = "";
    
    var data = materiData[key] || [];
    
    for (var i = 1; i <= 14; i++) {
        var div = document.createElement("div");
        div.className = "meeting";
        var url = data[i - 1] || "";
        var isUjian = url.includes("/d/../");

        if (isUjian) {
            div.innerText = "Pertemuan " + i + " (UJIAN)";
            div.style.background = "linear-gradient(135deg, #cc2b5e, #753a88)";
            div.style.color = "white";
            div.style.fontWeight = "bold";
            div.style.opacity = "0.85";
            div.style.cursor = "not-allowed";
        } else if (url) {
            div.innerText = "Pertemuan " + i;
            div.onclick = (function(u) {
                return function() {
                    previewPPT(u);
                };
            })(url);
            div.style.cursor = "pointer";
        } else {
            div.innerText = "Pertemuan " + i + " (Belum ada)";
            div.style.opacity = "0.4";
            div.style.cursor = "not-allowed";
        }
        
        list.appendChild(div);
    }
}

function isMobile() {
    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function goBack() {
    document.getElementById("mainPage").style.display = "grid";
    document.getElementById("coursePage").style.display = "none";
}

function previewPPT(url) {
    if (isMobile()) {
        window.open(url, "_blank");
    } else {
        document.getElementById("modal").style.display = "block";
        document.getElementById("viewer").src = url;
    }
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("viewer").src = "";
}
