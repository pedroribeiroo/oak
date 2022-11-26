import { Link } from "react-router-dom";

import useFetch from "../../hooks/useFetch";

export default function Home() {
  const {
    data: products,
    isPending,
    error,
  } = useFetch("http://localhost:3001/products");
  if (isPending) {
    return <div className="loader"></div>;
  }
  if (error) {
    return <div className="error">{error}</div>;
  }
  return (
    <div className="h-screen flex flex-col bg-gray-800 text-white">
      <div className="py-10 px-2">
        <Link
          to="/new"
          className="bg-blue-400 hover:bg-blue-200 transition-all text-lg font-black p-4 rounded"
        >
          NOVO PRODUTO
        </Link>

        <div className="overflow-x-auto relative shadow-md sm:rounded-lg mt-8">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 ">
              <tr>
                <th scope="col" className="py-3 px-6">
                  NOME
                </th>
                {/* <th scope="col" className="py-3 px-6">
                  DESCRIÇÃO
                </th> */}
                <th scope="col" className="py-3 px-6">
                  PREÇO
                </th>
                {/* <th scope="col" className="py-3 px-6">
                  DISPONÍVEL
                </th> */}
              </tr>
            </thead>
            <tbody>
              {products.sort().map((product) => (
                <tr
                  key={product.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {product.name}
                  </th>
                  {/* <td className="py-4 px-6">{product.description}</td> */}
                  <td className="py-4 px-6">{product.price}</td>
                  {/* <td className="py-4 px-6">{product.available ? "Sim" : "Não"}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
