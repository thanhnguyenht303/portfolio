"use client";
import { useRef } from "react";
import { useCloseModal } from "./useCloseModal";


export const Modal = ({
    isOpen,
    onClose,
    children
}: {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}) => {

    const modalRef = useRef<HTMLDivElement>(null);

    useCloseModal(modalRef, isOpen, onClose);

    if(!isOpen){
        return null;
    };



    return (
        <div className="modal" ref={modalRef}>
            {children}
        </div>
    )
}