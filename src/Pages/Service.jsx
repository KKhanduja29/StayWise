import React from 'react'
import "../index.css";
import "../flaticon.css";

function Service() {
  return (
    <>
     <section className="services-section spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <span>What We Do</span>
                        <h2>Discover Our Services</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-sm-6">
                    <div className="service-item">
                        <i className="flaticon-036-parking"></i>
                        <h4>Travel Plan</h4>
                        <p>We also provide traveling facility.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="service-item">
                        <i className="flaticon-033-dinner"></i>
                        <h4>Catering Service</h4>
                        <p>we also provide Catering.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="service-item">
                        <i className="flaticon-026-bed"></i>
                        <h4>Babysitting</h4>
                        <p>In our all hotels we have a kids play area.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="service-item">
                        <i className="flaticon-024-towel"></i>
                        <h4>Laundry</h4>
                        <p>We also provide loundry facility.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="service-item">
                        <i className="flaticon-044-clock-1"></i>
                        <h4>Hire Driver</h4>
                        <p>We provide Taxi services</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="service-item">
                        <i className="flaticon-012-cocktail"></i>
                        <h4>Bar & Drink</h4>
                        <p>In our hotels we have bar.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Service
