import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'antd';
import { FetchOrdersRequest } from '../../redux/orders/actions';
import '../header/header.scss';

const Orders = () => {

  const dispatch = useDispatch();
  const orders = useSelector(state => state.orders.orders)
  console.log('orders', orders);

  const orderedProducts = orders?.data?.map(i => i.products);
  const product = orders?.data?.map(i => i.product)

  useEffect(() => {
    dispatch(FetchOrdersRequest());
  }, []);

  return (
    <div>
      <div className="header-main">

      </div>
      <div className="content-main">

        <div>
           {orderedProducts?.length && orderedProducts[0]?.map((order) =>
            <Card>
              <div>
                <img
                  src={order.image}
                />
              </div>
              <div>
                <label>Name</label>
                {order.name}
              </div>
              <div>
                <label>Category</label>
                {order.category}
              </div>
              <div>
                <label>Description</label>
                {order.description}
              </div>
            </Card>
          )}
        </div>
        <div style={{display: 'grid', alignItems: 'center'}}>
          <label>Quantity</label>
          {product?.length && product[0]?.map((prod) =>
            <div>
              {prod.quantity}
            </div>
          )}
        </div>
      </div>
    </div>
  )
};

export default Orders;
