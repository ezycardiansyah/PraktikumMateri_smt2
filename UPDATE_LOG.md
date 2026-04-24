# UPDATE & PERBAIKAN WEBSITE MATERI PRAKTIKUM

**Tanggal Update:** 24 April 2026  
**Status:** ✅ LIVE & WORKING

---

## 1. PERBAIKAN BUG (FIXES)

| No | Masalah | Solusi |
|----|---------|--------|
| 1 | Tombol tidak bisa diklik | Memperbaiki error syntax di baris 29 script.js |
| 2 | Error "openCourse is not defined" | Memperbaiki struktur kode agar semua fungsi terdefinisi |
| 3 | Error "Invalid or unexpected token" | Menghapus karakter/simbol tidak valid di JavaScript |
| 4 | Modal preview tidak muncul | Menambahkan fallback untuk perangkat mobile |
| 5 | Tombol kembali (goBack) tidak berfungsi | Memperbaiki fungsi goBack() |

---

## 2. PENAMBAHAN FITUR (NEW FEATURES)

| No | Fitur | Deskripsi |
|----|-------|-----------|
| 1 | Pertemuan 5 & 6 untuk Arkom | Menambahkan 2 link materi baru untuk Arkom |
| 2 | Cursor pointer indicator | Efek kursor pointer pada tombol yang bisa diklik |
| 3 | Hover effect | Animasi hover pada kartu materi dan tombol |
| 4 | Mobile responsive | Deteksi otomatis perangkat mobile (buka di tab baru) |
| 5 | Close modal | Tombol close (✖) berfungsi dengan baik |
| 6 | Loading fallback | Mengosongkan iframe saat modal ditutup |

---

## 3. PENINGKATAN TAMPILAN (UI IMPROVEMENTS)

| No | Perubahan | Sebelum | Sesudah |
|----|-----------|---------|---------|
| 1 | Tombol kembali | Style polos | Background ungu + hover effect |
| 2 | Card hover | Tidak ada animasi | Efek naik (translateY) |
| 3 | Meeting item | Tidak ada bayangan | Menambahkan box-shadow |
| 4 | Modal close button | Kecil (25px) | Lebih besar (35px) + hover merah |
| 5 | Disabled meeting | Hanya opacity | Opacity + cursor not-allowed |

---

## 4. DATA MATERI YANG DITAMBAHKAN

### Arkom (Organisasi & Arsitektur Komputer)

| Pertemuan | Status |
|-----------|--------|
| P1 | ✅ Sudah ada |
| P2 | ✅ Sudah ada |
| P3 | ✅ Sudah ada |
| P4 | ✅ Sudah ada |
| P5 | ✅ BARU DITAMBAH |
| P6 | ✅ BARU DITAMBAH |
| P7 - P14 | ⏳ Belum ada |

---

## 5. FUNGSI YANG DIPERBAIKI

| Fungsi | Perbaikan |
|--------|-----------|
| openCourse() | Penambahan pengecekan elemen dan closure untuk URL |
| previewPPT() | Penambahan deteksi perangkat mobile |
| closeModal() | Mengosongkan src iframe setelah ditutup |
| isMobile() | Memperbaiki regex untuk deteksi semua device mobile |
| goBack() | Memastikan display grid kembali normal |

---

## 6. TESTING YANG SUDAH DILAKUKAN

- [x] Tombol card bisa diklik semua (4 mata kuliah)
- [x] Halaman pertemuan muncul dengan 14 list
- [x] Pertemuan yang ada link bisa diklik
- [x] Pertemuan tanpa link tampil disabled
- [x] Tombol "Kembali" berfungsi
- [x] Modal preview muncul di desktop
- [x] Modal bisa ditutup
- [x] Di HP otomatis buka tab baru
- [x] Tidak ada error di console browser

---

## 7. LIST MATA KULIAH

| Kode | Mata Kuliah | Status Link |
|------|-------------|-------------|
| algoritma | Algoritma & Struktur Data | 5 link |
| instrumentasi | Sistem Instrumentasi | 5 link |
| statistika | Statistika Informatika | 3 link |
| arkom | Organisasi & Arsitektur Komputer | 6 link (P1-P6) |

---

## 8. RENCANA KEDEPAN (TO-DO LIST)

- [ ] Tambah materi P7-P14 untuk Arkom
- [ ] Tambah materi lengkap untuk Algoritma (butuh 14 link)
- [ ] Tambah materi lengkap untuk Instrumentasi (butuh 14 link)
- [ ] Tambah materi lengkap untuk Statistika (butuh 14 link)
- [ ] Fitur search/filter pertemuan
- [ ] Mode gelap (Dark mode)
- [ ] Fitur download materi

---

## 9. KESIMPULAN

### Status Website Saat Ini:

| Aspek | Status |
|-------|--------|
| Fungsionalitas | ✅ 100% berfungsi |
| Responsivitas | ✅ Desktop & Mobile |
| Error | ✅ Tidak ada error console |
| Materi Arkom | ✅ P1-P6 tersedia |
| Materi lainnya | ⏳ Sebagian tersedia |

### KESIMPULAN AKHIR:
**🟢 WEBSITE DALAM KEADAAN LIVE DAN WORKING DENGAN BAIK**

---

*Dibuat oleh: Tim Pengembang*  
*Terakhir diupdate: 24 April 2026*
