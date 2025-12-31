export default function DateInputField({ label, value, placeholder, onChange, onFocus }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 mb-2">{label}</label>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        className="w-full px-4 py-3 rounded-lg border border-[#8B5A9F] bg-white text-gray-900 text-base focus:outline-none focus:border-[var(--primary-purple)] transition-colors text-center"
      />
    </div>
  );
}

