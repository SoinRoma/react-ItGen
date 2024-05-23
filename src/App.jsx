import {useEffect, useState} from "react"
import CategoryList from "./components/CategoryList.jsx"
import StepsList from "./components/StepsList.jsx"
import Result from "./components/Result.jsx"
import AnalysesList from "./components/AnalysesList.jsx"

function App() {
  const [categories, setCategories] = useState([])
  const [steps, setSteps] = useState([])
  const [checkboxes, setCheckboxes] = useState([])
  const [analyses, setAnalyses] = useState([])

  async function getCategory() {
    const response = await fetch('https://it-gen.altek.uz/api/v1/directory/category/list/')
    if (response.ok) {
      const data = await response.json()
      setCategories(data.results)
    }
  }

  useEffect(() => {
    getCategory()
  }, [])

  return (
    <div>
      <CategoryList categories={categories} setSteps={setSteps} setAnalyses={setAnalyses} setCheckboxes={setCheckboxes}/>
      <StepsList steps={steps} setCheckboxes={setCheckboxes}/>
      <Result checkboxes={checkboxes} setAnalyses={setAnalyses}/>
      <AnalysesList analyses={analyses}/>
    </div>
  )
}

export default App
