"use client";

import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Don't render modal if it's not open

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose} // Close modal when clicking on backdrop
      ></div>

      {/* Modal Box */}
      <div className="relative bg-white p-6 rounded-lg shadow-xl max-w-3xl z-10">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✖ {/* Close icon */}
        </button>
        <div className="max-h-[80vh] overflow-y-auto mt-5">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
