import SymptomsList from "./SymptomsList.jsx"

function StepsList({steps, setCheckboxes}) {

  return (
    <div>
      {steps.length > 0 &&
        <div className="steps-wrapper">
          <h3 className="category-title">Категория Симптомов</h3>
          <div className="steps-block">
            {steps.map(step =>
              <div className="step-block" key={step.id}>
                <h5>{step.name}</h5>
                <SymptomsList symptoms={step.symptoms} setCheckboxes={setCheckboxes}/>
              </div>
            )}
          </div>
        </div>
      }
    </div>
  )
}

export default StepsList