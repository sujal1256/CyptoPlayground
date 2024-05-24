import React from 'react';

function PriceRow({ index, name, image, current_price, market_cap, price_change_percentage_24h, total_volume }) {
  return (
    <tr className='h-[40px]'>
      <td>{index + 1}</td>
      <td className='flex items-center gap-2 h-[40px]  '>
        <img src={image} alt={name} className='w-[20px]' />
        <p className='h-[40px] grid place-content-center'>{name}</p>
      </td>
      <td><i className='fa fa-dollar text-sm mr-[1px]'></i>{current_price.toFixed(2)}</td>
      <td className={price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-500'}>
        {price_change_percentage_24h >= 0 ? (
          <i className="fa-solid fa-arrow-up mr-1"></i>
        ) : (
          <i className="fa-solid fa-arrow-down mr-1"></i>
        )}
        {price_change_percentage_24h.toFixed(2)}
      </td>
      <td>{formatIndianNumber(total_volume)}</td>
      <td><i className='fa fa-dollar text-sm mr-[1px]'></i>{(market_cap / 10 ** 9).toFixed(2)} <span>B</span></td>
    </tr>
  );
}

export default PriceRow;

function formatIndianNumber(num) {
  let x = num.toString().split('.');
  let intPart = x[0];
  let decPart = x.length > 1 ? '.' + x[1] : '';
  
  let lastThree = intPart.substring(intPart.length - 3);
  let otherNumbers = intPart.substring(0, intPart.length - 3);
  if (otherNumbers !== '')
    lastThree = ',' + lastThree;
  let formattedNumber = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + decPart;

  return formattedNumber;
}
