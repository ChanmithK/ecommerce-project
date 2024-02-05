interface Amount {
  amount: number;
}

const FormattedPrice = ({ amount }: Amount) => {
  const formattedAmount = new Number(amount).toLocaleString("en-US", {
    style: "currency",
    currency: "LKR",
    maximumFractionDigits: 2,
  });
  return <span className="text-md ">{formattedAmount}</span>;
};

export default FormattedPrice;
