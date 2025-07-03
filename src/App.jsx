import React from "react";
import Navbar from "./component/Navbar";
import { FiSearch } from "react-icons/fi";
import { CiCirclePlus } from "react-icons/ci";
import { useState } from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getDocs, collection, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import Contactcard from "./component/Contactcard";
import Modal from "./component/Modal";
import AddandUpdate from "./component/AddandUpdate";
import UseDisclouse from "./hooks/UseDisclouse";
import Notfoundcontact from "./component/Notfoundcontact";

const App = () => {
  const [contacts, setcontacts] = useState([]);
  const { isOpen, onClose, onOpen } = UseDisclouse();

  useEffect(() => {
    const getcontacts = async () => {
      try {
        const contactsref = collection(db, "contacts");

        onSnapshot(contactsref, (snapshot) => {
          const contactlist = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setcontacts(contactlist);
          return contactlist;
        });
      } catch (error) {}
    };

    getcontacts();
  }, []);

  const filtercontacts = (e) => {
    const value = e.target.value;
    const contactsref = collection(db, "contacts");

    onSnapshot(contactsref, (snapshot) => {
      const contactlist = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      const filteredcontacts = contactlist.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );
      setcontacts(filteredcontacts);
      return filteredcontacts;
    });
  };

  return (
    <>
      <div className="mx-auto max-w-[370px] px-4">
        <Navbar />
        <div className="flex gap-2">
          <div className=" relative flex items-center flex-grow">
            <FiSearch className="text-3xl text-white m-1 absolute" />
            <input
              onChange={filtercontacts}
              type="text"
              className=" flex-grow w-full px-2 bg-transparent border-white rounded-md border h-10 text-white pl-9"
            />
          </div>
          <CiCirclePlus
            onClick={onOpen}
            className="text-5xl cursor-pointer text-white"
          />
        </div>
        <div className="mt-4 flex flex-col gap-3">
          {contacts.length <= 0 ? <Notfoundcontact/> : contacts.map((contact) => (
            <Contactcard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
      <AddandUpdate onClose={onClose} isOpen={isOpen} />
      <ToastContainer position="bottom-center" />
    </>
  );
};

export default App;
