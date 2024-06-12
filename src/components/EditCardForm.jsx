import { useEffect, useState } from "react";
import AppSelect from "./UI/AppSelect/AppSelect";
import AppButton from "./UI/AppButton/AppButton";

export default function EditCardForm({ editableCard, editCard }) {
  const [editForm, setEditForm] = useState({
    number: "",
    name: "",
    isActive: false,
  });

  useEffect(() => {
    if (editableCard) {
      setEditForm({
        number: editableCard.number || "",
        name: editableCard.name || "",
        isActive: editableCard.isActive || false
      });
    }
  }, [editableCard]);

  const handleInputChange = (field, value) => {
    setEditForm({ ...editForm, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editCard({...editForm, id: editableCard.id, sum: editableCard.sum, bank: editableCard.bank});
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <h3 className="add-form__title">Edit Card!</h3>
      <label className="add-form__label">
        <span>Enter a number of new card</span>
        <input
          value={editForm.number}
          onChange={(e) => handleInputChange("number", e.target.value)}
          className="add-form__input add-form__input--number"
          placeholder="0000000000000"
          type="text"
        />
      </label>
      <label className="add-form__label">
        <span>Enter your name</span>
        <input
          value={editForm.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
          className="add-form__input add-form__input--name"
          placeholder="ivanov ivan ivanovich"
          type="text"
        />
      </label>
      <label className="add-form__label">
        <AppSelect
          selectOption={(e) => handleInputChange("isActive", e)}
          defaultOption={editForm.isActive ? "Active" : "Not Active"}
          options={[
            { title: "Active", value: true },
            { title: "Not Active", value: false },
          ]}
        />
      </label>
      <AppButton type="submit">Submit</AppButton>
    </form>
  );
}
