export default function MyAccount(props) {
  console.log(props)
  return (
    <p>Hello {props.user.name}</p>
  )
}