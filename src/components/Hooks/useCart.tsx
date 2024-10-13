import { trpc } from "@/app/api"

const useCart = () => {
    const cart = trpc.cart.getCart.useQuery()
    const setCart = trpc.cart.addToCart.useMutation({
        onSuccess: () => {
            cart.refetch()
        }
    })
    return{
        cart: cart.isSuccess ? cart.data : null,
        c:cart,
        setCart
    }
}

export default useCart;
