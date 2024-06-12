import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import mastercard from "../assets/mastercard-svgrepo-com.svg";
import visa from "../assets/visa-svgrepo-com.svg";
import amex from "../assets/amex-svgrepo-com.svg";

export default function Card({
  tempCard,
  removeCard,
  openEditModal,
  setEditableCard,
}) {
  const logos = [mastercard, visa, amex];

  function formatCurrency(amount) {
    return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  }

  console.log(tempCard);
  return (
    <>
      <div className="card">
        <div className="card__header">
          <div className="card__descr">
            <div className="card__status">
              <div
                style={
                  tempCard.isActive
                    ? { backgroundColor: "green" }
                    : { backgroundColor: "red" }
                }
              >
                {tempCard.isActive ? "A" : "N"}
              </div>
              {tempCard.isActive ? "Active" : "Not Active"}
            </div>
            <img
              className="card__logo"
              src={logos[tempCard.bank]}
              alt={tempCard.bank}
            />
          </div>
        </div>
        <div className="card__body">
          <span>Savings card: </span>
          <div className="card__sum">${formatCurrency(tempCard.sum)}</div>
        </div>
        <div className="card__actions">
          <button
            className="card__remove"
            onClick={() => removeCard(tempCard.id)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 6H5H21"
                stroke="#272727"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"
                stroke="#272727"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 11V17"
                stroke="#272727"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14 11V17"
                stroke="#272727"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button
            className="card__edit"
            onClick={() => {
              openEditModal(true);
              setEditableCard(tempCard);
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 3C17.2626 2.73735 17.5744 2.52901 17.9176 2.38687C18.2608 2.24473 18.6286 2.17157 19 2.17157C19.3714 2.17157 19.7392 2.24473 20.0824 2.38687C20.4256 2.52901 20.7374 2.73735 21 3C21.2626 3.26264 21.471 3.57444 21.6131 3.9176C21.7553 4.26077 21.8284 4.62856 21.8284 5C21.8284 5.37143 21.7553 5.73923 21.6131 6.08239C21.471 6.42555 21.2626 6.73735 21 7L7.5 20.5L2 22L3.5 16.5L17 3Z"
                stroke="#272727"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
