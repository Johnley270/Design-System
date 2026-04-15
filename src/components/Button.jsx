export function Button({ label = 'Click me', onClick }) {
  return (
    <button className="btn" onClick={onClick}>
      {label}
    </button>
  )
}
