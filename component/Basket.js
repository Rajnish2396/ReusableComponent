

export default function Basket({countValue, basketClass}) {
  
  return (
    <div className={`${basketClass}`}>{countValue}</div>
  )
}
