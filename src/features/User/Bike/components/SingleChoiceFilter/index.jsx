import React from 'react';

SingleChoiceFilter.propTypes = {

};

function SingleChoiceFilter({ form }) {


  const { register } = form;
  return (
    <div className="filter-brand-left">
      <div className="title-left">
        <h3>Price</h3>
      </div>
      <div className="brand-box">
        <ul>
          <li>
            <div className="radio radio-danger">
              <input {...register("price")} id="Radios1" value="100000" type="radio" />
              <label htmlFor="Radios1"> Greater than 8000 </label>
            </div>
          </li>
          <li>
            <div className="radio radio-danger">
              <input {...register("price")} id="Radios2" value="5000-8000" type="radio" />
              <label htmlFor="Radios2"> 5000-8000 </label>
            </div>
          </li>
          <li>
            <div className="radio radio-danger">
              <input {...register("price")} id="Radios3" value="1000-5000" type="radio" />
              <label htmlFor="Radios3"> 1000-5000 </label>
            </div>
          </li>
          <li>
            <div className="radio radio-danger">
              <input {...register("price")} id="Radios4" value="500-1000" type="radio" />
              <label htmlFor="Radios4"> 500-1000 </label>
            </div>
          </li>
          <li>
            <div className="radio radio-danger">
              <input {...register("price")} id="Radios5" value="0-500" type="radio" />
              <label htmlFor="Radios5"> 0 - 500 </label>
            </div>
          </li>
          <li>
            <div className="radio radio-danger">
              <input {...register("price")} id="Radios5" value="default" type="radio" />
              <label htmlFor="Radios6">  Default </label>
            </div>
          </li>


        </ul>
      </div>
    </div>
  );
}

export default SingleChoiceFilter;