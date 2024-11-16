export default function Button({btnText, btnClass, eventHandler}) {
  return (
    <button className={`${btnClass}`} onClick={eventHandler}>{btnText}</button>
  )
}
