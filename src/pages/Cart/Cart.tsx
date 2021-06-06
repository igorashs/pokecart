import {
  cartItemRemoved,
  cartItemUpdatedByAmount,
  selectCart,
} from 'redux/cartSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

const Cart = () => {
  const { items, count } = useAppSelector(selectCart);
  const dispatch = useAppDispatch();

  return (
    <>
      <p>
        Cart <span>Count: {count}</span>
      </p>

      <ul>
        {items.map((i) => (
          <li key={i.id}>
            <p>
              {i.name} | x{i.amount} | cost: ${i.amount * i.cost}
            </p>
            <img src={i.spriteURL} alt={i.name} />
            <button
              type="button"
              onClick={() => dispatch(cartItemRemoved(i.id))}
            >
              Remove one
            </button>
            <input
              type="number"
              value={i.amount}
              onChange={(e) =>
                dispatch(
                  cartItemUpdatedByAmount({
                    item: i,
                    amount: Number(e.target.value) || 1,
                  }),
                )
              }
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cart;
