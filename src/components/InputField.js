export default function InputField({
  placeholder,
  value,
  onChange,
  type = "text",
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="input-base"
    />
  );
}
