import { fetchPokeItems, selectPokeStore } from 'redux/pokeStoreSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { cartItemAdded } from 'redux/cartSlice';

const Store = () => {
  const { items, next, previous } = useAppSelector(selectPokeStore);
  const dispatch = useAppDispatch();

  return (
    <>
      <p>Store</p>
      <button
        type="button"
        disabled={!previous}
        onClick={() => dispatch(fetchPokeItems({ ...previous }))}
      >
        Previous
      </button>
      <button
        type="button"
        disabled={!next}
        onClick={() => dispatch(fetchPokeItems({ ...next }))}
      >
        Next
      </button>
      <ul>
        {items.map((i) => (
          <li key={i.name}>
            <p>{i.name}</p>
            <img src={i.spriteURL} alt={i.name} />
            <p>${i.cost}</p>
            <p>{i.description.long}</p>
            <p>{i.description.short}</p>
            <button type="button" onClick={() => dispatch(cartItemAdded(i))}>
              Add to cart
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Store;
