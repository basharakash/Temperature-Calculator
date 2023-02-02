export default function BoilingVerdict({celsius = 0}) {
  if(celsius >= 100) {
    return <h3>The Water would boil.</h3>
  }
  return <h3>water would not boil.</h3>
}