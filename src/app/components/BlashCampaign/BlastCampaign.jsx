import React from 'react'

const BlastCampaign = () => {
    return (
        <>
            {/**<!--begin::Content-->*/}
            <div class="card d-flex flex-row-fluid flex-center">
                {/**<!--begin::Form-->*/}
                <form class="card-body py-20 w-100 w-xl-700px px-9" novalidate="novalidate" id="kt_create_account_form">
                    {/** <!--begin::Header--> */}
                    <h2>1. BlastCampaign</h2>
                    <p className='text-muted'>In this section you're going to setup yout traking for your campaign. There is one necessary tracking code thathas to be placedon your page, and there rest are optional.</p>
                    {/** <!--end::Header--> */}
                    {/** <!--start::Traffic--> */}
                    <h4 className='mt-5'>Select Your Traffic Campaign</h4>
                    <div className='container bg-light p-3 rounded-3'>
                        <div class="mb-3">
                            <label for="traficCampaign" class="form-label">Select Trafic Campaign</label>
                            <select id="traficCampaign" class="form-select">
                                <option>Select Your Campaign</option>
                            </select>
                            <p className="text-muted mt-2">
                                Please select your Campaign
                            </p>
                        </div>
                        <div className='row'>
                            {/** <!--start::StartDate--> */}
                            <div className="col-6">
                                <div class="form-group row">
                                    <label class=" text-right text-muted fw-bold ">Select Start Date</label>
                                    <div class="">
                                        <div class="input-group date">
                                            <label
                                                for="startDate" class="input-group-text">
                                                <i class="bi bi-calendar-check fs-2x"></i>
                                            </label>
                                            <input class="form-control" placeholder="Enter Start Date" id="startDate" />
                                            <div class="input-group-append">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/** <!--end::StartDate--> */}
                            {/** <!--start::EndDate--> */}
                            <div className="col-6">
                                <div class="form-group row">
                                    <label class="text-right text-muted fw-bold">Select End Date</label>
                                    <div class="">
                                        <div class="input-group date">
                                            <label
                                                for="startDate" class="input-group-text">
                                                <i class="bi bi-calendar-check fs-2x"></i>
                                            </label>
                                            <input
                                                id="startDate" class="form-control" placeholder="Enter End Date" />
                                            <div class="input-group-append">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/** <!--end::EndDate--> */}
                        </div>
                        <p className='text-muted mt-2'>The tracking will occur only during the dates you set</p>
                    </div>
                    {/** <!--end::Traffic--> */}
                    {/** <!--start::Vendor--> */}
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <div>
                                <h4 className='mt-3'>Select Your Vendor</h4>
                                <p className='text-muted'>This is the section you need to select your vendor for this traffic campaign.</p>
                                <div class="mb-3">
                                    <label for="traficCampaign" class="form-label">Select Your Vendor</label>
                                    <select id="traficCampaign" class="form-select bg-light">
                                        <option>Name of Vendor</option>
                                    </select>
                                    <p className="text-muted mt-2">
                                        Please enter your vendor name
                                    </p>
                                </div>
                            </div>
                            <div className="mt-5">
                                <h4 className='mt-3'>Click Information</h4>
                                <p className='text-muted'>In this section you need to specify information pertaining to your clicks.</p>
                                <div class="mb-3">
                                    <label for="traficCampaign" class="form-label">Number of Clicks</label>
                                    <select id="traficCampaign" class="form-select">
                                        <option>Enter Number</option>
                                    </select>
                                    <p className="text-muted mt-2">
                                        Please enter the number of clicksyou are tracking
                                    </p>
                                </div>
                                <div class="mb-3">
                                    <label for="traficCampaign" class="form-label">Price per Clicks</label>
                                    <div class="input-group mb-3">
                                        <span class="input-group-text">$</span>
                                        <input type="text" placeholder="Enter Price" class="form-control" aria-label="Amount (to the nearest dollar)" />
                                        <span class="input-group-text">.00</span>
                                    </div>
                                    <p className="text-muted mt-2">
                                        Please enter the price per click
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/** <!--end::Vendor--> */}
                        <div className="col-12 col-md-6">
                            {/** <!--start::info--> */}
                            <div className="bg-light p-4 rounded-3">
                                <div className='d-flex justify-content-between'>
                                    <h4 className="text-primary fw-bold">Max Smith
                                        <i class="bi bi-patch-check-fill text-primary ms-2"></i>
                                    </h4>
                                    <div>
                                        <i class="bi bi-box-arrow-up-right"></i>
                                        <i class="bi bi-caret-down-square ms-2"></i>
                                    </div>
                                </div>
                                <div>
                                    <div className="d-flex">
                                        <p className='me-3 text-muted'><i class="bi bi-person-circle"></i> PST</p>
                                        <p className=' text-muted'><i class="bi bi-geo-alt"></i> (307)259-1054</p>
                                    </div>
                                    <div>
                                        <p className='text-end text-primary'>View Details</p>
                                        <div className='row g-4 justify-content-between'>
                                            <div className='bg-white col-5 px-4 py-3'>
                                                <div className='fw-bolder d-flex align-items-center mb-1 fs-4'>
                                                    <i class="bi bi-arrow-up-short text-primary"></i>
                                                    <h4 className='text-dark m-0'>3</h4>
                                                </div>
                                                <div>
                                                    <p className='text-muted fw-bolder'>Campaigns</p>
                                                </div>
                                            </div>
                                            <div className='bg-white col-5 px-4 py-3'>
                                                <div className='fw-bolder d-flex align-items-center mb-1 fs-4'>
                                                    <i class="bi bi-arrow-up-short text-primary"></i>
                                                    <h4 className='text-dark m-0'>800</h4>
                                                </div>
                                                <div>
                                                    <p className='text-muted fw-bolder'>Total Clicks</p>
                                                </div>
                                            </div>
                                            <div className='bg-white col-5 px-4 py-3'>
                                                <div className='fw-bolder d-flex align-items-center mb-1 fs-4'>
                                                    <i class="bi bi-arrow-up-short text-primary"></i>
                                                    <h4 className='text-dark m-0'>$128</h4>
                                                </div>
                                                <div>
                                                    <p className='text-muted fw-bolder'>Total Sales</p>
                                                </div>
                                            </div>
                                            <div className='bg-white col-5 px-4 py-3'>
                                                <div className='fw-bolder d-flex align-items-center mb-1 fs-4'>
                                                    <i class="bi bi-arrow-down-short text-primary"></i>
                                                    <h4 className='text-dark m-0'>80</h4>
                                                </div>
                                                <div>
                                                    <p className='text-muted fw-bolder'>Vendor Score</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='mt-5'>
                                        <h6>Past Campaigns:</h6>
                                        {/** <!--start::Vendor--> */}
                                        <table className='table'>
                                            <thead>
                                                <tr className='text-primary'>
                                                    <th className='border-0'>Campaign</th>
                                                    <th className='border-0'>Date</th>
                                                    <th className='border-0'>Clicks</th>
                                                    <th className='border-0'>Sales</th>
                                                    <th className='border-0'>Score</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th className='border-0'>test</th>
                                                    <td className='border-0'>1/29/22</td>
                                                    <td className='border-0'>200</td>
                                                    <td className='border-0'>$65.00</td>
                                                    <td className='border-0'>85</td>
                                                </tr>
                                                <tr>
                                                    <th className='border-0'>test2</th>
                                                    <td className='border-0'>1/30/22</td>
                                                    <td className='border-0'>500</td>
                                                    <td className='border-0'>$35.00</td>
                                                    <td className='border-0'>88</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        {/** <!--start::Vendor--> */}
                                    </div>
                                </div>
                            </div>
                            {/** <!--end::info--> */}
                        </div>
                    </div>
                    {/** <!--end::Vendor--> */}
                    <div className='text-end'>
                        <button className='btn btn-primary text-white mt-4'>Continue
                            <i class="bi bi-arrow-right-short ms-1"></i>
                        </button>
                    </div>
                </form>
                {/**<!--end::Form-->*/}
            </div>
            {/**<!--end::Content-->*/}
        </>
    )
}

export default BlastCampaign