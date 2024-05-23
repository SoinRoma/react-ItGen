function SymptomsList({symptoms, setCheckboxes}) {

  const handleChange = (id) => {
    setCheckboxes((prev) => {
      if (prev.includes(id)) return prev.filter(p => p !== id)
      else return [...prev, id]
    })
  }

  return (
    <div>
      {symptoms.length > 0 &&
        <div>
          <ul className="symptoms-block">
            {symptoms.map(symptom =>
              <li key={symptom.id}>
                <p>{symptom.name}</p>
                <input type="checkbox" onChange={() => handleChange(symptom.id)}/>
              </li>
            )}
          </ul>
        </div>
      }
    </div>
  )
}

export default SymptomsList