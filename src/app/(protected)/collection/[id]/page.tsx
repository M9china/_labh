'use client'
import { SelectedItem } from "@/components";
import useCart from "@/components/Hooks/useCart";
import { useParams } from "next/navigation";


export default function Item() {
  const item = useCart();

  return <SelectedItem color={item.cart?.bucket.color} size={item.cart?.bucket.size} image={item.cart?.bucket.image} quantity={item.cart?.bucket.quantity} productId={item.cart?.bucket.productId} price={item.cart?.bucket.price} name={item.cart?.bucket.name} />;
}
