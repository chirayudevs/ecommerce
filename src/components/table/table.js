import React from 'react';
import useInfiniteLoading from "../../customHooks/useInfiniteScroll";

const products = [
  {
    name: 'chirayu',
    email: 'chirayu',
    phone: 8866810027
  },
  {
    name: 'chirayu',
    email: 'chirayu',
    phone: 8866810027
  },
  {
    name: 'chirayu',
    email: 'chirayu',
    phone: 8866810027
  },
  {
    name: 'chirayu',
    email: 'chirayu',
    phone: 8866810027
  },
  {
    name: 'chirayu',
    email: 'chirayu',
    phone: 8866810027
  },
];

const ReactTable = () => {

/*
  const { items, hasMore, loadItems } = useInfiniteLoading({
    getItems: ({ page }) => fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(json=>console.log(json))
  })
*/

  return (
    <div>

    </div>
  )
};

export default ReactTable;
