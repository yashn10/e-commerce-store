import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';

const Post = ({ addToCart }) => {
  const router = useRouter();
  const { slug } = router.query;

  const [pin, setPin] = useState();
  const [service, setService] = useState();

  const checkService = async () => {
    let pins = await fetch("http://localhost:3000/api/pincode");
    let pinJson = await pins.json();
    if (pinJson.includes(parseInt(pin))) {
      setService(true);
    } else {
      setService(false);
    }
  };

  const onChangePin = (e) => {
    setPin(e.target.value);
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          {/* ... (rest of your code) ... */}

          <div className="flex">
            <span className="title-font font-medium text-2xl text-gray-900">$500</span>
            <button className="flex ml-4 text-white bg-indigo-500 border-0 py-2 md:px-6 focus:outline-none hover:bg-indigo-600 rounded">
              <Link href={"/checkout"}>Buy Now</Link>
            </button>
            <button onClick={addToCart} className="flex ml-2 text-white bg-indigo-500 border-0 py-2 md:px-6 focus:outline-none hover:bg-indigo-600 rounded">
              Add to cart
            </button>
            <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
              </svg>
            </button>
          </div>

          <div className='pin mt-5'>
            <input onChange={onChangePin} className='border-blue-500 border-2 rounded-md mr-2 py-1 mt-2 text-center' placeholder='Enter your pincode' type='text' />
            <button onClick={checkService} className="ml-auto text-white bg-indigo-500 border-0 py-2 mt-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Check</button>
          </div>

          {(!service && service !== null) && (
            <div className='text-red-500 font-normal text-lg'>
              Sorry!, we are currently not available in this area
            </div>
          )}

          {(service && service !== null) && (
            <div className='text-green-500 text-lg'>
              Yay!, we are available in this area, place your order now
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Post;
