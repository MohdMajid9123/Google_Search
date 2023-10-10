import React from "react";

const SearchedItemTemplate = ({ data }) => {
  function createMarkup(html) {
    return { __html: html };
  }
  return (
    <>
      <div className="flex flex-col py-3 max-w-[700px">
        <div
          onClick={() => {
            window.open(data.link);
          }}
          className="group cursor-pointer"
        >
          <div className=" text-sm truncate text-[#202124] ">
            {data.formattedUrl}
          </div>
          <div className="group-hover:underline text-xl text-[#1a0dab] pt2">
            {data.title}
          </div>
        </div>
        <div
          className="text-sm text-[#4d5156] leading-6 pt-1"
          dangerouslySetInnerHTML={createMarkup(data.htmlSnippet)}
        />
      </div>
    </>
  );
};

export default SearchedItemTemplate;

// import React from "react";

// const SearchedItemTemplate = () => {
//   return <div>Searched Item Template</div>;
// };

// export default SearchedItemTemplate;
