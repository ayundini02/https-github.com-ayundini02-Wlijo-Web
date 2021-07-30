import prisma from "../../../../client.ts";
import React, { useState } from "react";
import MainLayout from "../../../../component/MainLayoutAdmin";
import { useForm } from 'react-hook-form';

export async function getServerSideProps(context) {
    let kode = context.params.kode;
    let data = await prisma.produk.findUnique({
        where: { id: Number(kode) },
    });

    let { id, jenis, gambar, nama, harga, deskripsi } = data;
    return { props: { id, jenis, gambar, nama, harga, deskripsi } };
};


const FormUpdateProduk = (props) => {
    const { register, handleSubmit, errors } = useForm();

    const [jenis, setJenis] = useState(props.jenis);
    const [gambar, setGambar] = useState(props.gambar);
    const [nama, setNama] = useState(props.nama);
    const [harga, setHarga] = useState(props.harga);
    const [deskripsi, setDeskripsi] = useState(props.deskripsi);

    return (
        <section className="inner-page">
            <div className="container">
                <form onSubmit={handleSubmit(props.onSubmit)}>
                    <label className="form-label">Jenis Produk</label>
                    <select {...register("jenis", { required: true })}
                        type="text" className="form-select" id="jenis" value={jenis} onChange={(Event) => setJenis(Event.target.value)}>
                        <option selected></option>
                        <option id="sayur" value="sayur">Sayur</option>
                        <option id="buah" value="buah">Buah</option>
                        <option id="lauk" value="lauk-pauk">Lauk-Pauk</option>
                    </select>
                    <br />
                    <div className="mb-3">
                        <label className="form-label">Nama Produk</label>
                        <input {...register("nama", { required: true })}
                            type="text" className="form-control" id="nama" placeholder="nama produk"
                            value={nama} onChange={(Event) => setNama(Event.target.value)} />

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Harga Produk</label>
                        <input {...register("harga", { required: true })}
                            type="text" className="form-control" id="harga" placeholder="Rp."
                            value={harga} onChange={(Event) => setHarga(Event.target.value)} />

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Deskripsi</label>
                        <textarea {...register("deskripsi", { required: true })}
                            type="text" className="form-control" id="deskripsi" rows="3"
                            value={deskripsi} onChange={(Event) => setDeskripsi(Event.target.value)}></textarea>

                    </div>
                    <div className="mb-3">
                        <label for="formFileSm" className="form-label">Upload File</label>
                        <input {...register("gambar", { required: true })}
                            type="text" className="form-control form-control-sm" id="gambar"
                            value={gambar} onChange={(Event) => setGambar(Event.target.value)} />

                    </div><br />
                    <div className="d-grid gap-2 d-md-block">
                        <button className="btn btn-primary" type="submit">update</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

const updateProduk = (props) => {

    return (
        <MainLayout>
            <main id="main">

                <section className="breadcrumbs">
                    <div className="container">

                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Produk</h2>
                            <ol>
                                <li><a href="/berandaAdmin">Home</a></li>
                                <li>Produk</li>
                            </ol>
                        </div>
                        <FormUpdateProduk
                            jenis={props.jenis} gambar={props.gambar} nama={props.nama} harga={props.harga} deskripsi={props.deskripsi} onSubmit={async (data, event) => {
                                const produk = { jenis: data.jenis, gambar: data.gambar, nama: data.nama, harga: data.harga, deskripsi: data.deskripsi, id: props.id };

                                try {
                                    const respon = await fetch("/api/produk/update", {
                                        method: "POST",
                                        body: JSON.stringify(produk),
                                    });

                                    if (!respon.ok) throw new Error(respon.statusText);

                                    let status = await respon.json();

                                    if (status !== null) {
                                        event.target.reset();
                                        location.replace("/admin/produk/produkAdmin");
                                    }
                                } catch (error) {
                                    console.log(error);
                                }
                            }
                            }>
                        </FormUpdateProduk>
                    </div>
                </section>
            </main>
        </MainLayout>

    );
};

export default updateProduk;