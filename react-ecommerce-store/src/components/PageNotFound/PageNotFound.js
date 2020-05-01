import React from 'react';

const PageNotFound = (props) => {
  const { location: { pathname } } = props;
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
            <h1 className="display-3">404</h1>
            <h3>The requested url <span className="text-danger">{pathname}</span> was not found</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default PageNotFound;