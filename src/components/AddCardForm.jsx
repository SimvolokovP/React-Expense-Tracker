import { useState } from "react";
import AppSelect from "./UI/AppSelect/AppSelect";
import AppButton from "./UI/AppButton/AppButton";

export default function AddCardForm({ addNewCard, cards }) {
  const [form, setForm] = useState({
    number: "",
    name: "",
    bank: -1,
    isActive: true,
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (form.bank !== -1) {
          const newId =
          cards.length > 0 ? cards[cards.length - 1].id + 1 : 0;
          console.log(form);
          addNewCard({ ...form, sum: 0, id: newId });
        } else {
          alert("Input your current bank!");
        }
      }}
      className="add-form"
    >
      <h3 className="add-form__title">Add new Card!</h3>
      <label className="add-form__label">
        <span>Enter a number of new card</span>
        <input
          value={form.number}
          onChange={(e) => setForm({ ...form, number: e.target.value })}
          className="add-form__input add-form__input--number"
          placeholder="0000000000000"
          type="text"
        />
      </label>
      <label className="add-form__label">
        <span>Enter a your name</span>
        <input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="add-form__input add-form__input--name"
          placeholder="ivanov ivan ivanovich"
          type="text"
        />
      </label>
      <label className="add-form__label">
        <AppSelect
          selectOption={(e) => setForm({ ...form, bank: e })}
          defaultOption={"Input your bank"}
          options={[
            { title: "mastercard", value: 0 },
            { title: "visa", value: 1 },
            { title: "amercian express", value: 2 },
          ]}
        />
      </label>
      <label className="add-form__label">
        <AppSelect
          selectOption={(e) => setForm({ ...form, isActive: e })}
          defaultOption={"Active"}
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
