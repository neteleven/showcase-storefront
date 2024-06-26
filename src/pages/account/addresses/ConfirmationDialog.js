import { MediumPrimaryButton } from 'components/Utilities/button'
import React from 'react'

const CloseButton = ({ onClick, className }) => {
  return (
    <button onClick={onClick} className={`p-2 hover:bg-black/[.15] ${className}`}>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.8539 0.145917C11.9005 0.192363 11.9374 0.247538 11.9626 0.308284C11.9878 0.369029 12.0008 0.43415 12.0008 0.499917C12.0008 0.565685 11.9878 0.630806 11.9626 0.691551C11.9374 0.752296 11.9005 0.807472 11.8539 0.853917L0.853917 11.8539C0.760031 11.9478 0.632693 12.0005 0.499917 12.0005C0.367142 12.0005 0.239804 11.9478 0.145917 11.8539C0.0520305 11.76 -0.000714302 11.6327 -0.000714302 11.4999C-0.000714302 11.3671 0.0520305 11.2398 0.145917 11.1459L11.1459 0.145917C11.1924 0.0993539 11.2475 0.0624112 11.3083 0.0372047C11.369 0.0119983 11.4341 -0.000976562 11.4999 -0.000976562C11.5657 -0.000976563 11.6308 0.0119983 11.6916 0.0372047C11.7523 0.0624112 11.8075 0.0993539 11.8539 0.145917Z"
          fill="#212529"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.145917 0.145917C0.0993539 0.192363 0.0624112 0.247538 0.0372047 0.308284C0.0119983 0.369029 -0.000976562 0.43415 -0.000976562 0.499917C-0.000976562 0.565685 0.0119983 0.630806 0.0372047 0.691551C0.0624112 0.752296 0.0993539 0.807472 0.145917 0.853917L11.1459 11.8539C11.2398 11.9478 11.3671 12.0005 11.4999 12.0005C11.6327 12.0005 11.76 11.9478 11.8539 11.8539C11.9478 11.76 12.0005 11.6327 12.0005 11.4999C12.0005 11.3671 11.9478 11.2398 11.8539 11.1459L0.853917 0.145917C0.807472 0.0993539 0.752296 0.0624112 0.691551 0.0372047C0.630806 0.0119983 0.565685 -0.000976562 0.499917 -0.000976562C0.43415 -0.000976562 0.369029 0.0119983 0.308284 0.0372047C0.247538 0.0624112 0.192363 0.0993539 0.145917 0.145917Z"
          fill="#212529"
        />
      </svg>
    </button>
  )
}

const ConfirmationDialog = ({ children, open, onAccept, onDecline, disabled }) => {
  if (open) {
    return (
      <div className="flex justify-center items-center w-screen h-screen bg-black/[0.5] fixed inset-x-0 inset-y-0 z-50">
        <div className="bg-white relative p-4">
          <CloseButton onClick={() => onDecline()} className="absolute right-0 top-0 mt-4 mr-4" />
          <div className="flex flex-col items-center justify-center mt-8">
            {children}
            <div className="flex mt-8">
              <button
                disabled={disabled}
                className="cta-secondary-md w-60 px-4 py-2 mr-2"
                // className="cta-secondary"
                onClick={onDecline}
              >
                NO
              </button>
              <MediumPrimaryButton
                disabled={disabled}
                title="YES"
                className="w-60 m-auto px-4 py-2 mr-2"
                // className="cta-primary"
                onClick={onAccept}
              />
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default ConfirmationDialog
