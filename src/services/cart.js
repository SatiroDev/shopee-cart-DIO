export const addItem = async (userCart, item) => {
    userCart.push(item)
}

export const calculateTotal = async (userCart, name) => {
    console.log()
    console.log('Shopee Cart TOTAL IS:')
    console.log(userCart.reduce((total, item) => total + item.subTotal(), 0))
}

export const deleteItem = async (userCart, name) => {
    const index = userCart.findIndex((item) => item.name === name)
    if (index !== -1) {
        userCart.splice(index, 1)
    }
}


export const removeItem = async (userCart, item) => {
    const indexFound = userCart.findIndex((p) => p.name === item.name)

    if (indexFound === -1) {
        console.log('Item não encontrado!')
        return
    }

    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1
        return
    }  
    if (userCart[indexFound].quantity === 1) {
        await deleteItem(userCart, userCart[indexFound].name)
    }
}

export const displayCart = async (userCart) => {
    console.log('Shopee cart list:')
    userCart.forEach((item, index) => {
        console.log(`${index +1}. ${item.name} - R$ ${item.price}| ${item.quantity}x | SubTotal: R$ ${item.subTotal()}`)
    });
}

