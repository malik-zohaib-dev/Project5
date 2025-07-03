import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { IoIosContact, IoMdTrash } from "react-icons/io";
import { MdModeEditOutline } from "react-icons/md";
import { db } from "../config/firebase";
import UseDisclouse from "../hooks/UseDisclouse";
import AddandUpdate from "./AddandUpdate";
import { toast } from "react-toastify";

const Contactcard = ({ contact }) => {
const {isOpen, onClose, onOpen} = UseDisclouse();

  const deletecontact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("contact deleted successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <div
      key={contact.id}
      className=" rounded-lg p-2 items-center bg-yellow-100 flex justify-between ">
      <div className="flex gap-2">
        <IoIosContact className="text-4xl text-orange-300" />
        <div className="text-wite">
          <h2 className="font-medium">{contact.name}</h2>
          <p className="text-sm">{contact.email}</p>
          <p className="text-sm">{contact.contact}</p>
        </div>
      </div>
      <div className="flex text-3xl">
        <MdModeEditOutline onClick={onOpen} className="cursor-pointer" />
        <IoMdTrash
          onClick={() => deletecontact(contact.id)}
          className="text-orange-300 cursor-pointer"/>
      </div>
    </div>
  <AddandUpdate  isUpdate contact={contact} isOpen={isOpen} onClose={onClose} /> 
    </>
  );
};

export default Contactcard;
