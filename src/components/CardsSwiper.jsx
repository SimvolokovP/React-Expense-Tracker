import { Navigation, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Card from "./Card";

export default function CardsSwiper({
  cardsList,
  removeCard,
  changeTargetCard,
  openEditModal,
  setEditableCard
}) {
  return (
    <Swiper
      className="card-swiper"
      // install Swiper modules
      modules={[Navigation, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      onSlideChange={(swiper) =>
        changeTargetCard(cardsList[swiper.activeIndex])
      }
    >
      {cardsList.map((card) => (
        <SwiperSlide key={card.id} className="card-slide">
        <Card setEditableCard={setEditableCard} openEditModal={openEditModal} removeCard={removeCard} tempCard={card} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
