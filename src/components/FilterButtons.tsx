import React from 'react';
import { FilterType } from '../types';

interface FilterButtonsProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ currentFilter, onFilterChange }) => {
  const filters: { label: string; value: FilterType }[] = [
    { label: '전체', value: 'all' },
    { label: '진행 중', value: 'active' },
    { label: '완료', value: 'completed' },
  ];

  return (
    <div className="btn-group w-100 mb-4" role="group">
      {filters.map((filter) => (
        <button
          key={filter.value}
          type="button"
          className={`btn btn-outline-primary ${currentFilter === filter.value ? 'active' : ''}`}
          onClick={() => onFilterChange(filter.value)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
