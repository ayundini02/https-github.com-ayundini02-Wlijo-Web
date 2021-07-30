import prisma from "../../../client.ts";

export default async (req, res) => {
    if (req.method !== "POST")
        return res
            .status(405)
            .json({ message: 'Request method tidak diizinkan' });

    const produk = JSON.parse(req.body);
    console.log(produk);

    const perbarui = await prisma.produk.update({
        where: {
            id: produk.id,
        },
        data: {
            jenis: produk.jenis,
            gambar: produk.gambar,
            nama: produk.nama,
            harga: produk.harga,
            deskripsi: produk.deskripsi,
        },
    });
    res.json(perbarui);
};