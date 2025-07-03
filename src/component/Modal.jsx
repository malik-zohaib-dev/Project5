import { IoClose } from "react-icons/io5";
import {createPortal} from "react-dom"

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <div className=" place-items-center grid h-screen absolute top-0 z-40 w-screen backdrop-blur">
          <div className=" m-auto z-50 relative p-4 min-h-[200px] min-w-[70%] bg-white">
            <div className="flex justify-end">
              <IoClose
                onClick={onClose}
                className="text-2xl self-end cursor-pointer"
              />
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  ,document.getElementById("modal-root"));
};

export default Modal;
