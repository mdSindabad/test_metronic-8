import React from 'react'

const Stepper = () => {
    return (
        <>
            {/**<!--begin::Aside-->*/}
            <div class="card d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px w-xxl-400px me-9">
                {/**<!--begin::Wrapper-->*/}
                <div class="card-body px-6 px-lg-10 px-xxl-15 py-20">
                    {/**<!--begin::Nav-->*/}
                    <div class="stepper-nav">
                        {/**<!--begin::Step-1-->*/}
                        <div class="stepper-item current" data-kt-stepper-element="nav">
                            {/**<!--begin::Line-->*/}
                            <div class="stepper-line w-40px"></div>
                            {/**<!--end::Line-->*/}
                            {/**<!--begin::Icon-->*/}
                            <div class="stepper-icon w-40px h-40px">
                                <i class="stepper-check fas fa-check"></i>
                                <span class="stepper-number">1</span>
                            </div>
                            {/**<!--end::Icon-->*/}
                            {/**<!--begin::Label-->*/}
                            <div class="stepper-label">
                                <h3 class="stepper-title">Create Blast Campaign</h3>
                                <div class="stepper-desc fw-bold">Traffic blast to your campaign</div>
                            </div>
                            {/**<!--end::Label-->*/}
                        </div>
                        {/**<!--end::Step-1-->*/}
                        {/**<!--begin::Step-2-->*/}
                        <div class="stepper-item" data-kt-stepper-element="nav">
                            {/**<!--begin::Line-->*/}
                            <div class="stepper-line w-40px"></div>
                            {/**<!--end::Line-->*/}
                            {/**<!--begin::Icon-->*/}
                            <div class="stepper-icon w-40px h-40px">
                                <i class="stepper-check fas fa-check"></i>
                                <span class="stepper-number">2</span>
                            </div>
                            {/**<!--end::Icon-->*/}
                            {/**<!--begin::Label-->*/}
                            <div class="stepper-label">
                                <h3 class="stepper-title">Trackling Link</h3>
                                <div class="stepper-desc fw-bold">The trackling link to track your stats</div>
                            </div>
                            {/**<!--end::Label-->*/}
                        </div>
                        {/**<!--end::Step-2-->*/}
                        {/**<!--begin::Step-3-->*/}
                        <div class="stepper-item" data-kt-stepper-element="nav">
                            {/**<!--begin::Line-->*/}
                            <div class="stepper-line w-40px"></div>
                            {/**<!--end::Line-->*/}
                            {/**<!--begin::Icon-->*/}
                            <div class="stepper-icon w-40px h-40px">
                                <i class="stepper-check fas fa-check"></i>
                                <span class="stepper-number">3</span>
                            </div>
                            {/**<!--end::Icon-->*/}
                            {/**<!--begin::Label-->*/}
                            <div class="stepper-label">
                                <h3 class="stepper-title">Live Map Feed</h3>
                                <div class="stepper-desc fw-bold">See your clicks in real time!</div>
                            </div>
                            {/**<!--end::Label-->*/}
                        </div>
                        {/**<!--end::Step-3-->*/}
                        {/**<!--begin::Step-4-->*/}
                        <div class="stepper-item" data-kt-stepper-element="nav">
                            {/**<!--begin::Line-->*/}
                            <div class="stepper-line w-40px"></div>
                            {/**<!--end::Line-->*/}
                            {/**<!--begin::Icon-->*/}
                            <div class="stepper-icon w-40px h-40px">
                                <i class="stepper-check fas fa-check"></i>
                                <span class="stepper-number">4</span>
                            </div>
                            {/**<!--end::Icon-->*/}
                            {/**<!--begin::Label-->*/}
                            <div class="stepper-label">
                                <h3 class="stepper-title">Trafic Tiers</h3>
                                <div class="stepper-desc fw-bold">Analyze the quality of your traffic</div>
                            </div>
                            {/**<!--end::Label-->*/}
                        </div>
                        {/**<!--end::Step-4-->*/}
                        {/**<!--begin::Step-5-->*/}
                        <div class="stepper-item" data-kt-stepper-element="nav">
                            {/**<!--begin::Line-->*/}
                            <div class="stepper-line w-40px"></div>
                            {/**<!--end::Line-->*/}
                            {/**<!--begin::Icon-->*/}
                            <div class="stepper-icon w-40px h-40px">
                                <i class="stepper-check fas fa-check"></i>
                                <span class="stepper-number">5</span>
                            </div>
                            {/**<!--end::Icon-->*/}
                            {/**<!--begin::Label-->*/}
                            <div class="stepper-label">
                                <h3 class="stepper-title">Live Map Feed</h3>
                                <div class="stepper-desc fw-bold">See your clicks in real time</div>
                            </div>
                            {/**<!--end::Label-->*/}
                        </div>
                        {/**<!--end::Step-5-->*/}
                        {/**<!--begin::Step-6-->*/}
                        <div class="stepper-item" data-kt-stepper-element="nav">
                            {/**<!--begin::Line-->*/}
                            <div class="stepper-line w-40px"></div>
                            {/**<!--end::Line-->*/}
                            {/**<!--begin::Icon-->*/}
                            <div class="stepper-icon w-40px h-40px">
                                <i class="stepper-check fas fa-check"></i>
                                <span class="stepper-number">6</span>
                            </div>
                            {/**<!--end::Icon-->*/}
                            {/**<!--begin::Label-->*/}
                            <div class="stepper-label">
                                <h3 class="stepper-title">Statistics</h3>
                                <div class="stepper-desc fw-bold">Analyze your campaign in details</div>
                            </div>
                            {/**<!--end::Label-->*/}
                        </div>
                        {/**<!--end::Step-5-->*/}
                    </div>
                    {/**<!--end::Nav-->*/}
                </div>
                {/**<!--end::Wrapper-->*/}
            </div>
            {/**<!--end::Aside-->*/}
        </>
    )
}

export default Stepper