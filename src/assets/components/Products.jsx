import React from "react";
import { getCategories, getProductsByCategory, getAllProducts } from "../../api/api";
import { useEffect, useState } from "react";
import { SpinnerCircular } from 'spinners-react'


const Products = () => {
    const [categories, setCategories] = useState([])
    const [categorySelected, SelectCategory] = useState('')
    const [Products, setProducts] = useState([])
    const [AllProducts, setAllProducts] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [Page, setPage] = useState(0)


    //cuando se renderize mi componenete pedire las categorias 
    useEffect(() => {
        const fetchCategories = async () => {
            setCategories(await getCategories())
        }

        fetchCategories()
    }, [])


    // Estar a la escucha de cuando cambie las categoria seleccionada para mostrar los productos de esa categoria
    useEffect(() => {
        const fetchProducts = async () => {
            if (categorySelected) {
                setLoading(true)
                const products = await getProductsByCategory(categorySelected)
                setLoading(false)
                setProducts(products)
            }
        }

        fetchProducts()
    }, [categorySelected])

    useEffect(() =>{
        const fetchProducts = async () => {
                setLoading(true)
                const products = await getAllProducts()
                setAllProducts(products)
                setLoading(false)
                setProducts( products.slice(Page, Page+8))
            }
            fetchProducts()
        },[Page])

    // Cambiar categoria al dar clcik 
    const handleCick = (category) => {
        SelectCategory(category)
    }

    // Cambiar a la siguiente página al dar click 
    const handleNextPage = () =>{
        if ((Page + 8) < AllProducts.length){
            setPage(Page + 8)
        }
    }
    
    // Cambiar a la anterior página al dar click 
    const handlePreviousPage = () =>{
        if (Page > 0){
            setPage(Page-8)
        }
    }

    return (
        <>
            <article className="py-6 flex items-center justify-between pb-10 pt-20 px-16">
                <span className="capitalize text-2xl rounded font-bold">{categorySelected}</span>
                <div className="space-x-6 text-xl font-semibold">
                    {
                        categories.map((category, index) => (
                            <button key={index} onClick={() => { handleCick(category) }} className="capitalize rounded hover:bg-purple-500 transition-colors hover:text-white hover:shadow hover:ring-2 hover:ring-purple-600 p-2">{category}</button>
                        ))
                    }
                </div>
            </article>
            <article className={`${isLoading ? 'flex justify-center content-center ' : 'grid grid-cols-4 gap-16'} mx-20 mt-20 mb-16`}>
                {
                    isLoading ? (
                        <SpinnerCircular color="#6D28D9" />
                    ) : (
                        Products.map((product) => (
                            <div key={product.id} className="shadow-lg rounded overflow-hidden h-96">
                                <div className="h-36">
                                    <img className="h-32 mx-auto" src={product.image} alt="Img Prdouct" />
                                </div>
                                <div className="px-10 py-12 space-y-2 bg-purple-100 h-full">
                                    <h2 className="text-lg font-semibold">{product.title}</h2>
                                    <h3 className="text-xl font-bold">${product.price}</h3>
                                    <a className="float-right p-2 rounded-full hover:bg-purple-400 hover:text-white transition-colors focus:ring-2 focus:ring-purple-600" href="">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        ))
                    )
                }
            </article>
            <article className={`flex justify-center items-center mb-20 gap-4 ${categorySelected ?  'hidden' : ''}`}>
                <button onClick={handlePreviousPage} className="p-3 rounded-full bg-purple-600 text-white focus:ring ring-purple-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <   path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                    </svg>
                </button>
                <button onClick={handleNextPage} className="p-3 rounded-full bg-purple-600 text-white focus:ring ring-purple-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </button>
            </article>
        </>
    )
}

export default Products