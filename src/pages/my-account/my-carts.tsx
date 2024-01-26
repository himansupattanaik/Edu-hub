import { useState } from "react";
import { PublicLayout } from "@/layouts";
import React from "react";
import { UpperNav } from "@/layouts/public/UpperNav";
import { InnerNav } from "@/layouts/public/InnerNav";

const CartItem = ({
  id,
  title,
  price,
  quantity,
  onRemove,
  onQuantityChange,
}: any) => {
  return (
    <tr>
      <td className="p-4 px-6 text-center whitespace-nowrap">{title}</td>
      <td className="p-4 px-6 text-center whitespace-nowrap">
        <div>
          <button
            onClick={() => onQuantityChange(id, quantity - 1)}
            className="px-2 py-0 shadow"
          >
            -
          </button>
          <input
            type="text"
            name="qty"
            value={quantity}
            className="w-12 text-center bg-gray-100 outline-none"
            readOnly
          />
          <button
            onClick={() => onQuantityChange(id, quantity + 1)}
            className="px-2 py-0 shadow"
          >
            +
          </button>
        </div>
      </td>
      <td className="p-4 px-6 text-center whitespace-nowrap">
        ${price * quantity}
      </td>
      <td className="p-4 px-6 text-center whitespace-nowrap">
        <button
          onClick={() => onRemove(id)}
          className="px-2 py-0 text-red-100 bg-red-600 rounded"
        >
          x
        </button>
      </td>
    </tr>
  );
};

const MyCarts = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, title: "Course1", price: 1000, quantity: 2 },
    { id: 2, title: "Course2", price: 1200, quantity: 1 },
    { id: 3, title: "Course3", price: 1300, quantity: 1 },
  ]);

  const calculateTotal = () => {
    const totalQty = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    const totalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return { totalQty, totalPrice };
  };

  const handleQuantityChange = (itemId: any, newQuantity: any) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(1, newQuantity) }
          : item
      )
    );
  };

  const handleRemoveItem = (itemId: any) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const handleClearAll = () => {
    setCartItems([]);
  };

  const { totalQty, totalPrice } = calculateTotal();

  return (
    <PublicLayout title="My Carts | Edu-Hub-Learning">
      <UpperNav />
      <InnerNav />
      <div className="main-container p-8 mx-auto mt-12 bg-white">
        <div className="w-full overflow-x-auto">
          <div className="my-2">
            <h3 className="text-xl font-bold tracking-wider">
              Shopping Cart {totalQty} item
            </h3>
          </div>
          <table className="w-full shadow-inner">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 font-bold whitespace-nowrap">
                  Product
                </th>
                <th className="px-6 py-3 font-bold whitespace-nowrap">Qty</th>
                <th className="px-6 py-3 font-bold whitespace-nowrap">Price</th>
                <th className="px-6 py-3 font-bold whitespace-nowrap">
                  Remove
                </th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  {...item}
                  onRemove={handleRemoveItem}
                  onQuantityChange={handleQuantityChange}
                />
              ))}
              <tr>
                <td className="p-4 px-6 text-center whitespace-nowrap" />
                <td className="p-4 px-6 text-center whitespace-nowrap">
                  <div className="font-bold">Total Qty - {totalQty}</div>
                </td>
                <td className="p-4 px-6 font-extrabold text-center whitespace-nowrap">
                  Total - ${totalPrice} (include tax)
                </td>
                <td className="p-4 px-6 text-center whitespace-nowrap">
                  <button
                    onClick={handleClearAll}
                    className="px-4 py-1 text-red-600 bg-red-100"
                  >
                    Clear All
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-end mt-4 space-x-2">
            <button className="px-6 py-3 text-sm text-gray-800 bg-gray-200 hover:bg-gray-400">
              Cancel
            </button>
            <button className="px-6 py-3 text-sm text-white bg-indigo-500 hover:bg-indigo-600">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default MyCarts;
