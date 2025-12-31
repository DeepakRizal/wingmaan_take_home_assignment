export default function ConfettiBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute top-0 left-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="15%" cy="20%" r="3" fill="#FFB6C1" opacity="0.6" />
        <circle cx="25%" cy="15%" r="2.5" fill="#FFE4E1" opacity="0.5" />
        <circle cx="35%" cy="25%" r="2" fill="#D2B48C" opacity="0.4" />
        <circle cx="45%" cy="18%" r="2.5" fill="#FFB6C1" opacity="0.5" />
        <circle cx="55%" cy="22%" r="3" fill="#FFE4E1" opacity="0.6" />
        <circle cx="65%" cy="17%" r="2" fill="#D2B48C" opacity="0.4" />
        <circle cx="75%" cy="20%" r="2.5" fill="#FFB6C1" opacity="0.5" />
        <circle cx="85%" cy="24%" r="3" fill="#FFE4E1" opacity="0.6" />
        
        <circle cx="20%" cy="35%" r="2" fill="#D2B48C" opacity="0.4" />
        <circle cx="30%" cy="38%" r="2.5" fill="#FFB6C1" opacity="0.5" />
        <circle cx="50%" cy="32%" r="3" fill="#FFE4E1" opacity="0.6" />
        <circle cx="70%" cy="36%" r="2" fill="#D2B48C" opacity="0.4" />
        <circle cx="80%" cy="33%" r="2.5" fill="#FFB6C1" opacity="0.5" />
        
        <path
          d="M20 50 Q25 45 30 50 T40 50"
          stroke="#E6E6FA"
          strokeWidth="1.5"
          fill="none"
          opacity="0.3"
        />
        <path
          d="M50 48 Q55 43 60 48 T70 48"
          stroke="#E6E6FA"
          strokeWidth="1.5"
          fill="none"
          opacity="0.3"
        />
        <path
          d="M30 55 Q35 50 40 55 T50 55"
          stroke="#E6E6FA"
          strokeWidth="1.5"
          fill="none"
          opacity="0.3"
        />
        <path
          d="M60 52 Q65 47 70 52 T80 52"
          stroke="#E6E6FA"
          strokeWidth="1.5"
          fill="none"
          opacity="0.3"
        />
        
        <rect
          x="25%"
          y="28%"
          width="4"
          height="4"
          fill="#FFB6C1"
          opacity="0.5"
          transform="rotate(45 25 28)"
        />
        <rect
          x="45%"
          y="30%"
          width="3"
          height="3"
          fill="#FFE4E1"
          opacity="0.4"
          transform="rotate(45 45 30)"
        />
        <rect
          x="65%"
          y="28%"
          width="4"
          height="4"
          fill="#D2B48C"
          opacity="0.5"
          transform="rotate(45 65 28)"
        />
      </svg>
    </div>
  );
}

