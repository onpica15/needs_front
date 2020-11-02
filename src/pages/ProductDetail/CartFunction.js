export function addToLocalStorage(value) {
  const currentCart = localStorage.getItem('cart') || '[]'

  const itemInLocalStorage = [...JSON.parse(currentCart)]
  const mycart = [value]
  let newMycartDisplay = [...itemInLocalStorage]

  for (let i = 0; i < mycart.length; i++) {
    const index = newMycartDisplay.findIndex(
      (value) => value.id === mycart[i].id && value.skuid === mycart[i].skuid
    )
    //有的+數量
    if (index !== -1) {
      newMycartDisplay[index].amount += mycart[i].amount
    } else {
      //沒有的話+新商品
      const newItem = { ...mycart[i] }
      newMycartDisplay = [...newMycartDisplay, newItem]
    }
  }
  localStorage.setItem('cart', JSON.stringify(newMycartDisplay))
}
