import { useState, useEffect } from "react";

export interface Movie {
  show: {
    id: number;
    name: string;
    summary: string;
    image?: { medium: string; original: string };
    rating: { average: number | null };
    genres: string[];
    premiered: string;
  };
}

export function useMovies(query: string = "time travel") {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
        const data = await res.json();
        setMovies(data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [query]);

  return { movies, loading };
}