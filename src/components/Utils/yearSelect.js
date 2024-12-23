import React from 'react';

const YearSelect = ({ value, onChange }) => {
  const currentYear = new Date().getFullYear();

  // Generate an array of years from the current year down to 1900
  const years = [];
  for (let year = currentYear; year >= 2020; year--) {
    years.push(year);
  }

  return (
    <div>
      <select
        id="year"
        name="year"
        value={value}
        onChange={onChange}
        required
      >
        <option value="" disabled selected>Year</option>
        {years.map(year => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default YearSelect;
