/**
 * @TODO:
 * 1. Baca semua nama folder yang ada di dalam direktori ini
 * 2. Tulis semua nama folder yang ada di dalam direktori ini ke dalam file `out.txt`
 * 3. Pastikan direktori yang ditulis pada `out.txt` diurutkan secara ascending (A-Z).
 *
 * Contoh:
 * Jika dalam direktori ini terdapat folder `aaa`, `bbb`, dan `ccc`,
 * maka file `out.txt` akan berisi -> aaa,bbb,ccc
 *
 * Catatan:
 * - Anda bisa men-generate kembali folder-folder dengan menjalankan berkas `generate-folders.js`
 * - Hindari untuk mengubah kode yang sudah ada sebelumnya
 */

const fs = require('fs');
const path = require('path');

function readDirAndWriteFile() {
  // Tulis jawaban di bawah ini
  const allFiles = fs.readdirSync(__dirname);
  const folders = allFiles.filter(file => {
    return fs.lstatSync(path.join(__dirname, file)).isDirectory();
  });

  folders.sort();
  const writingStyle = folders.join(',');

  fs.writeFileSync('out.txt', writingStyle);
  console.log('Folders in this directory: ', writingStyle);
}

readDirAndWriteFile();
