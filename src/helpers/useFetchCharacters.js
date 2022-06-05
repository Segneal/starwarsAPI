import { useEffect, useState } from "react";
import axios from "axios";

function useFetchCharacters() {
  const url = `https://swapi.dev/api/people/?page=1`;
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState("");

  async function fetchCharacters(url) {
    setLoading(true);
    await axios
      .get(url)
      .then((res) => {
        setCharacters((prev) => [...prev, ...res.data.results]);
        if (res.data.next) {
          fetchCharacters(res.data.next);
        }
      })
      .catch((error) => {
        setError(error);
      });
    setLoading(false);
  }

  useEffect(() => {
    fetchCharacters(url);
  }, []);

  return { characters, loading, error };
}

export default useFetchCharacters;
