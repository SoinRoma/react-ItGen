function Result({checkboxes, setAnalyses}) {

  async function getAnalyses() {
    const response = await fetch('https://it-gen.altek.uz/api/v1/directory/analyses/list/', {
      method: 'POST',
      body: JSON.stringify({symptom_list: checkboxes}),
      headers: {
        "Content-Type": "application/json",
      },
    })
    if (response.ok) {
      const data = await response.json()
      setAnalyses(data.analysis)
    }
  }

  return (
    <div className="result-block">
      {checkboxes.length > 0 &&
        <button onClick={() => getAnalyses()}>Получить назначение</button>
      }
    </div>
  )
}

export default Result