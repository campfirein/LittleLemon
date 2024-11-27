import { useState } from "react";

const GiftCard = () => {
  const [giftCard, setGiftCard] = useState({
    text: "Free dinner for 4 guests.",
    valid: true,
    instructions: "To use your coupon, click the button below.",
  });

  const spendGiftCard = () => {
    setGiftCard((prevState) => ({
      ...prevState,
      text: "Your coupon has been used.",
      valid: false,
      instructions: "Please visit our restaurant to renew your gift card.",
    }));
  };

  return (
    <div>
      <h1>Gift Card Page</h1>
      <p>Customer: Jennifer Smith</p>
      <p>{giftCard.text}</p>
      <p>{giftCard.instructions}</p>
      {giftCard.valid && <button onClick={spendGiftCard}>Spend Gift Card</button>}
    </div>
  );
};

export default GiftCard;