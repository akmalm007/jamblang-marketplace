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

- `<div class="container1">` yang berisi pengenalan tentang website dan halaman login jika pengunjung ingin mendaftarkan data diri
- `<div class="container2">` yang berisi sosial media yang bisa dikunjungin oleh pengunjung untuk melihat konten yang ada pada website

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

### Detail Product
Berisi halam yang menjelaskan detail dari produk yang dipasarkan di website 

Pada blok kode ini dibuat container yang akan container contaier lain yang menyimpan gambar, button, serta detial dari tanaman
```html
      <section class="detail-product-section">
        <div class="photos-main-container">
          <div class="photo-container">
            <div class="display-photo-container">
              <img
                class="display-photo"
                src="image/category-tanaman-hias.jpg"
                alt="display photo"
              />
            </div>
            <div class="photo-collection">
              <a href="" class="other-photo"
                ><img src="image/category-buah-sayur.jpg" alt="other-photo"
              /></a>
            </div>
          </div>
          <div class="icon-container">
            <a href="#"><i class="bx bx-share-alt"></i></a>
          </div>
          <div class="buy-container"></div>
        </div>
        <div class="price-desc-section">
          <div class="price-desc-container">
            <h1 class="title-product">TITLE PRODUCT</h1>

            <div class="star-tag-container">
              <p class="star">⭐⭐⭐⭐⭐</p>
              <p>100 Review</p>

              <div class="tags-box">
                <p><i class="bx bxs-purchase-tag"></i></p>
                <p>Tanaman hias</p>
              </div>
            </div>

            <div class="price-container">
              <h2 class="price">Rp 180.000</h2>

              <h4 class="before-discount-price">Rp 200.000</h4>
            </div>

            <div class="desc-container">
              <h2 class="desc">desc</h2>
              <p class="desc-cotent">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </section>
```
#### Styling dari Detail Product
styling yang ada bagian ini ada 3 bagian utama yaitu:

- `.detail-product-section` yang akan menampung dua container utama yaitu deskrpsi dari produk seperti title, harga, dan detail product
- `.photos-main-container` kelas ini akan menampung foto utama yang ada di halaman detail produk, lalu ada lagi kelas tambahan
yang akan menampilkan foto foto kecil produk secara vertical dengan `flex-direction: column`.
- `.price-desc-container ` kelas yang akan menyimpan teks dan review yang ada dalam produk untuk mengatur isinya menggunakan margin dan padding untuk mengatur spacing antar container 

```css
.detail-product-section {
  margin-bottom: 5rem;
  display: flex;
  padding-top: 5vh;
  width: 100%;
  height: fit-content;
}

.photos-main-container {
  width: 50%;
  height: fit-content;
  margin: 0 auto;
  position: sticky;
  top: 4rem;
}
.price-desc-container {
  box-shadow: var(--shadow);
  width: auto;
  height: 100%;
  background-color: var(--secondary);
  margin: 0 1rem;
  padding: 2rem;
  border-radius: 15px;
  border: 2px solid var(--accent);
}
```
