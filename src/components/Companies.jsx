import React from "react";
import afterpay from "../assets/img/companyImg/afterpay.png";
import airbnb from "../assets/img/companyImg/airbnb.png";
import himalays from "../assets/img/companyImg/himalays.png";
import uber from "../assets/img/companyImg/uber.png";
import paypal from "../assets/img/companyImg/paypal.png";
import outreach from "../assets/img/companyImg/outreach.png";
import '../styles/Companies.css'

const companies = [afterpay, himalays, paypal, uber, outreach, airbnb];

function CompaniesLogo() {
  return (
    <div className="flex items-center companies-logo mt-6">
      {companies.map((company, i) => (
        <div key={i} className='p-6'>
          <img src={company} alt={company} />
        </div>
      ))}
    </div>
  );
}

export default CompaniesLogo;
