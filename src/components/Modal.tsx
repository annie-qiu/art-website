import "../styles/global.scss";
import React, { useState } from "react";

interface ModalProps {
  children: JSX.Element;
}

const Modal = (props: ModalProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  function toggleModal() {
    setIsOpen(!isOpen);
    console.log("click");
  }

  return (
    <div >
      <button onClick={toggleModal} className="cursor-zoom-in hidden sm:block" type="button">{props.children}</button>
      <div className="block sm:hidden">
        {props.children}
      </div>

      <div onClick={() => setIsOpen(false)} className={`z-0 fixed inset-0 bg-white ${isOpen ? "block" : "hidden"}`}></div>
      
      <div onClick={() => setIsOpen(false)} className="z-10 fixed top-0 left-0 w-full">
          {isOpen &&
          <div>
            <div className="fixed p-6 right-0 cursor-pointer text-xl text-dark-gray" onClick={() => setIsOpen(false)}>x</div>
            <div className="p-10">
              {props.children}
            </div>
           </div>
          }
      </div>
    </div>
  )
}

export default Modal;