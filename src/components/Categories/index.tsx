import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function Categories() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedJoke, setSelectedJoke] = useState("Click that button...");

  const getJoke = () => {
    if (selectedCategory === "") {
      api.get("https://api.chucknorris.io/jokes/random").then((res) => {
        setSelectedJoke(res.data.value);
      });
    } else {
      api
        .get(
          `https://api.chucknorris.io/jokes/random?category=${selectedCategory}`
        )
        .then((res) => {
          setSelectedJoke(res.data.value);
        });
    }
  };

  useEffect(() => {
    api.get("https://api.chucknorris.io/jokes/categories").then((res) => {
      setCategories(res.data);
    });
  }, []);

  return (
    <>
      <div>
        <div className="p-4 text-3xl text-slate-800 ">
          <h1>Selecione uma categoria:</h1>
        </div>
        <div className="p-8 grid grid-cols-12 items-center border border-slate-800 rounded-xl m-4 text-slate-800 text-xl">
          {categories.map((item) => {
            return (
              <>
                <input
                  type="radio"
                  name="category"
                  value={item}
                  id={item}
                  onClick={() => setSelectedCategory(item)}
                  checked={selectedCategory === item}
                />

                <label className="text-xl" htmlFor={item}>
                  {item}
                </label>
              </>
            );
          })}
        </div>
        <div>
          <div className="flex justify-center">
            <button
              className="border border-slate-800 p-4 rounded-xl m-16 text-white bg-slate-800 text-xl"
              onClick={getJoke}
            >
              Clique para ver uma piada
            </button>
          </div>
          <div className="p-16 border border-slate-800 rounded-xl m-4 text-slate-800 text-xl">
            <p>{selectedJoke}</p>
          </div>
        </div>
      </div>
    </>
  );
}
