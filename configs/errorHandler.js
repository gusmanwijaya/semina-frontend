import { toast } from "react-toastify";

export default function errorHandler(error) {
  if (error) {
    let message;
    if (error.response) {
      message = error.response.data.message;

      if (typeof message === "string") toast.error(message);

      return error;
    }
  }
}
