/*global $*/
import { useEffect } from "react"


export const CreateLink=()=>{

   useEffect(()=>{
	$('#set-start-date').flatpickr({
		enableTime: !1,
		dateFormat: "d, M Y"
	})
	$('#set-end-date').flatpickr({
		enableTime: !1,
		dateFormat: "d, M Y"
	})
	
   },[])

   
   useEffect(() => {
    const script = document.createElement('script');

    script.src = "assets/js/custom/modals/create-account.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

     return (
         <>
               <script src="assets/js/custom/modals/create-account.js"></script>

         							{/** <!--begin::Stepper--> */}
							<div class="stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid" id="kt_create_account_stepper">
								{/** <!--begin::Aside--> */}
								<div class="card d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px w-xxl-400px me-9">
									{/** <!--begin::Wrapper--> */}
									<div class="card-body px-6 px-lg-10 px-xxl-15 py-20">
										{/** <!--begin::Nav--> */}
										<div class="stepper-nav">
											{/** <!--begin::Step 1--> */}
											<div class="stepper-item current" data-kt-stepper-element="nav">
												{/** <!--begin::Line--> */}
												<div class="stepper-line w-40px"></div>
												{/** <!--end::Line--> */}
												{/** <!--begin::Icon--> */}
												<div class="stepper-icon w-40px h-40px">
													<i class="stepper-check fas fa-check"></i>
													<span class="stepper-number">1</span>
												</div>
												{/** <!--end::Icon--> */}
												{/** <!--begin::Label--> */}
												<div class="stepper-label">
													<h3 class="stepper-title">Create Your Link </h3>
													<div class="stepper-desc fw-bold">This is where you setup your link</div>
												</div>
												{/** <!--end::Label--> */}
											</div>
											{/** <!--end::Step 1--> */}
											{/** <!--begin::Step 2--> */}
											<div class="stepper-item" data-kt-stepper-element="nav">
												{/** <!--begin::Line--> */}
												<div class="stepper-line w-40px"></div>
												{/** <!--end::Line--> */}
												{/** <!--begin::Icon--> */}
												<div class="stepper-icon w-40px h-40px">
													<i class="stepper-check fas fa-check"></i>
													<span class="stepper-number">2</span>
												</div>
												{/** <!--end::Icon--> */}
												{/** <!--begin::Label--> */}
												<div class="stepper-label">
													<h3 class="stepper-title">Advance Options</h3>
													<div class="stepper-desc fw-bold">Additional options for your links</div>
												</div>
												{/** <!--end::Label--> */}
											</div>
											{/** <!--end::Step 2--> */}
											{/** <!--begin::Step 3--> */}
											<div class="stepper-item" data-kt-stepper-element="nav">
												{/** <!--begin::Line--> */}
												<div class="stepper-line w-40px"></div>
												{/** <!--end::Line--> */}
												{/** <!--begin::Icon--> */}
												<div class="stepper-icon w-40px h-40px">
													<i class="stepper-check fas fa-check"></i>
													<span class="stepper-number">3</span>
												</div>
												{/** <!--end::Icon--> */}
												{/** <!--begin::Label--> */}
												<div class="stepper-label">
													<h3 class="stepper-title">Live Map Feed</h3>
													<div class="stepper-desc fw-bold">See your clicks in real time!</div>
												</div>
												{/** <!--end::Label--> */}
											</div>
											{/** <!--end::Step 3--> */}
											{/** <!--begin::Step 4--> */}
											<div class="stepper-item" data-kt-stepper-element="nav">
												{/** <!--begin::Line--> */}
												<div class="stepper-line w-40px"></div>
												{/** <!--end::Line--> */}
												{/** <!--begin::Icon--> */}
												<div class="stepper-icon w-40px h-40px">
													<i class="stepper-check fas fa-check"></i>
													<span class="stepper-number">4</span>
												</div>
												{/** <!--end::Icon--> */}
												{/** <!--begin::Label--> */}
												<div class="stepper-label">
													<h3 class="stepper-title">Traffice Tiers</h3>
													<div class="stepper-desc fw-bold">Analyze the quality of your traffice</div>
												</div>
												{/** <!--end::Label--> */}
											</div>
											{/** <!--end::Step 4--> */}
											{/** <!--begin::Step 5--> */}
											<div class="stepper-item" data-kt-stepper-element="nav">
												{/** <!--begin::Line--> */}
												<div class="stepper-line w-40px"></div>
												{/** <!--end::Line--> */}
												{/** <!--begin::Icon--> */}
												<div class="stepper-icon w-40px h-40px">
													<i class="stepper-check fas fa-check"></i>
													<span class="stepper-number">5</span>
												</div>
												{/** <!--end::Icon--> */}
												{/** <!--begin::Label--> */}
												<div class="stepper-label">
													<h3 class="stepper-title">Statistics</h3>
													<div class="stepper-desc fw-bold">Anaylze your links in detail</div>
												</div>
												{/** <!--end::Label--> */}
											</div>
											{/** <!--end::Step 5--> */}
										</div>
										{/** <!--end::Nav--> */}
									</div>
									{/** <!--end::Wrapper--> */}
								</div>
								{/** <!--begin::Aside--> */}
								{/** <!--begin::Content--> */}
								<div class="card d-flex flex-row-fluid flex-center">
									{/** <!--begin::Form--> */}
									<form class="card-body py-20 w-100 w-xl-700px px-9" novalidate="novalidate" id="kt_create_account_form">
										{/** <!--begin::Step 1--> */}
										<div class="current" data-kt-stepper-element="content">
											{/** <!--begin::Wrapper--> */}
											<div class="w-100">
												{/** <!--begin::Heading--> */}
												<div class="pb-8 pb-lg-8">
													{/** <!--begin::Title--> */}
													<h2 class="fw-bolder d-flex align-items-center text-dark">Create Your link
													<i class="fas fa-exclamation-circle ms-12 fs-7" data-bs-toggle="tooltip" title="Billing is issued based on your selected account type"></i></h2>
												</div>
												{/** <!--end::Heading--> */}
												<div class="ps-3">
													<div class="mb-7 fv-row">
														{/** <!--begin::Label--> */}
														<label class="form-label mb-3">Name of Link</label>
														{/** <!--end::Label--> */}
														{/** <!--begin::Input--> */}
														<input type="text" class="form-control form-control-solid" name="account_name" placeholder="" value="Name of Link" />
														<div class="form-text">Please enter yout link name</div>
														{/** <!--end::Input--> */}
													</div>

													<div class="mb-7 fv-row">
														{/** <!--begin::Label--> */}
														<label class="form-label mb-3">Enter Destination URL</label>
														<div class="input-group">
							                                    <div class="input-group-prepend">
							                                       <span class="input-group-text fw-bold detail-box" id="basic-addon3">https://</span>
							                                    </div>
							                                    <input type="text" class="form-control form-control-solid" id="basic-url" aria-describedby="basic-addon3" value="Destination URL "/>
							                                 </div>
														<div class="form-text">Please enter yout link name</div>
														{/** <!--end::Input--> */}
													</div>
													<div class="mb-7 fv-row ">
														{/** <!--begin::Label--> */}
														<label class="form-label mb-3">Choose Your Domain Type</label>
														<div class="d-flex mb-4">
														<span class="form-check form-check-custom form-check-solid">
																<input class="form-check-input" type="radio" name="domain"  id="checkbox-1"  value="5" checked /><label class="form-label m-0 ms-4 me-4"for="checkbox-1">My Own Domain</label>
															</span>
															<span class="form-check form-check-custom form-check-solid">
																<input class="form-check-input" type="radio" name="domain" id="checkbox-2" value="1"  checked="checked"/><label class="form-label m-0 ms-4" for="checkbox-2"> Admin Domain</label>
															</span>
														</div>
														<select name="" class="form-select form-select-lg form-select-solid" data-control="select2" data-placeholder="Select..." data-allow-clear="true" data-hide-search="true">
															<option>Select Your Domain</option>
															<option value="1">S Corporation</option>
															<option value="1">C Corporation</option>
															<option value="2">Sole Proprietorship</option>
															<option value="3">Non-profit</option>
															<option value="4">Limited Liability</option>
															<option value="5">General Partnership</option>
														</select>
														<div class="form-text">Please select your domain</div>
													</div>
													<div class="mb-7 fv-row">
														{/** <!--begin::Label--> */}
														<label class="form-label mb-3">Enter Visible URL</label>
														<div class="input-group">
							                                    <div class="input-group-prepend">
							                                       <span class="input-group-text fw-bold detail-box bg-primary text-white" id="basic-addon3">https://</span>
							                                    </div>
							                                    <input type="text" class="form-control form-control-solid" id="basic-url" aria-describedby="basic-addon3" value="Visible URL "/>
							                                 </div>
														<div class="form-text">Please enter Visible URL</div>
														{/** <!--end::Input--> */}
													</div>
													<div class="fv-row row">
														<div class="col-md-6 col-lg-6 col-sm-12">
															<label class="form-label mb-3">Select  Vendor(optional)</label>
															<div class="d-flex align-self-center">
																<div class="flex-grow-1 me-3">
																	{/** <!--begin::Select--> */}
																	<select class="form-select form-select-solid" data-control="select2" data-hide-search="true">
																		<option value="">Select Vender</option>
																		<option value="1">Individual Seller Account</option>
																		<option value="2">Variable Closing Fee</option>
																		<option value="3">Minimum Referral Fee</option>
																	</select>
																	{/** <!--end::Select--> */}
																</div>
																{/** <!--begin::Action--> */}
																<button type="button" class="btn btn-icon flex-shrink-0" style={{backgroundColor: "#eef3f7"}}>
																	{/** <!--begin::Svg Icon | path: icons/duotune/arrows/arr065.svg--> */}
																	<span class="svg-icon svg-icon-1">
																		+
																	</span>
																	{/** <!--end::Svg Icon--> */}
																</button>
																</div>
															<div class="form-text">Please Select Your vendor</div>
													    </div>
													    <div class="col-md-6 col-lg-6 col-sm-12">
															<label class="form-label mb-3">Select  Group(optional)</label>
															<div class="d-flex align-self-center">
																<div class="flex-grow-1 me-3">
																	{/** <!--begin::Select--> */}
																	<select class="form-select form-select-solid" data-control="select2" data-hide-search="true">
																		<option value="">Select Group</option>
																		<option value="1">Individual Seller Account</option>
																		<option value="2">Variable Closing Fee</option>
																		<option value="3">Minimum Referral Fee</option>
																	</select>
																	{/** <!--end::Select--> */}
																</div>
																{/** <!--begin::Action--> */}
																<button type="button" class="btn btn-icon flex-shrink-0" style={{backgroundColor: "#eef3f7"}}>
																	{/** <!--begin::Svg Icon | path: icons/duotune/arrows/arr065.svg--> */}
																	<span class="svg-icon svg-icon-1">
																		+
																	</span>
																	{/** <!--end::Svg Icon--> */}
																</button>
																</div>
															<div class="form-text">Please Select Your Group</div>
													    </div>
													</div>
												</div>
											</div>
											{/** <!--end::Wrapper--> */}
										</div>
										{/** <!--end::Step 1--> */}
										{/** <!--begin::Step 2--> */}
										<div data-kt-stepper-element="content">
											{/** <!--begin::Wrapper--> */}
											<div class="w-100">
												{/** <!--begin::Heading--> */}
													{/** <!--begin::Title--> */}

														<div class="pb-8 pb-lg-8">
															<h2 class="fw-bolder d-flex align-items-center text-dark title-content">Advance Options
															<i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Billing is issued based on your selected account type"></i></h2>
														</div>
												{/** <!--end::Heading--> */}
												{/** <!--begin::Input group--> */}
												<div class="ps-3">
													<div class="mb-5 fv-row">
														{/** <!--begin::Label--> */}
														<h3 class="d-flex align-items-center mb-3">Dates for Link</h3>
														<span class="fw-bold text-gray-400 fs-6">In this section you're able to setup dates for your links. if the viewer click on the link boefre the dat it will show you pending page. if they click on th link after your date expires they will see the comple</span>
													</div>
													<div class="mb-5 fv-row">
														{/** <!--begin::Label--> */}
														<div class="col-11">
														<label class="form-label mb-3">Set Your Start Date</label>
														<div class="input-group">
							                                    <div class="input-group-prepend">
							                                       <span class="input-group-text fw-bold detail-box h-100" id="basic-addon3">
							                                       	<i class="fas fa-calendar-alt"></i>
							                                       </span>
							                                    </div>
							                                    <input type="text" class="form-control text-gray-400" id="set-start-date" aria-describedby="basic-addon3" value="Set Your Start Date"/>
							                                 </div>
							                             </div>
														{/** <!--end::Input--> */}
													</div>
													<div class="mb-7 fv-row">
														{/** <!--begin::Label--> */}
														<div class="col-11">
														<label class="form-label mb-3">Set Your End date</label>
														<div class="input-group">
							                                    <div class="input-group-prepend">
							                                       <span class="input-group-text fw-bold detail-box h-100" id="basic-addon3">
							                                       	<i class="fas fa-calendar-alt"></i>
							                                       </span>
							                                    </div>
							                                    <input type="text" class="form-control text-gray-400" id="set-end-date" aria-describedby="basic-addon3" value="Set Your End date"/>
							                                 </div>
							                             </div>
														{/** <!--end::Input--> */}
													</div>
											    	<div class="separator separator-dashed mt-18 mb-10"></div>
												    	<div class="mb-5 fv-row">
															{/** <!--begin::Label--> */}
															<h3 class="d-flex align-items-center mb-3">Holding pages</h3>
															<span class="fw-bold text-gray-400 fs-6">In this section you're able to set your holding pages for when a link is in peding or complated status the status of link can be changed manually or it colud be triggered bases on your dates</span>
														</div>
														<div class="fv-row mb-8">
															<div class="col-11">
																{/** <!--begin::Label--> */}
																<label class="form-label required">Set Pending Pages</label>
																{/** <!--end::Label--> */}
																{/** <!--begin::Input--> */}
																<select class="form-select text-gray-400" data-control="select2" data-allow-clear="true" data-hide-search="true">
																	<option>Set Pending Pages</option>
																</select>
															</div>
																{/** <!--end::Input--> */}
														</div>
														<div class="fv-row mb-8">
															<div class="col-11">
																{/** <!--begin::Label--> */}
																<label class="form-label required">Set Complated Pages</label>
																{/** <!--end::Label--> */}
																{/** <!--begin::Input--> */}
																<select class="form-select text-gray-400" data-control="select2" data-allow-clear="true" data-hide-search="true">
																	<option>Set Complated Pages</option>
																</select>
																<div class="form-text font-italic"><i>*if you do not set this section , your default pages will show in thier place</i></div>
																{/** <!--end::Input--> */}
															</div>
														</div>
											    			<div class="separator separator-dashed mt-20 mb-10"></div>
											    			<div class="mb-5 fv-row">
															{/** <!--begin::Label--> */}
															<h3 class="d-flex align-items-center mb-3">Retargeting Pixel</h3>
															<span class="fw-bold text-gray-400 fs-6">In this section you're able to set a retareting pixel that you woulf like to have fired off beofre the destination link is shown. This is an ideal solution for pages you don't own</span>
														</div>
														<div class="fv-row mb-8">
															<div class="col-11">
																{/** <!--begin::Label--> */}
																<label class="form-label required">Set Retargeting Pixel</label>
																{/** <!--end::Label--> */}
																{/** <!--begin::Input--> */}
																<select class="form-select text-gray-400" data-control="select2" data-allow-clear="true" data-hide-search="true">
																	<option>Set Retargeting Pixel</option>
																</select>
																</div>
																{/** <!--end::Input--> */}
														</div>
														<div class="fv-row mb-8">
																{/** <!--begin::Label--> */}
																<div class="col-11">
																<label class="form-label required">Set Complated Pages</label>
																{/** <!--end::Label--> */}
																{/** <!--begin::Input--> */}
																<select class="form-select text-gray-400" data-control="select2" data-allow-clear="true" data-hide-search="true">
																	<option>Set Complated Pages</option>
																</select>
															     </div>
																{/** <!--end::Input--> */}
														</div>
													</div>
											    </div>
											{/** <!--end::Wrapper--> */}
										</div>
										{/** <!--end::Step 2--> */}
										{/** <!--begin::Step 3--> */}
										<div data-kt-stepper-element="content">
											{/** <!--begin::Wrapper--> */}
											<div class="w-100">
												{/** <!--begin::Heading--> */}
												<div class="pb-10 pb-lg-12">
													{/** <!--begin::Title--> */}
													<h2 class="fw-bolder text-dark">Business Details</h2>
													{/** <!--end::Title--> */}
													{/** <!--begin::Notice--> */}
													<div class="text-muted fw-bold fs-6">If you need more info, please check out
													<a href="#" class="link-primary fw-bolder">Help Page</a>.</div>
													{/** <!--end::Notice--> */}
												</div>
												{/** <!--end::Heading--> */}
												{/** <!--begin::Input group--> */}
												<div class="fv-row mb-10">
													{/** <!--begin::Label--> */}
													<label class="form-label required">Business Name</label>
													{/** <!--end::Label--> */}
													{/** <!--begin::Input--> */}
													<input name="business_name" class="form-control form-control-lg form-control-solid" value="Keenthemes Inc." />
													{/** <!--end::Input--> */}
												</div>
												{/** <!--end::Input group--> */}
												{/** <!--begin::Input group--> */}
												<div class="fv-row mb-10">
													{/** <!--begin::Label--> */}
													<label class="d-flex align-items-center form-label">
														<span class="required">Shortened Descriptor</span>
														<i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-html="true" data-bs-content="&lt;div class='p-4 rounded bg-light'&gt; &lt;div class='d-flex flex-stack text-muted mb-4'&gt; &lt;i class='fas fa-university fs-3 me-3'&gt;&lt;/i&gt; &lt;div class='fw-bold'&gt;INCBANK **** 1245 STATEMENT&lt;/div&gt; &lt;/div&gt; &lt;div class='d-flex flex-stack fw-bold text-gray-600'&gt; &lt;div&gt;Amount&lt;/div&gt; &lt;div&gt;Transaction&lt;/div&gt; &lt;/div&gt; &lt;div class='separator separator-dashed my-2'&gt;&lt;/div&gt; &lt;div class='d-flex flex-stack text-dark fw-bolder mb-2'&gt; &lt;div&gt;USD345.00&lt;/div&gt; &lt;div&gt;KEENTHEMES*&lt;/div&gt; &lt;/div&gt; &lt;div class='d-flex flex-stack text-muted mb-2'&gt; &lt;div&gt;USD75.00&lt;/div&gt; &lt;div&gt;Hosting fee&lt;/div&gt; &lt;/div&gt; &lt;div class='d-flex flex-stack text-muted'&gt; &lt;div&gt;USD3,950.00&lt;/div&gt; &lt;div&gt;Payrol&lt;/div&gt; &lt;/div&gt; &lt;/div&gt;"></i>
													</label>
													{/** <!--end::Label--> */}
													{/** <!--begin::Input--> */}
													<input name="business_descriptor" class="form-control form-control-lg form-control-solid" value="KEENTHEMES" />
													{/** <!--end::Input--> */}
													{/** <!--begin::Hint--> */}
													<div class="form-text">Customers will see this shortened version of your statement descriptor</div>
													{/** <!--end::Hint--> */}
												</div>
												{/** <!--end::Input group--> */}
												{/** <!--begin::Input group--> */}
												<div class="fv-row mb-10">
													{/** <!--begin::Label--> */}
													<label class="form-label required">Corporation Type</label>
													{/** <!--end::Label--> */}
													{/** <!--begin::Input--> */}
													<select name="business_type" class="form-select form-select-lg form-select-solid" data-control="select2" data-placeholder="Select..." data-allow-clear="true" data-hide-search="true">
														<option></option>
														<option value="1">S Corporation</option>
														<option value="1">C Corporation</option>
														<option value="2">Sole Proprietorship</option>
														<option value="3">Non-profit</option>
														<option value="4">Limited Liability</option>
														<option value="5">General Partnership</option>
													</select>
													{/** <!--end::Input--> */}
												</div>
												{/** <!--end::Input group--> */}
												{/** <!--begin::Input group--> */}
												<div class="fv-row mb-10">
													{/** <!--end::Label--> */}
													<label class="form-label">Business Description</label>
													{/** <!--end::Label--> */}
													{/** <!--begin::Input--> */}
													<textarea name="business_description" class="form-control form-control-lg form-control-solid" rows="3"></textarea>
													{/** <!--end::Input--> */}
												</div>
												{/** <!--end::Input group--> */}
												{/** <!--begin::Input group--> */}
												<div class="fv-row mb-0">
													{/** <!--begin::Label--> */}
													<label class="fs-6 fw-bold form-label required">Contact Email</label>
													{/** <!--end::Label--> */}
													{/** <!--begin::Input--> */}
													<input name="business_email" class="form-control form-control-lg form-control-solid" value="corp@support.com" />
													{/** <!--end::Input--> */}
												</div>
												{/** <!--end::Input group--> */}
											</div>
											{/** <!--end::Wrapper--> */}
										</div>
										{/** <!--end::Step 3--> */}
										{/** <!--begin::Step 4--> */}
										<div data-kt-stepper-element="content">
											{/** <!--begin::Wrapper--> */}
											<div class="w-100">
												{/** <!--begin::Heading--> */}
												<div class="pb-10 pb-lg-15">
													{/** <!--begin::Title--> */}
													<h2 class="fw-bolder text-dark">Billing Details</h2>
													{/** <!--end::Title--> */}
													{/** <!--begin::Notice--> */}
													<div class="text-muted fw-bold fs-6">If you need more info, please check out
													<a href="#" class="text-primary fw-bolder">Help Page</a>.</div>
													{/** <!--end::Notice--> */}
												</div>
												{/** <!--end::Heading--> */}
												{/** <!--begin::Input group--> */}
												<div class="d-flex flex-column mb-7 fv-row">
													{/** <!--begin::Label--> */}
													<label class="d-flex align-items-center fs-6 fw-bold form-label mb-2">
														<span class="required">Name On Card</span>
														<i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a card holder's name"></i>
													</label>
													{/** <!--end::Label--> */}
													<input type="text" class="form-control form-control-solid" placeholder="" name="card_name" value="Max Doe" />
												</div>
												{/** <!--end::Input group--> */}
												{/** <!--begin::Input group--> */}
												<div class="d-flex flex-column mb-7 fv-row">
													{/** <!--begin::Label--> */}
													<label class="required fs-6 fw-bold form-label mb-2">Card Number</label>
													{/** <!--end::Label--> */}
													{/** <!--begin::Input wrapper--> */}
													<div class="position-relative">
														{/** <!--begin::Input--> */}
														<input type="text" class="form-control form-control-solid" placeholder="Enter card number" name="card_number" value="4111 1111 1111 1111" />
														{/** <!--end::Input--> */}
														{/** <!--begin::Card logos--> */}
														<div class="position-absolute translate-middle-y top-50 end-0 me-5">
															<img src="assets/media/svg/card-logos/visa.svg" alt="" class="h-25px" />
															<img src="assets/media/svg/card-logos/mastercard.svg" alt="" class="h-25px" />
															<img src="assets/media/svg/card-logos/american-express.svg" alt="" class="h-25px" />
														</div>
														{/** <!--end::Card logos--> */}
													</div>
													{/** <!--end::Input wrapper--> */}
												</div>
												{/** <!--end::Input group--> */}
												{/** <!--begin::Input group--> */}
												<div class="row mb-10">
													{/** <!--begin::Col--> */}
													<div class="col-md-8 fv-row">
														{/** <!--begin::Label--> */}
														<label class="required fs-6 fw-bold form-label mb-2">Expiration Date</label>
														{/** <!--end::Label--> */}
														{/** <!--begin::Row--> */}
														<div class="row fv-row">
															{/** <!--begin::Col--> */}
															<div class="col-6">
																<select name="card_expiry_month" class="form-select form-select-solid" data-control="select2" data-hide-search="true" data-placeholder="Month">
																	<option></option>
																	<option value="1">1</option>
																	<option value="2">2</option>
																	<option value="3">3</option>
																	<option value="4">4</option>
																	<option value="5">5</option>
																	<option value="6">6</option>
																	<option value="7">7</option>
																	<option value="8">8</option>
																	<option value="9">9</option>
																	<option value="10">10</option>
																	<option value="11">11</option>
																	<option value="12">12</option>
																</select>
															</div>
															{/** <!--end::Col--> */}
															{/** <!--begin::Col--> */}
															<div class="col-6">
																<select name="card_expiry_year" class="form-select form-select-solid" data-control="select2" data-hide-search="true" data-placeholder="Year">
																	<option></option>
																	<option value="2021">2021</option>
																	<option value="2022">2022</option>
																	<option value="2023">2023</option>
																	<option value="2024">2024</option>
																	<option value="2025">2025</option>
																	<option value="2026">2026</option>
																	<option value="2027">2027</option>
																	<option value="2028">2028</option>
																	<option value="2029">2029</option>
																	<option value="2030">2030</option>
																	<option value="2031">2031</option>
																</select>
															</div>
															{/** <!--end::Col--> */}
														</div>
														{/** <!--end::Row--> */}
													</div>
													{/** <!--end::Col--> */}
													{/** <!--begin::Col--> */}
													<div class="col-md-4 fv-row">
														{/** <!--begin::Label--> */}
														<label class="d-flex align-items-center fs-6 fw-bold form-label mb-2">
															<span class="required">CVV</span>
															<i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Enter a card CVV code"></i>
														</label>
														{/** <!--end::Label--> */}
														{/** <!--begin::Input wrapper--> */}
														<div class="position-relative">
															{/** <!--begin::Input--> */}
															<input type="text" class="form-control form-control-solid" minlength="3" maxlength="4" placeholder="CVV" name="card_cvv" />
															{/** <!--end::Input--> */}
															{/** <!--begin::CVV icon--> */}
															<div class="position-absolute translate-middle-y top-50 end-0 me-3">
																{/** <!--begin::Svg Icon | path: icons/duotune/finance/fin002.svg--> */}
																<span class="svg-icon svg-icon-2hx">
																	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																		<path d="M22 7H2V11H22V7Z" fill="black" />
																		<path opacity="0.3" d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19ZM14 14C14 13.4 13.6 13 13 13H5C4.4 13 4 13.4 4 14C4 14.6 4.4 15 5 15H13C13.6 15 14 14.6 14 14ZM16 15.5C16 16.3 16.7 17 17.5 17H18.5C19.3 17 20 16.3 20 15.5C20 14.7 19.3 14 18.5 14H17.5C16.7 14 16 14.7 16 15.5Z" fill="black" />
																	</svg>
																</span>
																{/** <!--end::Svg Icon--> */}
															</div>
															{/** <!--end::CVV icon--> */}
														</div>
														{/** <!--end::Input wrapper--> */}
													</div>
													{/** <!--end::Col--> */}
												</div>
												{/** <!--end::Input group--> */}
												{/** <!--begin::Input group--> */}
												<div class="d-flex flex-stack">
													{/** <!--begin::Label--> */}
													<div class="me-5">
														<label class="fs-6 fw-bold form-label">Save Card for further billing?</label>
														<div class="fs-7 fw-bold text-muted">If you need more info, please check budget planning</div>
													</div>
													{/** <!--end::Label--> */}
													{/** <!--begin::Switch--> */}
													<label class="form-check form-switch form-check-custom form-check-solid">
														<input class="form-check-input" type="checkbox" value="1" checked="checked" />
														<span class="form-check-label fw-bold text-muted">Save Card</span>
													</label>
													{/** <!--end::Switch--> */}
												</div>
												{/** <!--end::Input group--> */}
											</div>
											{/** <!--end::Wrapper--> */}
										</div>
										{/** <!--end::Step 4--> */}
										{/** <!--begin::Step 5--> */}
										<div data-kt-stepper-element="content">
											{/** <!--begin::Wrapper--> */}
											<div class="w-100">
												{/** <!--begin::Heading--> */}
												<div class="pb-8 pb-lg-10">
													{/** <!--begin::Title--> */}
													<h2 class="fw-bolder text-dark">Your Are Done!</h2>
													{/** <!--end::Title--> */}
													{/** <!--begin::Notice--> */}
													<div class="text-muted fw-bold fs-6">If you need more info, please
													<a href="../../demo7/dist/authentication/sign-in/basic.html" class="link-primary fw-bolder">Sign In</a>.</div>
													{/** <!--end::Notice--> */}
												</div>
												{/** <!--end::Heading--> */}
												{/** <!--begin::Body--> */}
												<div class="mb-0">
													{/** <!--begin::Text--> */}
													<div class="fs-6 text-gray-600 mb-5">Writing headlines for blog posts is as much an art as it is a science and probably warrants its own post, but for all advise is with what works for your great &amp; amazing audience.</div>
													{/** <!--end::Text--> */}
													{/** <!--begin::Alert--> */}
													{/** <!--begin::Notice--> */}
													<div class="notice d-flex bg-light-warning rounded border-warning border border-dashed p-6">
														{/** <!--begin::Icon--> */}
														{/** <!--begin::Svg Icon | path: icons/duotune/general/gen044.svg--> */}
														<span class="svg-icon svg-icon-2tx svg-icon-warning me-4">
															<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="black" />
																<rect x="11" y="14" width="7" height="2" rx="1" transform="rotate(-90 11 14)" fill="black" />
																<rect x="11" y="17" width="2" height="2" rx="1" transform="rotate(-90 11 17)" fill="black" />
															</svg>
														</span>
														{/** <!--end::Svg Icon--> */}
														{/** <!--end::Icon--> */}
														{/** <!--begin::Wrapper--> */}
														<div class="d-flex flex-stack flex-grow-1">
															{/** <!--begin::Content--> */}
															<div class="fw-bold">
																<h4 class="text-gray-900 fw-bolder">We need your attention!</h4>
																<div class="fs-6 text-gray-700">To start using great tools, please, please
																<a href="#" class="fw-bolder">Create Team Platform</a></div>
															</div>
															{/** <!--end::Content--> */}
														</div>
														{/** <!--end::Wrapper--> */}
													</div>
													{/** <!--end::Notice--> */}
													{/** <!--end::Alert--> */}
												</div>
												{/** <!--end::Body--> */}
											</div>
											{/** <!--end::Wrapper--> */}
										</div>
										{/** <!--end::Step 5--> */}
										{/** <!--begin::Actions--> */}
										<div class="d-flex flex-stack pt-20">
											{/** <!--begin::Wrapper--> */}
											<div class="mr-2">
												<button type="button" class="btn btn-lg btn-light-primary me-3" data-kt-stepper-action="previous">
												{/** <!--begin::Svg Icon | path: icons/duotune/arrows/arr063.svg--> */}
												<span class="svg-icon svg-icon-4 me-1">
													<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
														<rect opacity="0.5" x="6" y="11" width="13" height="2" rx="1" fill="black" />
														<path d="M8.56569 11.4343L12.75 7.25C13.1642 6.83579 13.1642 6.16421 12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75L5.70711 11.2929C5.31658 11.6834 5.31658 12.3166 5.70711 12.7071L11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25C13.1642 17.8358 13.1642 17.1642 12.75 16.75L8.56569 12.5657C8.25327 12.2533 8.25327 11.7467 8.56569 11.4343Z" fill="black" />
													</svg>
												</span>
												{/** <!--end::Svg Icon--> */}Back</button>
											</div>
											{/** <!--end::Wrapper--> */}
											{/** <!--begin::Wrapper--> */}
											<div>
												<button type="button" class="btn btn-lg btn-primary me-3" data-kt-stepper-action="submit">
													<span class="indicator-label">Submit
													{/** <!--begin::Svg Icon | path: icons/duotune/arrows/arr064.svg--> */}
													<span class="svg-icon svg-icon-3 ms-2 me-0">
														<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
															<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
															<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
														</svg>
													</span>
													{/** <!--end::Svg Icon--> */}</span>
													<span class="indicator-progress">Please wait...
													<span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
												</button>
												<button type="button" class="btn btn-lg btn-primary" data-kt-stepper-action="next">Continue
												{/** <!--begin::Svg Icon | path: icons/duotune/arrows/arr064.svg--> */}
												<span class="svg-icon svg-icon-4 ms-1 me-0">
													<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
														<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
														<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
													</svg>
												</span>
												{/** <!--end::Svg Icon--> */}</button>
											</div>
											{/** <!--end::Wrapper--> */}
										</div>
										{/** <!--end::Actions--> */}
									</form>
									{/** <!--end::Form--> */}
								</div>
								{/** <!--end::Content--> */}
							</div>
							{/** <!--end::Stepper--> */}

							
         </>
     )



}