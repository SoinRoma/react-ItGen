import {useState} from "react"

function CategoryList({categories, setSteps, setAnalyses, setCheckboxes}) {
  const [isLoader, setIsLoader]  = useState(false)
  const [activeId, setActiveId] = useState(0)
  async function openCategory(id) {
    if (activeId !== id){
      setIsLoader(true)
      setActiveId(id)
      const response = await fetch(`https://it-gen.altek.uz/api/v1/directory/category/${id}/`)
      if (response.ok) {
        const data = await response.json()
        setIsLoader(false)
        setSteps(data.results)
        setAnalyses([])
        setCheckboxes([])
      }
    }
  }

  return (
    <div className="category-block">
      <h3 className="category-title">Категория заболеваний</h3>
      <ul>
        {categories.map(category =>
          <li key={category.id} onClick={() => openCategory(category.id)}>
            <span>{category.name}</span>
            {isLoader && activeId === category.id &&
              <img src="./spinner.gif" width={25} alt="spinner"/>
            }
          </li>
        )}
      </ul>
    </div>
  )
}

export default CategoryList