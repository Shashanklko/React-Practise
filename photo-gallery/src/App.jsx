import { useState, useEffect, useCallback } from 'react';
import Card from './Card';
import { FaSun, FaMoon } from 'react-icons/fa';

const App = () => {

  const [pic, setPhoto] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  const fetchphoto = useCallback(async (pageToLoad) => {

    try {

      setLoading(true);
      const response = await fetch(
        `https://picsum.photos/v2/list?page=${pageToLoad}&limit=12`
      );

      const data = await response.json();

      setPhoto(data);

      setPage(pageToLoad + 1);

    } catch (err) {

      console.error("Error fetching photos:", err);

    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {

    Promise.resolve().then(() => fetchphoto(1));

  }, [fetchphoto]);

  useEffect(() => {

    localStorage.setItem("theme", theme);

  }, [theme]);

  return (

    <div className={`${theme === "dark" ? "bg-gray-900" : "bg-white"} min-h-screen p-5`}>

      <div className='flex justify-between items-center mb-6'>

        <h1
          className={`${theme === "dark" ? "text-green-200" : "text-black"
            } text-6xl`}
        >
          Photo Gallery
        </h1>

        <button
          onClick={() =>
            setTheme(theme === "light" ? "dark" : "light")
          }
          className={`text-3xl cursor-pointer ${theme === "dark" ? "text-yellow-300" : "text-black"
            }`}
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>

      </div>
      <div className='flex justify-end mb-6 mr-4'>

        <button
          onClick={() => fetchphoto(page)}
          disabled={loading}
          className='bg-amber-600 px-4 py-2 rounded text-2xl text-white hover:bg-amber-700 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60'
        >
          {pic.length === 0 ? "Get Images" : "Next 12 Images"}
        </button>

      </div>
      {loading && (
        <div className='flex justify-center items-center py-10'>
          <div className={`w-10 h-10 border-4 ${theme === "dark"
            ? "border-white border-t-transparent"
            : "border-black border-t-transparent"
            } rounded-full animate-spin`}></div>
        </div>
      )}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>

        {pic.map((item) => (

          <Card
            key={item.id}
            name={item.author}
            url={item.download_url}
          />

        ))}

      </div>

    </div>
  );
};

export default App;
