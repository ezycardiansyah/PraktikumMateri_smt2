const courses = {
    algoritma: "Algoritma & Struktur Data",
    instrumentasi: "Sistem Instrumentasi",
    statistika: "Statistika Informatika",
    arkom: "Organisasi & Arsitektur Komputer"
};

// DATA
const materiData = {
    instrumentasi: [
        slide("1HPhwFV5DUsit1mmEZpHQYWNOFEonnEtM"),
        slide("164DGgQDrdR_XR7g72fTUpMupdH54EZmZ"),
        slide("1SOnK3RVjZqOnWkWkmi2fRp9_TuQZoXmL"),
        slide("1euF9dFL3_E0fa4i5SAmwI8G4jpIZj_br")
    ],

    arkom: [
        slide("1OwjOPa1JU44WSVBULojch8pyQHuHbu-v"),
        slide("186gFqXgFqN9v2HG2JK2tVR8Jj5bAhhNt")
    ],

    statistika: [
        slide("123FdM-YHtdiPKRoxJic2znIm-llG1NGZ")
    ],

    algoritma: [
        drive("1-P6wl73IczSQdgesgQqtphGDNRuP8e1N")
    ]
};


// LINK FORMAT
function slide(id){
    return `https://docs.google.com/presentation/d/${id}/edit`;
}

function drive(id){
    return `https://drive.google.com/file/d/${id}/view`;
}


// DETEKSI MOBILE
function isMobile(){
    return /Android|iPhone|iPad/i.test(navigator.userAgent);
}


// BUKA COURSE
function openCourse(key){
    document.getElementById("mainPage").style.display="none";
    document.getElementById("coursePage").style.display="block";

    document.getElementById("courseTitle").innerText = courses[key];

    let list = document.getElementById("meetingList");
    list.innerHTML="";

    let data = materiData[key] || [];

    for(let i=1;i<=14;i++){
        let div=document.createElement("div");
        div.className="meeting";
        div.innerText="Pertemuan "+i;

        if(data[i-1]){
            div.onclick=()=>openMateri(data[i-1]);
        }else{
            div.style.opacity="0.4";
            div.innerText+=" (Belum ada)";
        }

        list.appendChild(div);
    }
}


// BUKA MATERI (SMART)
function openMateri(url){
    if(isMobile()){
        // HP → buka tab baru
        window.open(url, "_blank");
    }else{
        // PC → iframe modal
        document.getElementById("modal").style.display="block";
        document.getElementById("viewer").src=url;
    }
}


// BACK
function goBack(){
    document.getElementById("mainPage").style.display="grid";
    document.getElementById("coursePage").style.display="none";
}


// CLOSE MODAL
function closeModal(){
    document.getElementById("modal").style.display="none";
}
