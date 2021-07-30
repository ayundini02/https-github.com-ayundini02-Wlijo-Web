import MainLayout from '../../../component/MainLayoutAdmin';
import prisma from '../../../client.ts';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from "next/link";

export async function getServerSideProps(context) {
  const tambahProduk = await prisma.produk.findMany();

  return { props: { tambahProduk } };
}


const FormTambahProduk = (props) => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  return (

    <section className="inner-page">
      <div className="container">
        <form onSubmit={handleSubmit(props.onSubmit)}>
          <label className="form-label">Jenis Produk</label>
          <select {...register('jenis', { required: true })}
            className="form-select" id="jenis" aria-label="Default select example">
            <option selected></option>
            <option id="sayur" value="sayur">Sayur</option>
            <option id="buah" value="buah">Buah</option>
            <option id="lauk" value="lauk-pauk">Lauk-Pauk</option>
          </select>
          {errors.jenis?.type === 'required' && "First jenis is required"}
          <br />
          <div className="mb-3">
            <label className="form-label">Nama Produk</label>
            <input {...register('nama', { required: true })}
              type="text" className="form-control" id="nama" placeholder="nama produk" />
            {errors.nama?.type === 'required' && "First name is required"}
          </div>
          <div className="mb-3">
            <label className="form-label">Harga Produk</label>
            <input {...register('harga', { required: true })}
              type="text" className="form-control" id="harga" placeholder="Rp." />
            {errors.harga?.type === 'required' && "First harga is required"}
          </div>
          <div className="mb-3">
            <label className="form-label">Deskripsi</label>
            <textarea {...register('deskripsi', { required: true })}
              type="text" className="form-control" id="deskripsi" rows="3"></textarea>
            {errors.deskripsi?.type === 'required' && "First deskripsi is required"}
          </div>
          <div className="mb-3">
            <label for="formFileSm" className="form-label">Upload File</label>
            <input {...register('gambar', { required: true })}
              type="text" className="form-control form-control-sm" id="gambar" />
            {errors.gambar?.type === 'required' && "First gambar is required"}
          </div><br />
          <div className="d-grid gap-2 d-md-block">
            <button className="btn btn-primary" type="submit">tambah</button>
          </div>
        </form>
      </div>
    </section>
  );
};

const adminProduk = (props) => {
  const [tambahProduk, setDaftarProduk] = useState(props.tambahProduk);
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
            <FormTambahProduk
              onSubmit={async (data, event) => {
                const produk = { id: data.id, jenis: data.jenis, nama: data.nama, harga: data.harga, deskripsi: data.deskripsi, gambar: data.gambar };

                try {
                  const respon = await fetch('/api/produk/tambah', {
                    method: 'POST',
                    body: JSON.stringify(produk),
                  });

                  if (!respon.ok) throw new Error(respon.statusText);

                  let status = await respon.json();

                  if (status !== null) {
                    event.target.reset();
                    setDaftarProduk([...tambahProduk, produk]);
                  }
                  alert("Data Berhasil Masuk");
                } catch (error) {
                  console.log(error);
                }
              }}
            />
            <table>
              <tr>
                <th>No.</th>
                <th>Jenis Produk</th>
                <th>Nama Produk</th>
                <th>Harga Produk</th>
                <th>Deskripsi</th>
                <th>Upload File</th>
                <th></th>
              </tr>

              <tbody>
                {tambahProduk.map((produk, nomor = 1) => (
                  <tr key={produk.id}>
                    <td>{nomor + 1}</td>
                    <td>{produk.jenis}</td>
                    <td>{produk.nama}</td>
                    <td>{produk.harga}</td>
                    <td>{produk.deskripsi}</td>
                    <td>{produk.gambar}</td>
                    <td align="center">
                      <Link href="/admin/produk/ubah/[kode]" as={`/admin/produk/ubah/${produk.id}`}>
                        <button className="btn btn-primary" type="submit">ubah</button>
                      </Link>
                      <button className="btn btn-danger" type="submit"
                        onClick={async (event) => {
                          try {
                            const hapus = await fetch("/api/produk/hapus", {
                              method: "POST",
                              body: JSON.stringify(produk),
                            });
                            location.reload();
                            alert("Data Berhasil dihapus");
                          } catch (error) {
                            console.log(error);
                          }
                        }}>
                        hapus</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        </section>
      </main>
    </MainLayout>
  )
}


export default adminProduk;