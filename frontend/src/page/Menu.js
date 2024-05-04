import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addCartItem } from '../redux/productSlide';

const Menu = () => {
  const { filterby } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product.productList);

  const productDisplay = productData.find((el) => el._id === filterby);

  const handleAddCartProduct = () => {
    dispatch(addCartItem(productDisplay));
  };

  const handleBuy = () => {
    dispatch(addCartItem(productDisplay));
    navigate('/cart');
  };

  return (
    <div style={{ backgroundColor: '#e6ffe6', minHeight: '100vh' }} className="p-2 md:p-4">
      {productDisplay ? (
        <div className="w-full max-w-4xl m-auto md:flex bg-white rounded-lg shadow-md p-5">
          <div className="max-w-sm overflow-hidden w-full">
            <img
              src={productDisplay.image}
              alt={productDisplay.name}
              className="hover:scale-105 transition-all h-full"
            />
          </div>
          <div className="flex flex-col gap-2 p-5">
            <h3 className="font-semibold text-slate-600 capitalize text-2xl md:text-4xl">
              {productDisplay.name}
            </h3>
            <p className="text-slate-500 font-medium text-2xl">{productDisplay.category}</p>
            <p className="font-bold md:text-2xl">
              <span className="text-red-500">₹</span>
              <span>{productDisplay.price}</span>
            </p>
            <div className="flex gap-3">
              <button
                onClick={handleBuy}
                className="bg-yellow-500 py-2 rounded hover:bg-yellow-600 min-w-[100px]"
              >
                Buy
              </button>
              <button
                onClick={handleAddCartProduct}
                className="bg-yellow-500 py-2 rounded hover:bg-yellow-600 min-w-[100px]"
              >
                Add to Cart
              </button>
            </div>
            <div>
              <p className="text-slate-600 font-medium">Description:</p>
              <p>{productDisplay.description}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center text-center p-5">
          <h2 className="text-2xl font-semibold mb-4">🍽️ MENU 🍽️</h2>
          <div className="flex flex-wrap justify-around gap-6">
            <div className="w-1/4">
              <h3 className="font-semibold text-lg">Dairy Products</h3>
              <ul className="text-slate-600">
                <li>Buttermilk</li>
                <li>Cheese</li>
                <li>Paneer</li>
                <li>Amul Gold Tetrapack</li>
              </ul>
            </div>
            <div className="w-1/4">
              <h3 className="font-semibold text-lg">Meat</h3>
              <ul className="text-slate-600">
                <li>Eggs</li>
                <li>Meat Flesh</li>
                <li>Halwa Fish</li>
                <li>Chicken</li>
              </ul>
            </div>
            <div className="w-1/4">
              <h3 className="font-semibold text-lg">Cereals</h3>
              <ul className="text-slate-600">
                <li>Mustard Oil</li>
                <li>Refined Oil</li>
                <li>Aashirvaad Atta</li>
                <li>Moong Dal</li>
                <li>Arhar Dal</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap justify-around gap-6 mt-4">
            <div class="w-1/4">
              <h3 className="font-semibold text-lg">Fruits</h3>
              <ul className="text-slate-600">
                <li>Grapes</li>
                <li>Oranges</li>
                <li>Apple</li>
              </ul>
            </div>
            <div class="w-1/4">
              <h3 class="font-semibold text-lg">Vegetables</h3>
              <ul class="text-slate-600">
                <li>Potato</li>
                <li>Tomato</li>
                <li>Beetroot</li>
                <li>Ladyfinger</li>
              </ul>
            </div>
            <div class="w-1/4">
              <h3 class="font-semibold text-lg">Snacks</h3>
              <ul class="text-slate-600">
                <li>Chips & Crisps</li>
                <li>Cookies & Biscuits</li>
              </ul>
            </div>
            <div class="w-1/4">
              <h3 class="font-semibold text-lg">Bakery</h3>
              <ul class="text-slate-600">
                <li>Bread</li>
                <li>Rolls & Buns</li>
                <li>Pastries & Cakes</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
