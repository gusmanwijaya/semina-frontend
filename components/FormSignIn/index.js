import React, { useState } from "react";
import Button from "../Button";
import TextInput from "../TextInput";
import { useRouter } from "next/router";
import { postData } from "../../utils/fetchData";
import Cookies from "js-cookie";

const FormSignIn = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await postData("api/v1/participant/sign-in", form);
      Cookies.set("token", response.data?.data?.token);
      router.push("/");
    } catch (error) {
      console.log(error?.response);
    }
  };

  return (
    <form className="form-login d-flex flex-column mt-4 mt-md-0 p-30">
      <TextInput
        label={"Email"}
        type={"email"}
        name="email"
        value={form.email}
        placeholder={"semina@bwa.com"}
        onChange={handleChange}
      />

      <TextInput
        label={"Password (6 characters)"}
        type={"password"}
        name="password"
        value={form.password}
        placeholder="Type your password"
        onChange={handleChange}
      />

      <div className="d-grid mt-2 gap-4">
        <Button variant={"btn-green"} action={handleSubmit}>
          Sign In
        </Button>

        <Button action={() => router.push("/sign-up")} variant="btn-navy">
          Create New Account
        </Button>
      </div>
    </form>
  );
};

export default FormSignIn;
