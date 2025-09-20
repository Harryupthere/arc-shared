import { useState } from 'react';
import './Checkout.scss';
import imageMap from '../utlis/helper';

const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    country: '',
    paymentMethod: '',
    couponCode: '',
    confirmationChecked: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const applyCoupon = () => {
    console.log('Applying coupon:', formData.couponCode);
  };

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <h2 className='main-titile'>Checkout</h2>
        <div className="checkout-content">
          {/* Left Side - Billing Details and Payment */}
          <div className="checkout-left">
            <form onSubmit={handleSubmit}>
              {/* Billing Details Section */}
              <div className="billing-section">
                <h2>Billing Details</h2>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">
                      First Name<span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="Enter First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastName">
                      Last Name<span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Enter Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contactNumber">
                    Contact Number<span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    placeholder="Enter Contact Number"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    Email<span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="country">
                    Country<span className="required">*</span>
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Choose a country</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="CA">Canada</option>
                    <option value="AU">Australia</option>
                    <option value="DE">Germany</option>
                    <option value="FR">France</option>
                    <option value="IT">Italy</option>
                    <option value="ES">Spain</option>
                    <option value="NL">Netherlands</option>
                    <option value="SE">Sweden</option>
                  </select>
                </div>

                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    id="confirmation"
                    name="confirmationChecked"
                    checked={formData.confirmationChecked}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="confirmation">
                    Confirmation that the individual is not a U.S. citizen
                  </label>
                </div>
              </div>

              {/* Payment Method Section */}
              <div className="payment-section">
                <h2>Choose Payment Method</h2>

                <div className="payment-options">
                  <div className="payment-option">
                    <input
                      type="radio"
                      id="card"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="card" className="payment-label">
                      <div className="payment-icons">
                        Stripe Payment
                        <img src={imageMap['cards.png']} alt="Mastercard" />
                      </div>
                    </label>
                  </div>

                  <div className="payment-option">
                    <input
                      type="radio"
                      id="paypal"
                      name="paymentMethod"
                      value="paypal"
                      checked={formData.paymentMethod === 'paypal'}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="paypal" className="payment-label">
                      <div className="payment-icons">
                        Crypto Payment
                        <img src={imageMap['crypto.png']} alt="PayPal" />
                      </div>
                    </label>
                  </div>


                </div>
              </div>
            </form>
          </div>

          {/* Right Side - Order Summary */}
          <div className="checkout-right">
            <div className="order-summary">
              {/* Account Details */}
              <div className="account-details">
                <div className="account-header">
                  <h3>Two Phase Funding</h3>
                  <div className="account-price">$0</div>
                </div>
                <div className="account-subtitle">Accounts</div>

                <div className="account-specs">
                  <div className="spec-row">
                    <span>Profit Target :</span>
                    <span>-</span>
                  </div>
                  <div className="spec-row">
                    <span>Maximum Daily Loss:</span>
                    <span>-</span>
                  </div>
                  <div className="spec-row">
                    <span>Maximum Overall Loss:</span>
                    <span>10%</span>
                  </div>
                  <div className="spec-row">
                    <span>Minimum Trading Days:</span>
                    <span>5 Days</span>
                  </div>
                </div>
              </div>

              {/* Add-ons */}
              {/* <div className="addon-section">
                <div className="addon-header">Selected Add-on</div>
                <div className="addon-content">
                </div>
              </div> */}

              {/* Coupon Code */}
              <div className="coupon-section">
                <div className="coupon-header">Apply Coupon Code</div>
                <div className="coupon-input-group">
                  <input
                    type="text"
                    placeholder="Code"
                    name="couponCode"
                    value={formData.couponCode}
                    onChange={handleInputChange}
                    className="coupon-input"
                  />
                  <button type="button" onClick={applyCoupon} className="apply-btn">
                    Apply
                  </button>
                </div>
              </div>

              {/* Terms Notice */}
              {/* <div className="terms-notice"> */}

              <div className="checkbox-group terms-notice">
                <input
                  type="checkbox"
                  id="terms"
                  name="checkterms"
                />
                <label htmlFor="terms">
                  Check Terms and conditions Before Checkout
                </label>
              </div>


              {/* Price Summary */}
              <div className="price-summary">
                <div className="price-row">
                  <span>Sub Total</span>
                  <span>$0</span>
                </div>
                <div className="price-row">
                  <span>Discount</span>
                  <span>$0.00</span>
                </div>
                <div className="price-row total">
                  <span>Total</span>
                  <span>$0.00</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button type="submit" className="checkout-btn">
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;