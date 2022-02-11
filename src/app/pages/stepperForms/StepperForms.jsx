import React from 'react'
import BlastCampaign from '../../components/BlashCampaign/BlastCampaign'
import Stepper from '../../components/Stepper/Stepper'

const StepperForms = () => {
    return (
        <>
            {/**<!--begin::Content-->*/}
            <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
                {/**<!--begin::Container-->*/}
                <div class="container-xxl" id="kt_content_container">
                    {/** <!--begin::Stepper--> */}
                    <div className="stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid" id="kt_stepper_example_basic">
                        <Stepper />
                        <BlastCampaign />
                    </div>
                    {/** <!--end::Stepper--> */}
                </div>
                {/**<!--end::Container-->*/}
            </div>
            {/**<!--end::Content-->*/}

        </>
    )
}

export default StepperForms