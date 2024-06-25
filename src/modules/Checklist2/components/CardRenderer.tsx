import { CardRendererTypes } from "../checklist.types";
import CardEditMode from "./CardEditMode";
import CardShrinkMode from "./CardShrinkMode";
import CardSummaryMode from "./CardSummaryMode";

function CardRenderer({
  cardTitles,
  cardValues,
  register,
  watch,
  activeStep,
  handleFormSubmit,
  handleFormEdit
}: CardRendererTypes) {
  return cardTitles.map((title: string, index: number) => {
    if (activeStep.isActive[index]) {
      return (
        <CardEditMode
          title={title}
          index={index}
          register={register}
          cardValues={cardValues}
          handleFormSubmit={handleFormSubmit}
        />
      );
    } else if (activeStep.isComplete[index]) {
      return (
        <CardSummaryMode
          key={title}
          index={index}
          title={title}
          cardValues={cardValues}
          watch={watch}
          handleFormEdit={handleFormEdit}
        />
      );
    }
    return <CardShrinkMode key={title} title={title} />;
  });
}

export default CardRenderer;
