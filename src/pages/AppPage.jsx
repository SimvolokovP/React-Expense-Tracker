import { useState } from "react";
import AddPanel from "../components/AddPanel";
import CardsSwiper from "../components/CardsSwiper";
import AppButton from "../components/UI/AppButton/AppButton";
import AppModal from "../components/UI/AppModal/AppModal";
import AddCardForm from "../components/AddCardForm";
import { useLocalStorage } from "../utils/useLocalStorage";
import EditCardForm from "../components/EditCardForm";


export default function AppPage() {
  const [cards, setCards] = useLocalStorage("cards", []);

  const [modal, setModal] = useState(false);

  const [editModal, setEditModal] = useState(false);

  const [targetCard, setTargetCard] = useState(cards[0]);

  const [editableCard, setEditableCard] = useState({});

  function addNewCard(card) {
    setCards([...cards, card]);
    setModal(false);
  }

  function removeCard(id) {
    if (confirm("Remove this card?")) {
      setCards([...cards].filter((card) => card.id !== id));
    }
  }

  function editCard(updatedCard) {
    const updatedCards = cards.map((card) => {
      if (card.id === updatedCard.id) {
        return updatedCard;
      }
      return card;
    });
    setCards(updatedCards);
    setEditModal(false);
  }

  return (
    <section className="app-page">
      <AddPanel openModal={setModal} />
      {cards.length ? (
        <CardsSwiper
          setEditableCard={setEditableCard}
          openEditModal={setEditModal}
          changeTargetCard={setTargetCard}
          removeCard={removeCard}
          cardsList={cards}
        />
      ) : (
        <div className="app-page__not-found">Ничего не найдео!</div>
      )}
      <AppModal open={modal} setOpen={setModal}>
        <AddCardForm cards={cards} addNewCard={addNewCard}></AddCardForm>
      </AppModal>
      {editableCard ? (
        <AppModal open={editModal} setOpen={setEditModal}>
          <EditCardForm editCard={editCard} editableCard={editableCard} />
        </AppModal>
      ) : (
        <></>
      )}
      {/* {targetCard.isActive ? <TabsContent targetCard={targetCard}  /> : <div>Not Active</div>} */}
    </section>
  );
}
