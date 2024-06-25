function CardShrinkMode({ title }: { title: string }) {
  return (
    <div
      key={title}
      className="rounded-md px-5 py-7 mt-3 mb-5 shadow-customBoxShadow"
    >
      <p  className="text-primary font-Montserrat tracking-wider font-semibold text-2xl">{title}</p>
    </div>
  );
}

export default CardShrinkMode;
