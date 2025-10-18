export default function NoiseBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-50 bg-[#dfdfdfbd]"
      style={{
        backgroundImage: 'url("/img/nnnoise.svg")',
        backgroundRepeat: "repeat",
      }}
    />
  );
}
