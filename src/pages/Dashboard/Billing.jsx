import React from 'react'
import './Billing.scss'
import { Link } from 'react-router-dom'
import DiscountIcon from '@mui/icons-material/Discount';
import DownloadIcon from '@mui/icons-material/Download';
const Billing = () => {
    return (
        <>
           
            <div className='billing-wrapped'>
                  <div className="dark-card">
                        <div className='card-header'>
                          <div className="header-icon"><DiscountIcon sx={{ fontSize: 30 }} /></div>
                          <h1>Billing</h1>
                        </div>
                      </div>
                <div className="data-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Invoice</th>
                                <th>Description</th>
                                <th>Add-ons</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Action  </th>
                                </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>04/01/2025</td>
                                <td>INV-2024</td>
                                <td>ARC 100k Challenge Purchase</td>
                                <td>Extra Phase Extension</td>
                                <td>$499</td>
                                <td>Paid</td>
                                <td>
                                    <button type='button' className='download-btn'><DownloadIcon sx={{ color: '#fff' }}/></button>
                                </td>
                            </tr>

                            <tr>
                                <td>04/01/2025</td>
                                <td>INV-2024</td>
                                <td>ARC 100k Challenge Purchase</td>
                                <td>Extra Phase Extension</td>
                                <td>$499</td>
                                <td>Paid</td>
                                <td>
                                    <button type='button' className='download-btn'><DownloadIcon  sx={{ color: '#fff' }} /></button>
                                </td>
                            </tr>
                            <tr>
                                <td>04/01/2025</td>
                                <td>INV-2024</td>
                                <td>ARC 100k Challenge Purchase</td>
                                <td>Extra Phase Extension</td>
                                <td>$499</td>
                                <td>Paid</td>
                                <td>
                                    <button type='button' className='download-btn'><DownloadIcon sx={{ color: '#fff' }} /></button>
                                </td>
                            </tr>
                            <tr>
                                <td>04/01/2025</td>
                                <td>INV-2024</td>
                                <td>ARC 100k Challenge Purchase</td>
                                <td>Extra Phase Extension</td>
                                <td>$499</td>
                                <td>Paid</td>
                                <td>
                                    <button type='button' className='download-btn'><DownloadIcon  sx={{ color: '#fff' }} /></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>
                <Link   
                    to="#/"
                    className="btn btn-primary">
                    Refund
                </Link>
            </div>
        </>
    )
}

export default Billing