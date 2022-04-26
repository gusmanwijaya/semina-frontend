import { toast } from "react-toastify";

const errorHandler = (error) => {
  if (error) {
    let message;
    if (error.response) {
      message = error.response?.data?.message;

      if (typeof message === "string") toast.error(message);

      return error;
    }
  }
};

export default errorHandler;
