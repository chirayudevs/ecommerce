import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {Card, message} from 'antd';
import { FetchProducts } from '../../redux/products/actions';
import SkeletonLoader from '../skeleton/skeleton';
import './card.scss';

const { Meta } = Card;

const ProductCard = () => {

  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();
  const allProducts = useSelector(state => state.products.products);
  const loader = useSelector(state => state.products.loading);
  const login = useSelector(state => state.logIn.login);

  const accessToken = login?.data?.accessToken?.accessToken;

  useEffect(() => {
    if(accessToken) {
      dispatch(FetchProducts());
    }
    window.addEventListener("scroll", handleScroll);
  }, [dispatch, login]);

  const handleScroll = () => {
    if(
      Math.ceil(window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight ||
      isFetching)
    )
      return;
    setIsFetching(true);
  };

  const fetchData = () => {
    dispatch(FetchProducts())
    setPage(page + 1);
    setData(() => {
      return [...data]
    })
  };

  useEffect(() => {
    if (!isFetching) return;
    fetchMoreListItems();
  }, [isFetching]);

  const fetchMoreListItems = () => {
    fetchData();
    setIsFetching(false);
  };

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'User registered successfully',
    })
  };


  return (
    <>
      {loader ?
        <SkeletonLoader/> :
        allProducts.length > 0 && allProducts.map(product => (
          <div className="card-main">
            <Card
              style={{
                width: 300,
              }}
              cover={
                <>
                  <img
                    alt="example"
                    src={product.image}
                    className="card-image"
                  />
                </>
              }
              extra={<NavLink to={`/viewProduct/${product._id}`}>View</NavLink>}
            >
              <Meta
                title={product.name}
                description={product.description}
              />
              <div> options can be added from here </div>
            </Card>
          </div>
        ))
      }
    </>
  )
};

export default ProductCard;
