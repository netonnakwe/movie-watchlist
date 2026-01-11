import { MovieCard } from "@/components/MovieCard";

export default function MoviesPage() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <MovieCard title="Dune Part Two" />
      <MovieCard title="Avatar 3" />
    </div>
  );
}
