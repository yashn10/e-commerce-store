import Link from 'next/link'
import React, { useRef } from 'react'


const header = () => {

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
                <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Cart
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>

            </div>
        </header>

    )

}

export default header
