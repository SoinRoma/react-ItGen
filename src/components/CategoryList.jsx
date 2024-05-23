function CategoryList({categories, setSteps}) {

  async function openCategory(id) {
    const response = await fetch(`https://it-gen.altek.uz/api/v1/directory/category/${id}/`)
    if (response.ok) {
      const data = await response.json()
      setSteps(data.results)
    }
  }

  return (
    <div className="category-block">
      <h3 className="category-title">Категория заболеваний</h3>
      <ul>
        {categories.map(category =>
          <li key={category.id} onClick={() => openCategory(category.id)}>{category.name}</li>
        )}
      </ul>
    </div>
  )
}

export default CategoryList