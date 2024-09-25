import Image from "next/image";
import nama from "../../public/nama.svg";
import logo from "../../public/logo.svg";
import Landing from "../../public/landing.png";
import ceklis from "../../public/ceklis.svg";
import wceklis from "../../public/wceklis.svg";
import footer from "../../public/footer.svg";
import wa from "../../public/wa.svg";

import MultipleCarousel from "@/components/multipleCarousel";

import Kalkulator from "@/components/kalkulator";
export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${Landing.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
      className=""
    >
      <div className="grid grid-cols-10 w-screen bg-[#3598FF] justify-center md:gap-5 pr-[20px]">
        <div className="flex justify-center bg-[#061B3A] rounded-e-full col-span-4 md:col-span-3  py-[8px]  ">
          <Image
            src={logo}
            alt=""
            width={100}
            height={100}
            className="pl-[20px] "
          />
          <Image
            src={nama}
            alt=""
            width={100}
            height={100}
            className="pr-[17px] w-[93px] md:w-[124px] "
          />
        </div>

        <a
          href="#kalkulator"
          className="text-center text-xs md:text-base my-auto col-span-3 md:col-span-5 md:text-end"
        >
          SIMULASI
        </a>
        <a
          href="#tentang"
          className="text-center text-xs md:text-base my-auto col-span-3 md:col-span-2"
        >
          TENTANG KAMI
        </a>
      </div>
      <section className="relative w-full bg-cover bg-center pb-24">
        <div className="p-[25px] md:p-[94px] z-50 relative">
          <div className="w-7/12">
            <h1 className="text-white font-bold text-2xl md:text-5xl break-words">
              PERLU DANA CEPAT?
            </h1>
          </div>
          <p className="text-[14px] md:text-3xl font-medium md:font-normal text-white mt-4 w-10/12 md:my-10">
            Kami hadirkan solusi untuk anda dengan pinjaman dana tunai jaminan
            BPKB motor dan mobil dari multifinance berizin otoritas jasa
            keuangan (OJK) yaitu WOM Finance, Adira, FIF, BFI, Kredit Plus, dan
            Mega Finance.
          </p>
          <div className="flex flex-col w-full gap-2 md:gap-5 mt-7 font-semibold">
            <a
              href="https://wa.me/62881025426135"
              className="bg-[#3598FF] text-center w-[180px] md:w-[324px] rounded-full px-2 py-2 text-sm md:text-2xl"
            >
              AJUKAN SEKARANG
            </a>
            <a
              href="#kalkulator"
              className="bg-[#E74FA2] text-center w-[218px] md:w-[392px] rounded-full px-2 py-2 text-sm md:text-2xl"
            >
              KALKULATOR PINJAMAN
            </a>
          </div>
        </div>
      </section>
      <div className="translate-y-[1px] w-full">
        <svg
          className="w-full"
          viewBox="0 0 1280 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1280 49.0417V66H0V49.2811C122.065 19.9568 363.102 0 640.5 0C917.143 0 1157.62 19.8483 1280 49.0417Z"
            fill="#3598FF"
          />
        </svg>
      </div>

      <section
        id="tentang"
        className="bg-[#3598FF] p-8 md:p-[96px] text-center "
      >
        <h3 className="text-white font-bold mb-4 md:text-[40px]">
          TENTANG KAMI
        </h3>
        <p className="text-white text-[14px] md:text-[32px] font-normal">
          Kawangadai.com merupakan mitra resmi dari beberapa perusahaan finance
          resmi yang berlisensi OJK yaitu WOM Finance, ADIRA, FIF, BFI, Kredit
          Plus dan MEGA Finance. Kami dapat membantu menawarkan produk pinjaman
          dana tunai dengan jaminan BPKB Motor dan Mobil. Kami dapat melayani
          customer seJABODETABEK.
        </p>
        <h3 className="text-white font-bold mt-8 md:mt-[82px] mb-4 md:text-[40px]">
          KENAPA GADAI BPKB DI KAMI?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white rounded-xl p-4 flex flex-col gap-3">
            <div className=" flex items-start gap-2">
              <Image
                src={ceklis}
                alt=""
                width={100}
                height={100}
                className="w-[20px] md:w-[26px]"
              />
              <p className="font-semibold text-sm md:text-2xl text-start text-[#003B8E]">
                Nilai pinjaman mulai dari 1 juta sampai 500 juta
              </p>
            </div>
            <div className=" flex items-start gap-2">
              <Image
                src={ceklis}
                alt=""
                width={100}
                height={100}
                className="w-[20px] md:w-[26px]"
              />
              <p className="font-semibold text-sm md:text-2xl text-start text-[#003B8E]">
                Rate bunga rendah
              </p>
            </div>
            <div className=" flex items-start gap-2">
              <Image
                src={ceklis}
                alt=""
                width={100}
                height={100}
                className="w-[20px] md:w-[26px]"
              />
              <p className="font-semibold text-sm md:text-2xl text-start text-[#003B8E]">
                Angsuran Ringan
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 flex flex-col gap-3">
            <div className=" flex items-start gap-2">
              <Image
                src={ceklis}
                alt=""
                width={100}
                height={100}
                className="w-[20px] md:w-[26px]"
              />
              <p className="font-semibold text-sm md:text-2xl text-start text-[#003B8E]">
                Pajak mati bisa dibiayai tanpa potongan
              </p>
            </div>
            <div className=" flex items-start gap-2">
              <Image
                src={ceklis}
                alt=""
                width={100}
                height={100}
                className="w-[20px] md:w-[26px]"
              />
              <p className="font-semibold text-sm md:text-2xl text-start text-[#003B8E]">
                Menerima plat daerah dan KTP daerah
              </p>
            </div>
            <div className=" flex items-start gap-2">
              <Image
                src={ceklis}
                alt=""
                width={100}
                height={100}
                className="w-[20px] md:w-[26px]"
              />
              <p className="font-semibold text-sm md:text-2xl text-start text-[#003B8E]">
                Kos atau Kontrak bisa
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 flex flex-col gap-3">
            <div className=" flex items-start gap-2">
              <Image
                src={ceklis}
                alt=""
                width={100}
                height={100}
                className="w-[20px] md:w-[26px]"
              />
              <p className="font-semibold text-sm md:text-2xl text-start text-[#003B8E]">
                Dibiayai oleh leasing berlisensi OJK
              </p>
            </div>
            <div className=" flex items-start gap-2">
              <Image
                src={ceklis}
                alt=""
                width={100}
                height={100}
                className="w-[20px] md:w-[26px]"
              />
              <p className="font-semibold text-sm md:text-2xl text-start text-[#003B8E]">
                Keamanan data terjamin
              </p>
            </div>
            <div className=" flex items-start gap-2">
              <Image
                src={ceklis}
                alt=""
                width={100}
                height={100}
                className="w-[20px] md:w-[26px]"
              />
              <p className="font-semibold text-sm md:text-2xl text-start text-[#003B8E]">
                Diproses langsung marketing resmi dari leasing
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 flex flex-col gap-3">
            <div className=" flex items-start gap-2">
              <Image
                src={ceklis}
                alt=""
                width={100}
                height={100}
                className="w-[20px] md:w-[26px]"
              />
              <p className="font-semibold text-sm md:text-2xl text-start text-[#003B8E]">
                Pencairan di hari yang sama
              </p>
            </div>
            <div className=" flex items-start gap-2">
              <Image
                src={ceklis}
                alt=""
                width={100}
                height={100}
                className="w-[20px] md:w-[26px]"
              />
              <p className="font-semibold text-sm md:text-2xl text-start text-[#003B8E]">
                Proses tanpa survey
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white">
        <div className="-translate-y-[1px] w-full">
          <svg
            className="w-full rotate-180"
            viewBox="0 0 1280 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1280 49.0417V66H0V49.2811C122.065 19.9568 363.102 0 640.5 0C917.143 0 1157.62 19.8483 1280 49.0417Z"
              fill="#3598FF"
            />
          </svg>
          <section
            id="kalkulator"
            className="bg-white p-8 md:p-[96px] border-none text-black"
          >
            <h3 className="text-black font-bold mb-4 md:text-4xl">
              {" "}
              KALKULATOR PINJAMAN
            </h3>
            <p className="text-black md:text-[32px]">
              Hitung dan dapatkan nilai pinjaman serta angsuran sesuai dengan
              kebutuhan anda!
            </p>

            <Kalkulator />
          </section>
        </div>
        <section className="bg-white p-8 md:px-[96px] text-black">
          <h3 className="text-[##003B8E] font-bold mb-4 md:mb-8 md:text-4xl">
            SYARAT UMUM PEMBIAYAAN
          </h3>
          <div className="bg-[#3598FF] rounded-xl p-4 flex flex-col gap-3">
            <div className=" flex items-start gap-2">
              <Image
                src={wceklis}
                alt=""
                width={100}
                height={100}
                className="w-[20px] md:w-[26px]"
              />
              <p className="font-semibold text-sm md:text-2xl text-start text-white">
                WNI dengan usia minimal 21 tahun
              </p>
            </div>
            <div className=" flex items-start gap-2">
              <Image
                src={wceklis}
                alt=""
                width={100}
                height={100}
                className="w-[20px] md:w-[26px]"
              />
              <p className="font-semibold text-sm md:text-2xl text-start text-white">
                Usia motor paling tua tahun 2012
              </p>
            </div>
            <div className=" flex items-start gap-2">
              <Image
                src={wceklis}
                alt=""
                width={100}
                height={100}
                className="w-[20px] md:w-[26px]"
              />
              <p className="font-semibold text-sm md:text-2xl text-start text-white">
                Memiliki penghasilan dari bekerja atau Wirausaha
              </p>
            </div>
            <div className=" flex items-start gap-2">
              <Image
                src={wceklis}
                alt=""
                width={100}
                height={100}
                className="w-[20px] md:w-[26px]"
              />
              <p className="font-semibold text-sm md:text-2xl text-start text-white">
                Motor milik sendiri, BPKB asli
              </p>
            </div>
            <div className=" flex items-start gap-2">
              <Image
                src={wceklis}
                alt=""
                width={100}
                height={100}
                className="w-[20px] md:w-[26px]"
              />
              <p className="font-semibold text-sm md:text-2xl text-start text-white">
                Pajak mati diperbolehkan minimal 5 Tahun
              </p>
            </div>
          </div>
        </section>
        <div className="translate-y-[1px] w-full">
          <svg
            className="w-full"
            viewBox="0 0 1280 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1280 49.0417V66H0V49.2811C122.065 19.9568 363.102 0 640.5 0C917.143 0 1157.62 19.8483 1280 49.0417Z"
              fill="#3598FF"
            />
          </svg>
        </div>
      </div>
      <section className="bg-[#3598FF] p-8 md:p-[96px] text-center">
        <h3 className="text-white font-bold mb-4 md:text-4xl">TESTIMONI</h3>
        <MultipleCarousel />
      </section>
      <section className="bg-[#062045] w-full p-8 md:p-[96px] flex flex-col items-center">
        <Image
          src={footer}
          alt=""
          width={1000}
          height={1000}
          className="w-[120px] md:w-[277px]"
        />
        <p className=" text-white text-center text-xs md:text-2xl mb-5 md:w-10/12">
          Ruko Oregon TCR No 32, Jl. Raya Kota Wisata, Ciangsana, Gn Putri, Kab.
          bogor, KAB. BOGOR, GUNUNG PUTRI, JAWA BARAT, ID, 16968
        </p>
        <a
          href="https://wa.me/62881025426135"
          className="bg-white rounded-full flex px-2 text-green-500 text-xs font-semibold py-1 items-center"
        >
          <span>
            <Image
              src={wa}
              alt=""
              width={100}
              height={100}
              className="w-[29px]"
            />
          </span>
          Hubungi kami
        </a>
      </section>
      <section className="bg-black text-center p-1 text-[10px]  font-normal">
        <p>2024 Kawan Gadai</p>
      </section>
    </div>
  );
}
