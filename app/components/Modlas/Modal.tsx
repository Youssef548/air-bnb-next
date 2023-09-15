"use client";

import { useState, useCallback, useEffect } from "react";
import Button from "../Button";
import { IoMdClose } from "react-icons/io";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactNode;
  footer?: React.ReactNode;
  actionlabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionlabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) return;

    setShowModal(false);

    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSumbit = useCallback(() => {
    if (disabled) return;

    onSubmit();
  }, [onSubmit, disabled]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) return;

    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="
        flex 
        justify-center
        items-center
        fixed
        inset-0
        z-50
        outline-none
        focus:outline-none
        bg-neutral-800/70
        "
      >
        <div
          className="
          relative
          w-full
          md:w-4/6
          lg:w-3/6
          xl:w-2/5
          my-6
          mx-auto
          h-full
          lg:h-auto
          md:h-auto
    "
        >
          {/* Content */}
          <div
            className={`
          
            translate
            duration-300
            h-full
            ${showModal ? "opacity-100" : "opacity-0"}
            ${showModal ? "translate-y-0" : "translate-y-full"}
          `}
          >
            <div
              className="translate h-full lg:h-auto md:h-auto
            border-0 rounded-lg shadow-lg relative flex-col
            w-full bg-white outline-none focus:outline-none
            "
            >
              {/* {Header} */}
              <div
                className="flex items-center p-6 
              rounded-t justify-center realtive border-b-[1px]"
              >
                <button
                  className="p-1 border-0 hover:opacity-70
                transition
                absolute
                left-9
                
                "
                  onClick={handleClose}
                >
                  <IoMdClose size={18} />
                </button>
                <div className="text-lg font-semibold">{title}</div>
              </div>
              {/* Body */}
              <div className="realtive p-6 flex-auto">{body}</div>
              {/* Footer */}
              <div className="flex flex-col gap-2 p-6">
                <div
                  className="
                 flex
                 items-center
                 gap-4
                 w-full
                 "
                >
                  {secondaryActionLabel && secondaryAction && (
                    <Button
                      outline
                      disabled={disabled}
                      label={secondaryActionLabel}
                      onClick={handleSecondaryAction}
                    />
                  )}

                  <Button
                    disabled={disabled}
                    label={actionlabel}
                    onClick={handleSumbit}
                  />
                </div>
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
