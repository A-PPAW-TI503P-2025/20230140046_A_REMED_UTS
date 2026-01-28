# Library System 
Backend sederhana untuk manajemen perpustakaan yang mengimplementasikan fitur peminjaman berbasis lokasi (Geolocation) dan simulasi hak akses berbasis Role

## Fitur Utama
* **Manajemen Inventaris**: CRUD buku lengkap (Admin Only)
* **Peminjaman Berbasis Lokasi**: Mencatat koordinat GPS (latitude, longitude) saat peminjaman dilakukan
* **Simulasi Autentikasi**: Menggunakan Headers untuk membedakan hak akses Admin dan User tanpa JWT
* **Update Stok Otomatis**: Stok buku berkurang setiap kali transaksi peminjaman berhasil dilakukan

## Spesifikasi Teknis
* **Runtime**: Node.js & Express.js
* **Database**: MySQL
* **ORM**: Sequelize
* **Simulasi Role**: Header `x-user-role`

## Struktur Database
Sistem menggunakan dua tabel utama sesuai dengan model data yang diminta:
1. **Book**: Menyimpan informasi buku (`id`, `title`, `author`, `stock`)
2. **BorrowLog**: Menyimpan riwayat peminjaman (`id`, `userId`, `bookId`, `borrowDate`, `latitude`, `longitude`)

## Cara Instalasi & Menjalankan
1. **Clone repository** dan masuk ke direktori proyek.
2. **Instal dependensi**:
   ```bash
   npm install
   ```
3. **Konfigurasi Database**: Buat database bernama library_db di MySQL dan sesuaikan kredensial pada file .env.
4. **Jalankan Aplikasi**:
   ```bash
   node app.js
    ```
Server akan berjalan di http://localhost:3000.

## Dokumentasi Endpoint API
1. **POST Buku**: hanya dapat dilakukan oleh admin
<img width="1920" height="1080" alt="Screenshot (860)" src="https://github.com/user-attachments/assets/83dfe634-635a-419f-9541-fc7db3053456" />
<img width="1920" height="1080" alt="Screenshot (861)" src="https://github.com/user-attachments/assets/749d2bfc-7885-47ee-8e92-1211f5958864" />
<img width="1920" height="1080" alt="Screenshot (867)" src="https://github.com/user-attachments/assets/1e1c31b2-e9ea-4146-bb12-d5ade8fb77bf" />

2. **GET Buku**
<img width="1920" height="1080" alt="Screenshot (862)" src="https://github.com/user-attachments/assets/88d7b93a-9263-4cf3-991f-052e060582a0" />

3. **POST Borrow**: oleh user
<img width="1920" height="1080" alt="Screenshot (864)" src="https://github.com/user-attachments/assets/1967de2c-9143-484e-a996-f7fddf5a25db" />
<img width="764" height="464" alt="image" src="https://github.com/user-attachments/assets/69d38974-49c9-4d0f-8c35-1c3fe2aa45b7" />

4. **PUT Buku**
<img width="1920" height="1080" alt="Screenshot (865)" src="https://github.com/user-attachments/assets/7fc7f561-e3cb-4cb1-b1e7-130ac0a9319a" />

6. **DELETE Buku**
<img width="1920" height="1080" alt="Screenshot (866)" src="https://github.com/user-attachments/assets/6db72422-639e-407f-9633-239b0ad88c22" />


