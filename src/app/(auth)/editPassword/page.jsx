"use client";
import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const EditPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Formik initial values
  const initialValues = {
    email,
    password,
  };

  // validation

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Must be a valid email").required("Required*"),
    password: Yup.string()
      .min(8, "Password must be atleat 8 character")
      .max(20)
      .required("Required*"),
  });

  return (
    <div className="w-full ">
      {/* Main container */}
      <div className="flex justify-center items-center p-2 relative top-[100px] ">
        <div className="w-[30vw]  p-4 rounded-md shadow-md relative  bg-[#5c5387]">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            <Form className="w-full flex flex-col items-center gap-7 ">
              {/* email section */}
              <div className="w-full relative">
                <label className="text-white font-semibold text-base">
                  Password
                </label>
                <Field
                  type="text"
                  name="email"
                  placeholder="Enter your Password"
                  className="w-full text-sm p-3 rounded-md outline-none border-b-2 font-poppins tracking-wide "
                />
              </div>
              {/* password section */}
              <div className="w-full relative">
                <label className="text-white font-semibold text-base">
                  Confirm Password
                </label>
                <Field
                  name="password"
                  placeholder="Your confirm Password"
                  className="w-full text-sm p-3 rounded-md outline-none border-b-2 font-poppins tracking-wide "
                />
              </div>

              {/* Login button */}
              <div className="p-5">
                <Field
                  className=" bg-gradient-to-r to-blue-200 from-[#5c52a9]  hover:bg-[#5c52a9] cursor-pointer w-36 p-2 h-[50px] rounded-md font-poppins text-sm tracking-wide text-white"
                  type="submit"
                  value="Edit Password"
                />
              </div>
            </Form>
          </Formik>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default EditPassword;
