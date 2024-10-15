'use client'
import { allItems, SelectedItem } from "@/components";
import { useParams } from "next/navigation";


export default function Item() {
  const { id } = useParams();
  const item = Object.values(allItems)
.flat()
.find((i) => i.productId === id);

if (!item) {
return <p>Item not found.</p>;
}

  return <SelectedItem quantity={item.quantity} productId={item.productId} price={item.price} name={item.name} />;
}
