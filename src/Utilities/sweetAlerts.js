import Swal from "sweetalert2";

export const successMessage = (message) => {
  return Swal.fire({
    title: `${message}`,
    icon: "success",
    draggable: true,
    showConfirmButton: false,
    timer: 1500,
  });
};
export const errorMessage = (message) => {
  return Swal.fire({
    title: `${message}`,
    icon: "error",
    draggable: true,
  });
};

export const confirmDelete = () => {
  return Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
    }
  });
};
