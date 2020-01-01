'use client'
import React, { useState } from 'react';
import { Dropdown, DropdownItem } from 'flowbite-react';

function Kalkulator() {
  const [tenor, setTenor] = useState('Pilih Tenor Pembayaran');
  const [dana, setDana] = useState('');
  const [kota, setKota] = useState('');
  const [detail, setDetail] = useState('');
  const [danaMaksimal, setDanaMaksimal] = useState(false);

  const handleSubmit = () => {
    const maksimalText = danaMaksimal ? 'Ya' : 'Tidak';
    const message = `Dana Pinjaman : ${dana}\nKota/Kabupaten : ${kota}\nMerk, Tipe & Tahun : ${detail}\nTenor Pembayaran : ${tenor}\nButuh Dana Maksimal : ${maksimalText}\nTerimakasih`;
    
    const whatsappURL = `https://wa.me/62881025426135?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div>
      <div className="mt-[23px] grid grid-cols-1 md:grid-cols-2 md:gap-x-10 gap-y-5">
        <div>
          <p className="text-xs md:text-3xl font-bold md:font-semibold my-1">Dana yang dibutuhkan</p>
          <input
            type="text"
            value={dana}
            onChange={(e) => setDana(e.target.value)}
            placeholder="Masukan dana yang dibutuhkan"
            className="bg-[#E6E6E6] w-full p-2 rounded-md"
          />
        </div>
        <div className="md:hidden">
          <input
            type="checkbox"
            name="danaMaksimal"
            id="danaMaksimal"
            checked={danaMaksimal}
            onChange={() => setDanaMaksimal(!danaMaksimal)}
            className="bg-[#E6E6E6] mr-1 mt-[14px] mb-[23px]"
          />
          <label htmlFor="danaMaksimal" className="text-xs">Butuh Dana Maksimal</label>
        </div>
        <div>
          <p className="text-xs md:text-3xl font-bold md:font-semibold my-1">Tenor Pembayaran</p>
          <div className="bg-[#E6E6E6] p-2 rounded-md">
            <Dropdown label={tenor} inline className="w-full px-2 md:w-3/12 text-slate-700">
              <DropdownItem onClick={() => setTenor('12 Bulan')}>12 Bulan</DropdownItem>
              <DropdownItem onClick={() => setTenor('18 Bulan')}>18 Bulan</DropdownItem>
              <DropdownItem onClick={() => setTenor('24 Bulan')}>24 Bulan</DropdownItem>
              <DropdownItem onClick={() => setTenor('32 Bulan')}>32 Bulan</DropdownItem>
            </Dropdown>
          </div>
        </div>
        <div>
          <p className="text-xs md:text-3xl font-bold md:font-semibold my-1">Kota/Kabupaten</p>
          <input
            type="text"
            value={kota}
            onChange={(e) => setKota(e.target.value)}
            placeholder="Masukan kota/kabupaten"
            className="bg-[#E6E6E6] w-full p-2 rounded-md"
          />
        </div>
        <div>
          <p className="text-xs md:text-3xl font-bold md:font-semibold my-1">Merk, Tipe dan Tahun Motor/Mobil</p>
          <input
            type="text"
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
            placeholder="Masukan detail"
            className="bg-[#E6E6E6] w-full p-2 rounded-md"
          />
        </div>
        <div className="md:block hidden">
          <input
            type="checkbox"
            name="danaMaksimal"
            id="danaMaksimal"
            checked={danaMaksimal}
            onChange={() => setDanaMaksimal(!danaMaksimal)}
            className="bg-[#E6E6E6] mr-1 mt-[14px] mb-[14px]"
          />
          <label htmlFor="danaMaksimal" className="text-xl">Butuh Dana Maksimal</label>
        </div>
        <div></div>
        <button
          onClick={handleSubmit}
          className="bg-[#FF6531] rounded-md md:col-span-2 w-full p-2 mt-6 md:text-3xl text-white font-bold"
        >
          HITUNG PINJAMAN
        </button>
      </div>
    </div>
  );
}

export default Kalkulator;
