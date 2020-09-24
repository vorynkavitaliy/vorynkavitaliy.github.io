import React, {useState} from 'react'

export default ({ term, data, update }) => {
    const dataSearch = e => {
        const value = e.target.value.toLowerCase();
        const filter = data.filter(user => user.name.first.toLowerCase().includes(value))
        update({
          data: filter,
          term: value
        })
    }

    const [gender, setGender] = useState({
      male: false,
      female: false
    })

    const filterMale = () => {
      setGender(prev => ({...prev, male: !gender.male}))
      const filter = !gender.male ? data.filter(item => item.gender === 'male') : data
      update({data: filter})
    }

    const filterFemale = () => {
      setGender(prev => ({...prev, female: !gender.female}))
      const filter = !gender.female ? data.filter(item => item.gender === 'female') : data
      update({data: filter})
    }

    return (
      <div className="searchbar form-group">
        <input
          value={term}
          type="text"
          className="form-control"
          placeholder="Search people by name..."
          onChange={dataSearch}
        />

        <div className="input-group-prepend mt-4">
          <div className="input-group-text mr-3">
            <input type="checkbox" checked={gender.male} onChange={filterMale} aria-label="Checkbox for following text input"/> &nbsp;Male
          </div>

          <div className="input-group-text">
            <input type="checkbox" checked={gender.female} onChange={filterFemale} aria-label="Checkbox for following text input"/>&nbsp; Female
          </div>
        </div>
      </div>
    );
};