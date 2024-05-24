function AnalysesList({analyses}) {

  return (
    <div>
      {analyses.length > 0 &&
        <div>
          <div className="analysis-block">
            {analyses.map(analysis =>
              <div key={analysis.id} className="analysis-card">
                <h3><strong>Наименование: </strong>{analysis.name}</h3>
              </div>
            )}
          </div>
        </div>
      }
    </div>
  )
}

export default AnalysesList