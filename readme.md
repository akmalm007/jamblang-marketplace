# Plantopia

**Plantopia** adalah website bertema marketplace tanaman yang berisi berbagai tanaman hias, peralatan kebun, dan juga pupuk.

## Proses Pengembangan
Proses dalam pengembangan website yang dibuat ini meliputi hal berikut:

- Mencari referensi landing page yang cocok untuk ditampilkan oleh pengguna sebagai halaman home.
- Mencari berbagai macam product card dan detail dari produk yang digunakan untuk mengisi landing page.
- Merencanakan fitur fitur halaman yang berperan pada website marketplace seperti cart page, wishlist, dan chat. 
- Menentukan color pallette di website dengan teman earth tone.
- Pembuatan layout dan page dilakukan di dalam figma.

## Penjelasan setiap bagian pada website
Penjelasan kode yang dibuat menggunakan HTML dan CSS.

### Tampilan Utama
setiap bagian pada halaman landing page dibagi dengan tag <section> lalu pada tampilan utama dibungkus dengan container
kemudian di dalamnya terdapat container lagi yang memuat dua buah container yaitu:

- <div class="container1"> yang berisi pengenalan tentang website dan halaman login jika pengunjung ingin mendaftarkan data diri
- <div class="container2"> yang berisi sosial media yang bisa dikunjungin oleh pengunjung untuk melihat konten yang ada pada website

```html
      <section class="landing-page">
        <div class="container1">
          <div class="web-title-container">
            <h1 class="landing-page-title
                ">
              Bawa Alam 
              <br>
              Kerumah Anda
            </h1>

            <h3 class="slogan">Temukan pilihan terbaik dan personalisasikan pengalaman berbelanja Anda dengan bergabung bersama kami.</h3>


            <div class="login-container">
                <br>
              <button class="login">Login</button/tton>
              <br>
              <br>
              <h5 style="color: #333;">Belum punya akun? <strong style="color: rgb(42, 124, 93);">Daftar</strong></h5>
            </div>

            
          </div>

          <br>
          <br>
          <br>
          <br>
        </div>
        <div class="container2">
          <div class="stats-container">
            <div class="stats-box">
              <h5>Lorem, ipsum.</h5>
              <h1>100RB+</h1>
            </div>
            <div class="stats-box">
              <h5>Lorem, ipsum.</h5>
              <h1>100RB+</h1>
            </div>
            <div class="stats-box">
              <h5>Lorem, ipsum.</h5>
              <h1>100RB+</h1>
            </div>
          </div>
          <p class="temukan">Temukan kami di:</p>

          <div class="socmed-box">
            <a href="" class="socmed-icon"><i class='bx bxl-youtube' ></i></a>
            <a href="" class="socmed-icon"><i class='bx bxl-twitter' ></i></a>
            <a href="" class="socmed-icon"><i class='bx bxl-instagram-alt' ></i></a>
            <a href="" class="socmed-icon"><i class='bx bxl-facebook-square'></i></a>
          </div>
        </div>
      </section>
```
#### Styling pada Tampilan Utama 
Di bagiann tampilan utama setiap div diberi stylenya masing masing seperti berikut:

- `.landing-page` yang akan mengatur container yang ada di dalam kelas landing page menggunakan `display: flex` dan margin untuk mengatur ketinggian masing masing container
- `.container1` adalah kelas yang mengatur isi yang ada di dalam container seperti button login
- `.slogan` kelas yang dibuat untuk mengatur tampilan yang berada di kelas container1 menggunakan `word-wrap: break-word;`


```css
.landing-page {
  background-color: rgb(232, 239, 237);
  height: 600px;
  box-shadow: var(--shadow);
  display: flex;
  width: 95%;
  margin: 0 auto;
  margin-top: 6vh;
  padding: 1rem 0;
  border-radius: 15px;
}

.container1 {
  /* background-image: url(../image/blurrygrd1.svg); */
  background-image: url(../image/blurrygrd3.svg);
  background-position: center;
  width: 50%;
  border-radius: 10px;
  box-shadow: var(--shadow);
  margin: 0 10px;
  height: 100%;
  display: flex;
}

.slogan {
  font-weight: normal;
  width: 500px;
  word-wrap: break-word;
}

.landing-page-title {
  font-size: 50px;
  font-weight: 600;
}


```




