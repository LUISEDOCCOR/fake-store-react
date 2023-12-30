const getCategories = async () => {
    const data = await fetch('https://fakestoreapi.com/products/categories')
    const categories = await data.json()
    return categories
}
const getProductsByCategory = async  (category)  => {
    const data = await fetch(`https://fakestoreapi.com/products/category/${category}`)
    const products = await data.json()
    return products
}
const getAllProducts = async () =>{
    const data = await fetch('https://fakestoreapi.com/products')
    const products = await data.json()
    return products
}


export {
     getCategories,
     getProductsByCategory,
     getAllProducts
}