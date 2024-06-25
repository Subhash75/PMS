import CardRenderer from "./components/CardRenderer";
import useChecklist from "./useChecklist";

function CheckList2() {
  const { register, watch, activeStep, cardTitles, cardValues, handleFormSubmit, handleFormEdit } = useChecklist();

  return (
    <div className="p-5">
      <CardRenderer
        register={register}
        watch={watch}
        activeStep={activeStep}
        cardTitles={cardTitles}
        cardValues={cardValues}
        handleFormSubmit={handleFormSubmit}
        handleFormEdit={handleFormEdit}
      />
    </div>
  );
}

export default CheckList2;
