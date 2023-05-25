import React from 'react'
import ReactModal from 'react-modal'
export default function MyModal({isOpen}) {
    
  return (
    <ReactModal isOpen={isOpen}>
        <div>모달입니다</div>
    </ReactModal>
  )
}
