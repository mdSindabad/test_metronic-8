export const Content = (props) => {
  return (
    <>
      {/** <!--begin::Content--> */}
      <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
        {/** <!--begin::Container--> */}
        <div class="container-xxl" id="kt_content_container">
            {props.children}
        </div>
        {/** <!--end::Container--> */}
      </div>
      {/** <!--end::Content--> */}
    </>
  );
};
