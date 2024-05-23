import {useState} from "react";

function Result({checkboxes, setAnalyses}) {
  const [isLoader, setIsLoader]  = useState(false)
  async function getAnalyses() {
    setIsLoader(true)
    const response = await fetch('https://it-gen.altek.uz/api/v1/directory/analyses/list/', {
      method: 'POST',
      body: JSON.stringify({symptom_list: checkboxes}),
      headers: {
        "Content-Type": "application/json",
      },
    })
    if (response.ok) {
      const data = await response.json()
      setIsLoader(false)
      setAnalyses(data.analysis)
    }
  }

  return (
    <div className="result-block">
      {checkboxes.length > 0 &&
        <button onClick={() => getAnalyses()}>
          <span>Получить назначение</span>
          {isLoader &&
            <img src="./spinner.gif" width={25} alt="spinner"/>
          }
        </button>
      }
    </div>
  )
}

export default Result