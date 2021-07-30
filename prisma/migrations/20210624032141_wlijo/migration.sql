-- CreateTable
CREATE TABLE "Produk" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "jenis" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "gambar" TEXT NOT NULL,
    "harga" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL
);
