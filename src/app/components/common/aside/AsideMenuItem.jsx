export const AsideMenuItem = ({title,icon}) => {
  return (
    <>
      {/**begin::Nav item--> */}
      <li
        class="nav-item mb-2"
        data-bs-toggle="tooltip"
        data-bs-trigger="hover"
        data-bs-placement="right"
        data-bs-dismiss="click"
        title={title}
      >
        {/**begin::Nav link--> */}
        <a
          class="nav-link btn btn-icon btn-active-color-primary btn-color-gray-400 btn-active-light active"
         
        >
            {/**
             *  data-bs-toggle="tab"
             href="#kt_aside_nav_tab_projects"
             */}
          {/**begin::Svg Icon | path: icons/duotune/general/gen025.svg--> */}
          <span class="svg-icon svg-icon-2x">
            {icon}
          </span>
          {/**end::Svg Icon--> */}
        </a>
        {/**end::Nav link--> */}
      </li>
      {/**end::Nav item--> */}
    </>
  );
};
