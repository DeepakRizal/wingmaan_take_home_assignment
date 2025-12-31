export default function BackButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-10 h-10 flex items-center justify-center bg-transparent border-none cursor-pointer p-0 hover:opacity-80 transition-opacity"
      aria-label="Go back"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 18L9 12L15 6"
          stroke="#8B5A9F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

