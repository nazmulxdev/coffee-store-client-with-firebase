import React from "react";
import { successMessage } from "../Utilities/sweetAlerts";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffeeData = Object.fromEntries(formData.entries());

    fetch("https://coffee-store-server-bice-seven.vercel.app/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffeeData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          form.reset();
          successMessage("Coffee added successfully");
        }
      });

    // send data to the server
  };
  return (
    <div className="p-24">
      <div className="p-12 text-center space-y-4">
        <h1 className="text-6xl font-bold">Add New Coffee</h1>
        <p>
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      <div>
        <form onSubmit={handleAddCoffee}>
          <div className="card-body grid grid-cols-1 md:grid-cols-2">
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                className="input w-full"
                name="name"
                placeholder="Enter Coffee name"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label">Chef</label>
              <input
                type="text"
                className="input w-full"
                name="chef"
                placeholder="Enter coffee chef"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label">Supplier</label>
              <input
                type="text"
                className="input w-full"
                name="supplier"
                placeholder="Enter supplier name"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label">Test</label>
              <input
                type="text"
                className="input w-full"
                name="test"
                placeholder="Enter coffee test"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label">Category</label>
              <input
                type="text"
                className="input w-full"
                name="category"
                placeholder="Enter coffee category"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label">Details</label>
              <input
                type="text"
                className="input w-full"
                name="details"
                placeholder="Enter coffee details"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label">Price</label>
              <input
                type="text"
                className="input w-full"
                name="price"
                placeholder="Enter coffee price"
              />
            </fieldset>
          </div>
          <fieldset className="fieldset card-body space-y-4">
            <label className="label">Photo URL</label>
            <input
              type="text"
              className="input w-full"
              name="photoUrl"
              placeholder="Enter coffee Photo URL"
            />
            <input
              type="submit"
              className="btn w-full"
              name="details"
              value="Add coffee"
            />
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
