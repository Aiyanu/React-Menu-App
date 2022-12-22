import React from 'react';

const Categories = ({filter,categories}) => {
  return <div className='btn-container'>
    {/* <div className="filter-btn" onClick={()=>filter("all")}>all</div>
    <div className="filter-btn" onClick={()=>filter("breakfast")}>breakfast</div> */}
    {categories.map((category,index)=>(
      <button 
      type='button' 
      className='filter-btn' 
      key={index}
      onClick={()=>filter(category)}>
        {category}
      </button>
    ))}
  </div>;
};

export default Categories;
