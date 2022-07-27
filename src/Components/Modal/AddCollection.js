import React, { useState } from "react";
import { containSpecialChar } from "../../helper/manipulation";
import { clearSelectedTemp, saveCollections } from "../../store/Collection";
import { ButtonSave } from "../../Style/Button";
import { ErrorLabel, Input } from "../../Style/Input";
import { Modal } from "../../Style/Modal";

const AddCollection = ({ show, onClose }) => {
    const [collectionName, setCollectionName] = useState("");
    const [error, setError] = useState("");

    const submit = () => {
        setError(false)
        if (collectionName !== "") {
            if (containSpecialChar(collectionName)) {
                setError("Collection name cannot be special characters")
            } else {
                saveCollections(collectionName);
                onClose()
                clearSelectedTemp();
            }
        } else {
            setError("Collection name cannot be empty")
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
                {error !== "" && (<ErrorLabel>{error}</ErrorLabel>)}
                <ButtonSave onClick={() => submit()}>Save</ButtonSave>
            </div>
        </Modal>
    )
}

export default AddCollection;