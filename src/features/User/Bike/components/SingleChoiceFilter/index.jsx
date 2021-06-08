import React from 'react';

SingleChoiceFilter.propTypes = {
    
};

function SingleChoiceFilter({form}) {
  const {register} = form;
    return (
        <div className="filter-brand-left">
                  <div className="title-left">
                    <h3>Price</h3>
                  </div>
                  <div className="brand-box">
                    <ul>
                      <li>
                        <div className="radio radio-danger">
                          <input {...register("price")} id="Radios1" value="Greater than 2500" type="radio" />
                          <label htmlFor="Radios1">  Greater than 2500 </label>
                        </div>
                      </li>
                      <li>
                        <div className="radio radio-danger">
                          <input {...register("price")} id="Radios2" value="800-1500" type="radio" />
                          <label htmlFor="Radios2"> 800 - 1500 </label>
                        </div>
                      </li>
                      <li>
                        <div className="radio radio-danger">
                          <input {...register("price")} id="Radios3" value="500-800" type="radio" />
                          <label htmlFor="Radios3"> 500 - 800 </label>
                        </div>
                      </li>
                      <li>
                        <div className="radio radio-danger">
                          <input {...register("price")} id="Radios4" value="300-500" type="radio" />
                          <label htmlFor="Radios4"> 300 - 500 </label>
                        </div>
                      </li>
                      <li>
                        <div className="radio radio-danger">
                          <input {...register("price")} id="Radios5" value="0-300" type="radio" />
                          <label htmlFor="Radios5"> 0 - 300 </label>
                        </div>
                      </li>
                      
                    </ul>
                  </div>
                </div>
    );
}

export default SingleChoiceFilter;