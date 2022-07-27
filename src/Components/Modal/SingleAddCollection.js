import React, { useState } from "react";
import { ButtonSave } from "../../Style/Button";
import { Input } from "../../Style/Input";
import { Modal } from "../../Style/Modal";

const SingleAddCollection = ({ show, onClose, submit }) => {
    const [collectionName, setCollectionName] = useState("");

    const setValue = (value) => {
        setCollectionName(value)
    }

    return (
        <Modal show={show}>
            <div className="content">
                Add Collection
                <span className="close" onClick={() => onClose()}>&times;</span>
                <Input type="text" id="collectionName" value={collectionName} name="collectionName" placeholder="Collection name.." onChange={(e) => setValue(e.target.value)}/>
                <ButtonSave onClick={() => submit(collectionName)}>Save</ButtonSave>
            </div>
        </Modal>
    )
}

export default SingleAddCollection;