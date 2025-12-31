export default function AgeConfirmationModal({ age, onConfirm, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 px-6" onClick={onClose}>
      <div
        className="bg-white rounded-2xl p-8 max-w-sm w-full border-2 border-[var(--primary-purple)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 mb-4 flex items-center justify-center">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="12" y="32" width="40" height="20" rx="2" fill="#5B2E68" />
              <rect x="16" y="24" width="32" height="12" rx="2" fill="#8B5A9F" />
              <rect x="20" y="16" width="24" height="12" rx="2" fill="#5B2E68" />
              <line x1="24" y1="16" x2="24" y2="8" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" />
              <line x1="28" y1="16" x2="28" y2="6" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" />
              <line x1="32" y1="16" x2="32" y2="8" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" />
              <line x1="36" y1="16" x2="36" y2="6" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" />
              <line x1="40" y1="16" x2="40" y2="8" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" />
              <circle cx="24" cy="6" r="2" fill="#FF6B6B" />
              <circle cx="28" cy="4" r="2" fill="#FF6B6B" />
              <circle cx="32" cy="6" r="2" fill="#FF6B6B" />
              <circle cx="36" cy="4" r="2" fill="#FF6B6B" />
              <circle cx="40" cy="6" r="2" fill="#FF6B6B" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
            Are you {age} years old?
          </h2>
          <p className="text-sm text-gray-600 mb-6 text-center">
            Check your age is correct.
          </p>
          <button
            onClick={onConfirm}
            className="w-full py-4 bg-[var(--primary-purple)] text-white rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

