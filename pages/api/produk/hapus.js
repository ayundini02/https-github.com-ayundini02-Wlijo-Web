import prisma from "../../../client.ts";

export default async (req, res) => {
    if (req.method !== 'POST')
        return res
            .status(405)
            .json({ message: 'Request method tidak diizinkan' });

    const produk = JSON.parse(req.body);

    const hapus = await prisma.produk.delete({
        where: {
            id: produk.id,
        },
    });
    res.json(hapus);
};