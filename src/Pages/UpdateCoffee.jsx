import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import { successMessage } from "../Utilities/sweetAlerts";

const UpdateCoffee = () => {
  const { id } = useParams();
  const navigate = useNavigate("/");
  const { name, chef, supplier, test, category, details, photoUrl, price } =
    useLoaderData();
  console.log(id);
  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedData = Object.fromEntries(formData.entries());
    console.log(updatedData);

    fetch(`http://localhost:3000/coffees/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          successMessage("Details updated successfully").then(() =>
            navigate("/")
          );
        }
      });
  };
  return (
    <div>
      <div className="p-12 text-center space-y-4">
        <h1 className="text-6xl font-bold">Update Coffee Details</h1>
      </div>
      <form onSubmit={handleUpdateCoffee}>
        <div className="card-body grid grid-cols-1 md:grid-cols-2">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              className="input w-full"
              name="name"
              defaultValue={name}
              placeholder="Enter Coffee name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Chef</label>
            <input
              type="text"
              className="input w-full"
              name="chef"
              defaultValue={chef}
              placeholder="Enter coffee chef"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Supplier</label>
            <input
              type="text"
              className="input w-full"
              name="supplier"
              defaultValue={supplier}
              placeholder="Enter supplier name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Test</label>
            <input
              type="text"
              className="input w-full"
              name="test"
              defaultValue={test}
              placeholder="Enter coffee test"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Category</label>
            <input
              type="text"
              className="input w-full"
              name="category"
              defaultValue={category}
              placeholder="Enter coffee category"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Details</label>
            <input
              type="text"
              className="input w-full"
              name="details"
              defaultValue={details}
              placeholder="Enter coffee details"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Price</label>
            <input
              type="text"
              className="input w-full"
              name="price"
              defaultValue={price}
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
            defaultValue={photoUrl}
            placeholder="Enter coffee Photo URL"
          />
          <input
            type="submit"
            className="btn w-full"
            name="details"
            value="Update"
          />
        </fieldset>
      </form>
    </div>
  );
};

export default UpdateCoffee;
