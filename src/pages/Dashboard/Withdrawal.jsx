import './withdrawal.scss'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import React from 'react'
import imageMap from '../../utlis/helper';
import { Button } from '@mui/material';

const Withdrawal = () => {

    return (
        <div className='withdraw-wrapped'>
            <div className='dark-card'>
                <h1>Withdraw</h1>
                <div className='profit-split'>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker label="Profit Split (14 Days)" sx={{ color: '#fff' }} />
                        </DemoContainer>
                    </LocalizationProvider>
                </div>
            </div>
            <div className='dark-card p-0'>
                <div className="data-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Account</th>
                                <th>Date</th>
                                <th>Profit</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>12345678</td>
                                <td>14/05/2025</td>
                                <td>$430</td>
                            </tr>
                            <tr>
                                <td>12345678</td>
                                <td>14/05/2025</td>
                                <td>$430</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>

              <div className="flex-box">
                    <div className="left-side">
                        <div className="block1 mb-4">
                            <div className="main-heading"><h2>Amount</h2></div>
                            <div className="dark-card">
                                <h3 className="account-heading">Account : <strong>1234567896</strong></h3>
                                <h3>Withdrawal Amount</h3>
                                <input
                                    type="text"
                                    className="input-field"
                                    placeholder="Amount"
                                />
                                <span className="text-accent">Max Amount $430</span>
                            </div>
                        </div>
                        <div className="main-heading"><h2>Payment Method</h2></div>
                        <div className="radio-btn dark-card">
                            <div className="item1 ">
                                <input type="radio" name="payment" />
                                <div className="labels">
                                    <span className="font-semibold card-text text-white"> Card Payment</span>
                                    <div className="images"><img src={imageMap['cards.png']} className="card-image"/></div>
                                </div>
                            </div>
                            <div className="item1">
                                <input type="radio" name="payment" />
                                <div className="labels">
                                    <span className="font-semibold card-text text-white">Crypto / Paypal</span>
                                    <div className="images flex gap-x-2.5">
                                        <img src={imageMap['paypal.png']} className="card-icon" alt="pay" />
                                        <img src={imageMap['crypto.png']}    className="card-icon" alt="pay" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="main-heading"><h2>Profit Split</h2></div>
                        <div className="dark-card">
                            <h4 className="text-3xl">$344</h4>
                            <p>80% Profit Split</p>
                        </div>
                    </div>
                </div>
                <button className='btn btn-primary'>Withdraw</button>
        </div>
    )
}

export default Withdrawal