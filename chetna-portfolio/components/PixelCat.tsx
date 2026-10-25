const MAP = [
  'k..........k',
  'kk........kk',
  'kwk......kwk',
  'kwwkkkkkkwwk',
  'kwwwwwwwwwwk',
  'kwwewwwwewwk',
  'kwwwwnnwwwwk',
  'kwbwwwwwwbwk',
  'kwwwwwwwwwwk',
  '.kkkkkkkkkk.',
]
const COLORS: Record<string, string> = { k: '#4a1a33', w: '#fffafc', e: '#4a1a33', n: '#db6b8f', b: '#ffb3cc' }

export default function PixelCat({ size = 8, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={12 * size}
      height={10 * size}
      viewBox="0 0 12 10"
      shapeRendering="crispEdges"
      className={className}
      role="img"
      aria-label="Pixel cat"
    >
      {MAP.flatMap((row, y) =>
        row.split('').map((c, x) => (COLORS[c] ? <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={COLORS[c]} /> : null))
      )}
    </svg>
  )
}
