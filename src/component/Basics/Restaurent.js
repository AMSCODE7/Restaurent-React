import React from 'react';
import "./index.css";

const Restaurent = () => {
  return (
    <>
    <div className='card-container'>
        <div className='card'>
            <div className='card-body'>
                <span className='card-number card-circle subtle'>1</span>
                <span className='card-author subtle'>Breakfast</span>
                <h2 className='card-title'>Maggi</h2>
                <span className='card-description subtle'>
                When the heart craves all sorts 
                of creamy delicacies from around the world, fixing up our Maggi 
                with an Italian twist should be your go-to solution. Make sure 
                there's enough cheese to justify this experiment.
                </span>
                <div className='card-read'>Read</div>
            </div>
            <img src="https://geekrobocook.com/wp-content/uploads/2021/03/46_Mexican-Maggi.jpg" />
        </div>
    </div>
    </>
  )
}

export default Restaurent