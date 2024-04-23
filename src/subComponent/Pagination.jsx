/* eslint-disable react/prop-types */
import { useNavigate, useParams } from 'react-router-dom';

const Pagination = ({file,pageNu}) => {
  const navigate = useNavigate();
   const params = useParams();
   const { page } = params;
   let thePage;
   if(page){
    thePage = page;
   }else{
    thePage = 1;
   }
const pageCount = pageNu
  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });
   const handlePageChange = (pageNumber) => {
     navigate(`/${file}/${pageNumber}`);
   };
  if (pageCount < 2) return null;

  return (
    <div className="mt-16 mb-2 flex justify-end">
      <div className="join">
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            var prevPage = parseInt(thePage) - 1;
            if (prevPage < 1) prevPage = pageCount;
            handlePageChange(prevPage);
          }}
        >
          prev
        </button>
        {pages.map((pn) => {
          return (
            <button
              key={pn}
              onClick={() => handlePageChange(pn)}
              className={`btn btn-xs join-item sm:btn-md border-none ${
                pn === thePage ? 'bg-base-300 border-base-300' : ''
              }`}
            >
              {pn}
            </button>
          );
        })}
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            let nextPage = parseInt(thePage) + 1;
            if (nextPage > pageCount){ nextPage = 1;}
            handlePageChange(nextPage);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
