import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function NewProduct() {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setValue] = useState("");
  const [available, setAvailable] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
    const data = { name, description, price, available };
    console.log(JSON.stringify(data));
    fetch("http://localhost:3001/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-800 text-white">
      <Link
        to="/"
        className="bg-blue-400 hover:bg-blue-200 transition-all text-lg font-black p-4 rounded"
      >
        VOLTAR
      </Link>
      <form
        className="flex flex-col items-center justify-center gap-4 mt-4"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Nome do produto"
          className="max-w-xl w-screen h-20 bg-white border-none rounded outline-none px-6 text-2xl text-black"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Descrição do produto"
          className="max-w-xl w-screen h-20 bg-white border-none rounded outline-none px-6 text-2xl text-black"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Valor do produto"
          className="max-w-xl w-screen h-20 bg-white border-none rounded outline-none px-6 text-2xl text-black"
          value={price}
          onChange={(event) => setValue(event.target.value)}
          required
        />
        <label>Disponível para venda?</label>
        <input
          type="checkbox"
          placeholder="Disponível para venda"
          className="max-w-xl w-screen h-20 bg-white border-none rounded outline-none px-6 text-2xl text-black"
          value={available}
          onChange={(event) => setAvailable(event.target.checked)}
        />
        <button
          type="submit"
          className="max-w-xl w-screen h-20 bg-green-200 border-none rounded outline-none px-6 text-2xl font-black hover:bg-green-400 transition"
        >
          CADASTRAR
        </button>
      </form>
    </div>
  );
}
