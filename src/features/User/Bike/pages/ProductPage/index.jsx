import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import productApi from '../../../../../api/productApi';
import Hero from '../../../../../components/headers/Hero';
import { increase } from '../../../../User/Checkout/counterSlice';
import DefaultBikes from '../../components/DefaultBikes';
import SingleChoiceFilter from '../../components/SingleChoiceFilter';
import Pagination from '../../../../../components/Pagination';
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

  const form = useForm();

  const { register, handleSubmit } = form;

  const [bikes, setBikes] = useState([]);

  const [filter, setFilter] = useState({
    PageSize: 10,
    PageNumber: 1,
  });
  const [pagination, setPagination] = useState({ total: 50, page: 1, PageSize: 10 });


  const handleSearch = (value) => {
    const searchData = value.search;
    const searchBy = 'Name';
    const newFilter = { ...filter, value: searchData, searchBy };
    setFilter(newFilter);
  }

  const handleFilter = (value) => {
    const priceRange = value.price;
    const newFilter = { ...filter, priceRange };
    delete newFilter.searchBy;
    setFilter(newFilter);
    console.log(newFilter);
  }


  useEffect(() => {
    fetchDataFormApi();
  }, [filter]);

  const fetchDataFormApi = async () => {
    const response = await productApi.getAll(filter);
    const bikeFromApi = response.data;
    setBikes(bikeFromApi);
    setPagination(response.pagination)
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
                  <SingleChoiceFilter form={form} />
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
                <Pagination filter={filter} pagination={pagination} setFilter={setFilter} />
              </div>

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