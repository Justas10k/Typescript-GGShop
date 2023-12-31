import {
  createContext,
  useReducer,
  useContext,
  useEffect,
  ReactNode,
} from "react";

type CartItem = {
  id: number;
  img: string;
  description: string;
  price: number;
  otherImgs: string[];
  specs: string;
  quantity: number;
};

interface CartState {
  items: CartItem[];
}

interface CartAction {
  type: string;
  payload: CartItem;
}

interface CartContextType {
  cart: CartState;
  dispatch: React.Dispatch<CartAction>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex] = action.payload;
        return { ...state, items: updatedItems };
      } else {
        return { ...state, items: [...state.items, action.payload] };
      }
    }

    case "INCREASE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case "DECREASE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };

    default:
      return state;
  }
};

const CART_STORAGE_KEY = "cart";

interface CartProviderProps {
  children: ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const storedCartString = localStorage.getItem(CART_STORAGE_KEY);
  const storedCart: CartState = storedCartString
    ? JSON.parse(storedCartString)
    : { items: [] };
  const [cart, dispatch] = useReducer(cartReducer, storedCart);

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export { CartProvider, useCart };
