import logo from "./logo.svg";
import "./App.css";

function App() {
  // jsx kepanjangan dari javascript xml dengan memiliki variabel javascript dengan didalamnya itu ada kita sisipkan html

  // contoh
  const userLogged = "Rezal Nur Syaifudin";

  // contoh dengan JSX
  const userLoggedJSX = <strong>Rezal Nur Syaifudin</strong>;

  // contoh Operator aritmatika
  // let a = 12;
  // let b = 15;

  return (
    <div className="Parentbox">
      <FotoProduct />
      <ProdukInfo
        isDiskon="yes"
        Category="Lebaran"
        Name="Obat Pencerah Ketek Ampuh"
      />
    </div>
  );
}

function FotoProduct() {
  return (
    <div className="Foto">
      <img src="product.jpeg" alt="" />
    </div>
  );
}

function CheckDiskon(props) {
  const { isDiskon } = props;
  if (isDiskon == "yes") {
    return (
    <p className="Diskon">Diskon 50% off.</p>
    );
  }
  else if (isDiskon =="coming") {
    return (
    <p className="Diskon">Mau ada Diskon.</p>
    );
  }
   else {
    return (
    <p className="Diskon">tidak ada diskon</p>
    );
  }
}

function ProdukInfo(props) {
  const { Category, Name, isDiskon } = props;
  const benefits = ["Tidak mudah rusak","Tidak Mudah Kusut","Ketek tahan lama"];
  const ListBenefits = benefits.map((itemBenefit) =>
    <li className="List">{itemBenefit}</li>
  );
  const price = 500000;

  return (
    <div className="TextProduct">
      <span className="Category">{Category}</span>
      <h1 className="Judul_product">{Name}</h1>
      <span className="Harga">IDR {price}</span>
      <CheckDiskon isDiskon={isDiskon} />
      <p className="Deskripsi">
        Product murah berkualitas premium dengan berbagai macam warna yang
        menarik, dengan berbagai macam fariant yang bermacam-macam sehingga
        mempermudah menumbuhkan bulu ketiak secara maxsimal.
      </p>
      <ul>
        {ListBenefits}
      </ul>
      <a onClick={(e) => TambahCard(Name, e)} href="#">
        Add to Card
      </a>
    </div>
  );
}

function TambahCard(e) {
  return alert("Anda Membeli " + e);
}

export default App;
