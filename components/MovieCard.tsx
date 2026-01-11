type MovieCardProps = {
  title: string;
};

export function MovieCard({ title }: MovieCardProps) {
  return (
    <div className="border p-4 rounded">
      <h2>{title}</h2>
      <button className="mt-2 bg-black text-white px-4 py-2">
        Add to Watchlist
      </button>
    </div>
  );
}
