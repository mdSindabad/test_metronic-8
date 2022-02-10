import { ActivityLogDrawer } from "./ActivityLogDrawer";
import { ChatDrawer } from "./ChatDrawer";
import { Content } from "./Content";
import { CreateAppModal } from "./CreateAppModal";
import { CreateInviteModal } from "./CreateInviteModal";
import { ExploreButton, ExploreDrawer } from "./Explore";
import { Footer } from "./Footer";
import { NavBar } from "./NavBar";
import { ScrollTop } from "./ScrollTop";
import { TopBar } from "./TopBar";

export const Layout = (props) => {
  return (
    <>
      <div class="d-flex flex-column flex-root">
        <div class="page d-flex flex-row flex-column-fluid">
           <NavBar/>
      {/** <!--begin::Wrapper--> */}
      <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
        <TopBar/>
        <Content>
            {props.children}
        </Content>
        <Footer/>
      </div>
      {/** <!--end::Wrapper--> */}
       
          


        </div>
      </div>    
       <ActivityLogDrawer/>
       <ChatDrawer/>
       <ExploreButton/>
       <ExploreDrawer/>
       <CreateInviteModal/>
       <CreateAppModal/>
       <ScrollTop/>
    </>
  );
};
