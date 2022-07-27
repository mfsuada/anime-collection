import React, { useState } from "react";
import { clearSelectedTemp, saveCollections } from "../../store/Collection";
import { ButtonSave } from "../../Style/Button";
import { ErrorLabel, Input } from "../../Style/Input";
import { Modal } from "../../Style/Modal";

const AddCollection = ({ show, onClose }) => {
    const [collectionName, setCollectionName] = useState("");
    const [error, setError] = useState(false);

    const submit = () => {
        setError(false)
        if (collectionName !== "") {
            saveCollections(collectionName);
            onClose()
            clearSelectedTemp();
        } else {
            setError(true)
        }
    }

    const setValue = (value) => {
        setCollectionName(value)
    }

    return (
        <Modal show={show}>
            <div className="content">
                Add Collection
                <span className="close" onClick={() => onClose()}>&times;</span>
                <Input type="text" id="collectionName" value={collectionName} name="collectionName" placeholder="Collection name.." onChange={(e) => setValue(e.target.value)}/>
                {error && (<ErrorLabel>Collection name cannot be empty</ErrorLabel>)}
                <ButtonSave onClick={() => submit()}>Save</ButtonSave>
            </div>
        </Modal>
    )
}

export default AddCollection;