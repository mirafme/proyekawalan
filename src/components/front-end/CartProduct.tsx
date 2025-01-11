import { removeFromeCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { RxCross1 } from "react-icons/rx";

interface propsType {
  id: string;
  img: string;
  tittle: string;
  price: number;
  quantity: number;
}

const CartProduct: React.FC<propsType> = ({ id, img, tittle, price, quantity }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <img className="h-[80px]" src={img} alt={tittle} />
        <div className="space-y-2">
          <h3 className="font-medium">{tittle}</h3>
          <p className="text-gray-600 text-[14px]">
            {quantity} x ${price}.00
          </p>
        </div>
      </div>

      <RxCross1 className="cursor-pointer" onClick={() => dispatch(removeFromeCart(id))} />
    </div>
  );
};

export default CartProduct;
