import prisma from "../../../client.ts";

export default async (req, res) => {
    if (req.method !== 'POST')
        return res
            .status(405)
            .json({ message: 'Request method tidak diizinkan' });

    const produk = JSON.parse(req.body);

    const tambah = await prisma.produk.create({
        data: {
            jenis: produk.jenis,
            nama: produk.nama,
            harga: produk.harga,
            deskripsi: produk.deskripsi,
            gambar: produk.gambar,
        },
    });

    res.json(tambah);
};