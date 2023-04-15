import React from "react";
import "./WidgetLg.css";
import { transactions } from "../../datas";
const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton  " + type}>{type}</button>;
  };
  return (
    <div className='widgetLg-container flex-[2] mt-5 px-4 py-2'>
      <table className='widgetLgTable w-full'>
        <caption className=' caption-top  font-bold text-lg'>
          Latest TransActions
        </caption>
        <thead className='bg-gray-200 text-left'>
          <tr className='widgetLgTr leading-10'>
            <th className='widgetLgTh'>Customer</th>
            <th className='widgetLgTh'>Date</th>
            <th className='widgetLgTh'>Amount</th>
            <th className='widgetLgTh'>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className='widgetLgTr bg-white border odd:bg-gray-100 '>
              <td className='widgetLgUser flex items-center '>
                <img
                  src={transaction.img}
                  alt=''
                  className='w-[40px] h-[40px] rounded-full object-cover object-center'
                />
                <h3 className="ms-2">{transaction.costumer}</h3>
              </td>
              <td className='widgetLgDate'>{transaction.date}</td>
              <td className='widgetLgAmount'>${transaction.amount}</td>
              <td className='widgetLgStatus'>
                <Button type={transaction.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WidgetLg;
