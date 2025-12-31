export default function HeightDisplay({ height }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-sm text-[var(--primary-purple)] mb-1">Inch</span>
      <div className="w-24 h-16 rounded-lg border-2 border-[var(--primary-purple)] bg-white flex items-center justify-center">
        <span className="text-2xl font-bold text-[var(--primary-purple)]">
          {height.toFixed(1)}
        </span>
      </div>
    </div>
  );
}

