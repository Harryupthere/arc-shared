import { VerifiedUserSharp } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import './Trader.scss'
import { GraphUp } from '../../icons/icon'
const Trader = () => {
    return (
        <div className="trader-wrapped">
            <div className="dark-card first-card">
                <div className='card-header'>
                    <div className="header-icon"><GraphUp sx={{ fontSize: 30 }} /></div>
                    <h1>ARC Trader</h1>
                </div>
            </div>
            <div className="account-card">
                <div className="theme_card dark-card">
                    <div className="funded-content">
                        <h4 className="">ARC_100k Funded Login :12345678 </h4>
                        <h4 className="">Balance : $106.600</h4>
                        <div className="status">Account Status : <span>Active</span></div>
                    </div>
                    <Link
                        to="/dashboard/arc-traders/withdrawal"
                        className="btn btn-primary">
                        Proceed
                    </Link>
                </div>
                <div className="theme_card dark-card">
                    <div className="funded-content">
                        <h4 className="">ARC_100k Funded Login :12345678 </h4>
                        <h4 className="">Balance : $106.600</h4>
                        <div className="status">Account Status : <span>Active</span></div>
                    </div>
                    <Link
                        to="/dashboard/arc-traders/withdrawal"
                        className="btn btn-primary">
                        Proceed
                    </Link>
                </div>
                <div className="theme_card dark-card">
                    <div className="funded-content ">
                        <h4 className="">ARC_100k Funded Login :12345678 </h4>
                        <h4 className="">Balance : $106.600</h4>
                        <div className="status">Account Status : <span>Active</span></div>
                    </div>
                    <Link
                        to="/dashboard/arc-traders/withdrawal"
                        className="btn btn-primary">
                        Proceed
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Trader