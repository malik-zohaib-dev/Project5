import React from "react";
import Modal from "./Modal";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from 'yup'

const contactvalidation = Yup.object().shape({
    name: Yup.string().required("Name is Required"),
    email: Yup.string().email("Invalid Email").required("Email is Required")
})

const AddandUpdate = ({ isOpen, onClose, isUpdate, contact }) => {
  const addContact = async (contact) => {
    try {
      const contactref = collection(db, "contacts");
      onClose();
            toast.success("contact Added successfully");
      
      await addDoc(contactref, contact);
    } catch (error) {
      console.log(error);
    }
  };

  const updateContact = async (contact, id) => {
    try {
      const contactref = doc(db, "contacts", id);
      onClose();
            toast.success("contact Updated successfully");
      
      await updateDoc(contactref, contact);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {" "}
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
        validationSchema={contactvalidation}
          initialValues={
            isUpdate
              ? {
                  name: contact.name,
                  email: contact.email,
                }
              : {
                  name: "",
                  email: "",
                }
          }
          onSubmit={(values) => {
            isUpdate ? updateContact(values, contact.id) : addContact(values);
          }}
        >
          <Form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field name="name" className="h-10 border" />
           <div className="text-xs text-red-500">
            <ErrorMessage name="name" />
           </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Email</label>
              <Field name="email" className="h-10 border" />
           <div className="text-xs text-red-500">
            <ErrorMessage name="email" />
           </div>
            </div>

            <button
              type="submit"
              className="bg-orange-400 px-3 py-1.5 border self-end cursor-pointer"
            >
              {isUpdate ? "Update" : "Add"} Contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddandUpdate;
