const Ingredient = ({ name, amount }) => {
  return (
    <>
      <span style={{fontWeight:300}}>{name}</span>
      <span style={{fontWeight:300}}>{amount}</span>
    </>
  )
}

export default Ingredient
