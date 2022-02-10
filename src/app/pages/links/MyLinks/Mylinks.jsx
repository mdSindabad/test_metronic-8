import paginationFactory, {
    PaginationProvider,
  } from "react-bootstrap-table2-paginator";
  import BootstrapTable from "react-bootstrap-table-next";
export const MyLinks=()=>{
    const [paginationOptions, setPaginationOptions] = useState({
        custom: true,
        totalSize: 11,
        sizePerPageList: [
          { text: "3", value: 3 },
          { text: "5", value: 5 },
          { text: "10", value: 10 },
        ],
        sizePerPage: 3,
        page: 1,
      });
      const _paginationOptions = {
        ...paginationOptions,
       custom:true,
       totalSize: tags.length,
       sizePerPageList: [
         { text: "3", value: 3 },
         { text: "5", value: 5 },
         { text: "10", value: 10 },
       ],
       sizePerPage: 5,
       page: 1,
      
     };
     const defaultSorted = [
        {
          dataField: "title",
          order: "asc",
        },
      ];


  return(
   <>
   
   </>
    
  )



}