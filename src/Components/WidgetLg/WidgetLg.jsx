import React from 'react'
import { transactions } from '../../Datas'
import './WidgetLg.css'
export default function WidgetLg() {
    const Button = ({type}) => {
        return <button className={'widgetLgBtn ' + type}>{type}</button>
    }
  return (
    <div className='widgetLg'>
        <h3 className='widgetLgTitle'>Latest Transactions</h3>
        <table className='widgetLgTable'>
            <tr className="widgetLgTableRow">
                <th className="widgetLgTh">Customer</th>
                <th className="widgetLgTh">Date</th>
                <th className="widgetLgTh">Amount</th>
                <th className="widgetLgTh">Status</th>
            </tr>
            {
                transactions.map(transaction => (
                    <tr className="widgetLgTableRow">
                        <td className="widgetLgTd widgetLgUser">
                            <img src={transaction.img} alt="" className='widgetLgImg' />
                            <span>{transaction.customer}</span>
                        </td>
                        <td className="widgetLgDate">{transaction.date}</td>
                        <td className="widgetLgAmount">${transaction.amount}</td>
                        <td className="widgetLgTd">
                            <Button type={transaction.status}>{transaction.status}</Button>
                        </td>
                </tr>
                ))
            }
        </table>
    </div>
  )
}
