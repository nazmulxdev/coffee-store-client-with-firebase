import { FaArrowLeft, FaCoffee } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const coffee = useLoaderData();
  console.log(coffee);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link to="/" className="flex items-center gap-2 text-primary mb-6">
        <FaArrowLeft />
        <span className="font-medium">Back to Home</span>
      </Link>

      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="w-full lg:w-1/2">
          <img
            src={coffee.photoUrl}
            alt={coffee.name}
            className="object-cover h-full w-full rounded-l-xl"
          />
        </figure>
        <div className="card-body w-full lg:w-1/2">
          <h2 className="card-title text-2xl font-bold">
            <FaCoffee className="text-primary mr-2" />
            {coffee.name}
          </h2>
          <p>
            <span className="font-semibold">Chef:</span> {coffee.chef}
          </p>
          <p>
            <span className="font-semibold">Supplier:</span> {coffee.supplier}
          </p>
          <p>
            <span className="font-semibold">Taste:</span> {coffee.test}
          </p>
          <p>
            <span className="font-semibold">Category:</span> {coffee.category}
          </p>
          <p>
            <span className="font-semibold">Price:</span> {coffee.price} BDT
          </p>
          <p>
            <span className="font-semibold">Details:</span> {coffee.details}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
