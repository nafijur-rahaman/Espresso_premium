import React from 'react';

const UpdateCoffee = () => {

    const submitForm = e=>{
        e.preventDefault();
    }

    return (
    <div>
      <div className="text-center  bg-[#F4F3F0] p-10 mt-20">
        <h1 className="text-3xl ">Update  Coffee</h1>
      </div>

      <form onSubmit={submitForm} className="p-20 bg-[#F4F3F0]">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <legend className="fieldset-legend">Name</legend>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Enter Coffee Name"
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <legend className="fieldset-legend">Quantity</legend>
            <input
              type="text"
              name="quantity"
              className="input w-full"
              placeholder="Enter Quantity"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <legend className="fieldset-legend">Supplier</legend>
            <input
              type="text"
              name="supplier"
              className="input w-full"
              placeholder="Enter Supplier Name"
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <legend className="fieldset-legend">Price</legend>
            <input
              type="text"
              name="price"
              className="input w-full"
              placeholder="Enter Taste Profile"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <legend className="fieldset-legend">Category</legend>
            <input
              type="text"
              name="category"
              className="input w-full"
              placeholder="Enter Category"
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <legend className="fieldset-legend">Details</legend>
            <input
              type="text"
              className="input w-full"
              name="details"
              placeholder="Enter Details"
            />
          </fieldset>
        </div>

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Photo</legend>
          <input
            type="text"
            className="input w-full"
            name="photo"
            placeholder="Enter Photo URL"
          />
        </fieldset>
        <button className="btn bg-[#D2B48C] border border-[#331A15] text-[#331A15] w-full mt-5">
          Add Coffee
        </button>
      </form>
    </div>
    );
};

export default UpdateCoffee;