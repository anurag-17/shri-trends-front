import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from "@/config/Loader";
import cloth from "../../../../../../public/admin/ethnic-cloth.jpg";
import cross from "../../../../../../public/admin/cross.svg";
import Image from "next/image";
import { addToCart } from '@/redux/cartSlice';
import { useDispatch } from 'react-redux';




const Productsingle = ({ selectedItemId,setDialogMatch }) => {
  const dispatch = useDispatch();
    const [productData, setProductData] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const fetchProductData = async () => {
            setLoading(true);
            
            try {
                const response = await axios.get(`https://shree-trends-backend.vercel.app/api/product/getaProduct/${selectedItemId}`);
                setProductData(response.data);
                setError(null);
            } catch (error) {
                setError(error.message);
            }
            setLoading(false);
        };

        if (selectedItemId) {
            fetchProductData();
        }
    }, [selectedItemId]);

  

    const addToCartHandler = () => {
        dispatch(addToCart(productData));
    console.log(dispatch(addToCart(productData)))
    };

    return (
        <div>
            {isLoading && <Loader />}
            {error && <p>Error: {error}</p>}
            {productData && (
                <>
                <div className='flex justify-end mb-2' >
                    <Image className='pointer' onClick={() => setDialogMatch(false)} src={cross} alt='img' width={30}/>
                </div>
                <div className="flex font-sans">
                    <div className="flex-none w-48 relative">
                        <Image src={cloth} alt="img" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                    </div>
                    <form className="flex-auto p-6">
                        <div className="flex flex-wrap">
                            <h1 className="flex-auto text-lg font-semibold text-slate-900">{productData.title}</h1>
                            <div className="text-lg font-semibold text-slate-500">${productData.price}</div>
                            <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">{productData.description}</div>
                        </div>
                        <div className="flex items-baseline mt-4 pb-2  text-slate-500 ">
                            Size: {productData?.stocks.map((stock) => (
                            <p key={stock._id}>{stock.size + ","}</p>
                            ))}
                        </div>
                        <div className="flex items-baseline mt-0 mb-6 pb-6 border-b border-slate-200 text-slate-500 ">
                            Stocks: {productData?.stocks[0]?.quantity ? productData?.stocks[0]?.quantity : "0"}
                        </div>
                        <div className="flex space-x-4 mb-6 text-sm font-medium">
                            <div className="flex-auto flex space-x-4">
                                <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="button" onClick={addToCartHandler}>
                                    Add to Cart
                                </button>
                            </div>
                            <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
                                <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
                </>
            )}
        </div>
    );
};

export default Productsingle;
