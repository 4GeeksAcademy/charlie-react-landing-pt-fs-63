import React from "react";
//<>
const Jumbotron = () => {
    return (
        <div className="row mx-xl-3 p-1">
            <div className="mx-auto col-xl-12 col-10 col-sm-11 p-5 my-2 text-bg-dark border rounded-3">
                <h2>Add borders</h2>
                <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
                <button className="btn btn-outline-secondary" type="button">Example button</button>
            </div>
        </div>
    )
}

export default Jumbotron