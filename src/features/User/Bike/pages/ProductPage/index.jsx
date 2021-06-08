import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import productApi from '../../../../../api/productApi';
import Hero from '../../../../../components/headers/Hero';
import { increase } from '../../../../User/Checkout/counterSlice';
import DefaultBikes from '../../components/DefaultBikes';
import Pagination from '../../components/Pagination';
import SingleChoiceFilter from '../../components/SingleChoiceFilter';

ProductPage.propTypes = {

};

function ProductPage({ }) {
  const dispatch = useDispatch();
  const HandleAddToCart = (bike) => {
    if (JSON.parse(localStorage.getItem('cart')) !== null) {
      var cart = JSON.parse(localStorage.getItem('cart'));
      var index = cart.findIndex((newBike) => { return newBike.id === bike.id });
    } else {
      cart = [];
    }

    if (index >= 0) {
      cart[index].quantity++;
    }
    else {
      cart.push({
        ...bike,
        quantity: 1,
      });

    }
    localStorage.setItem('cart', JSON.stringify(cart));
    dispatch(increase());
  };


  const defaultFilterForApi = {
    _start: 0,
  }

  const defaultPagination = {
    _page: 1,
    _limit: 9,
    totalBikes: 0,
  }

  const form = useForm();
  const { register, handleSubmit } = form;

  const [filterForApi, setFilterForApi] = useState(defaultFilterForApi);

  const [pagination, setPagination] = useState(defaultPagination);

  const [bikesFromApi, setbikesFromApi] = useState([]);

  const [bikes, setBikes] = useState([]);

  const handleSearch = (value) => {
    const searchData = value.search;
  }

  const handleFilter = (value) => {
    const filterData = value.price;
  }


  useEffect(() => {
    fetchDataFormApi();
  }, []);

  const fetchDataFormApi = async () => {

    const response = await productApi.getAll(filterForApi);
    setbikesFromApi(response.data);
    setPagination({
      ...pagination,
      totalBikes: response.data.length,
    });
    setBikes(getDataFormPagination(response.data, pagination._page));
  }

  function getDataFormPagination(bikesFromApi, page) {

    const _start = page <= 1
      ? 0
      : (page - 1) * (pagination._limit || 9);

    //kq = tong so pages
    const totalBikes = pagination.totalBikes === 0 ? 100 : pagination.totalBikes;
    const newBikesList = [];
    for (let index = _start; index < _start + pagination._limit && index < totalBikes; index++) {
      newBikesList.push(bikesFromApi[index]);
    }


    return newBikesList;
  }

  const handlePage = (newPage) => {
    setPagination({
      ...pagination,
      _page: newPage,
    });
    setBikes(getDataFormPagination(bikesFromApi, newPage));
  }



  return (
    <div>
      <Hero title="Shop" />
      <div className="shop-box-inner">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-sm-12 col-xs-12 sidebar-shop-left">
              <div className="product-categori">
                <div className="search-product">
                  <form onSubmit={handleSubmit(handleSearch)}>
                    <input className="form-control" placeholder="Search here..." type="text" {...register("search")} />
                    <button type="submit" > <i className="fa fa-search" /> </button>
                  </form>
                </div>
                <form onSubmit={form.handleSubmit(handleFilter)}>
                  <SingleChoiceFilter form={form}/>
                  <div className="filter-price-left">
                    <div className="price-box-slider">
                      <p>
                        <button className="btn hvr-hover" type="submit">Filter</button>
                      </p>
                    </div>
                  </div>
                </form>

              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-sm-12 col-xs-12 shop-content-right">
              <div className="right-product-box">
                <div className="product-item-filter row">
                  <div className="col-12 col-sm-8 text-center text-sm-left">
                    <div className="toolbar-sorter-right">
                      <span>Sort by </span>
                      <select id="basic" className="selectpicker show-tick form-control" data-placeholder="$ USD">
                        <option data-display="Select">Nothing</option>
                        <option value={1}>Popularity</option>
                        <option value={2}>High Price → High Price</option>
                        <option value={3}>Low Price → High Price</option>
                        <option value={4}>Best Selling</option>
                      </select>
                    </div>
                    <p>Showing all 4 results</p>
                  </div>
                  <div className="col-12 col-sm-4 text-center text-sm-right">
                    <ul className="nav nav-tabs ml-auto">
                      <li>
                        <a className="nav-link active" href="#grid-view" data-toggle="tab"> <i className="fa fa-th" /> </a>
                      </li>
                      <li>
                        <a className="nav-link" href="#list-view" data-toggle="tab"> <i className="fa fa-list-ul" /> </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <DefaultBikes defaultBikes={bikes} addToCart={HandleAddToCart} />

              </div>
              <Pagination pagination={pagination} action={handlePage} />

            </div>
          </div>
        </div>
      </div>
      {/* End Shop Page */}
      {/* Start Instagram Feed  */}

    </div>
  );
}

export default ProductPage;