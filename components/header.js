import Link from 'next/link'
import React, { useRef } from 'react'
import { AiFillCloseCircle, AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import { BsFillBagCheckFill } from 'react-icons/bs'

<<<<<<< HEAD
const header = (cart, addToCart, removeFromCart, clearCart, subTotal) => {

    const togglecart = () => {
        if (ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-full')
            ref.current.classList.add('translate-x-0')
        }
        else if (!ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-0')
            ref.current.classList.add('translate-x-full')
        }
    }
    const ref = useRef()
=======
const header = () => {
>>>>>>> 57242bf8f5305edff85d1968cdefe832f28cfab9

    return (

        <header class="body-font sticky top-0 bg-white z-10">
            <div class="row mx-auto flex flex-wrap my-1 p-3 flex-col md:flex-row items-center shadow-md">
                <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span class="ml-3 text-xl">Tailblocks</span>
                </a>
                <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base font-medium justify-center">
                    <Link href={"/"} class="mr-5 hover:text-gray-900">Home</Link>
                    <Link href={"/about"} class="mr-5 hover:text-gray-900">About</Link>
                    <Link href={"/contact"} class="mr-5 hover:text-gray-900">Contact</Link>
                    <Link href={"/tshirts"} class="mr-5 hover:text-gray-900">Tshirts</Link>
                    <Link href={"/hoodies"} class="mr-5 hover:text-gray-900">Hoodies</Link>
                    <Link href={"/pants"} class="mr-5 hover:text-gray-900">Pants</Link>
                    <Link href={"/stickers"} class="mr-5 hover:text-gray-900">Stickers</Link>
                    <Link href={"/login"} class="mr-5 hover:text-gray-900">Login</Link>
                    <Link href={"/signup"} class="mr-5 hover:text-gray-900">Signup</Link>
                </nav>
<<<<<<< HEAD
                <button onClick={togglecart} class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Cart
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>

                <div ref={ref} className='w-72 sidecart absolute top-0 right-0 bg-slate-400 p-10 transition-transform translate-x-full h-96 rounded-md'>
                    <h2 className='font-bold text-xl text-center'>Shopping Cart</h2>
                    <span onClick={togglecart} className='absolute top-5 right-5 cursor-pointer text-2xl text-blue-900'><AiFillCloseCircle /></span>

                    <ol className='list-decimal mt-8 h-1/2 font-semibold'>
                        {Object.keys(cart).map((k) => {
                            return <li key={k}>
                                <div className='item flex'>
                                    <div className='w-2/3 font-semibold'>{cart[k]}</div>
                                    <div className='w-1/3 font-semibold flex items-center justify-center'><AiFillMinusCircle className='mx-1 text-2xl cursor-pointer' />{cart[k]} <AiFillPlusCircle className='mx-1 text-2xl cursor-pointer' /></div>
                                </div>
                            </li>
                        })}
                    </ol>

                    <div className='flex mt-5'>
                        <button onClick={togglecart} className="text-white bg-indigo-600 flex items-center border-0 my-5 py-2 mr-2 focus:outline-none hover:bg-indigo-700 rounded text-medium px-2 justify-center"><BsFillBagCheckFill className='' /><Link href={"/checkout"}>Checkout</Link></button>

                        <button onClick={clearCart} className="text-white bg-indigo-600 flex items-center border-0 my-5 py-2 focus:outline-none hover:bg-indigo-700 rounded text-medium px-2 justify-center"><BsFillBagCheckFill className='' />Clear Cart</button>
                    </div>
                </div>
=======
>>>>>>> 57242bf8f5305edff85d1968cdefe832f28cfab9

            </div>
        </header>

    )
}

export default header