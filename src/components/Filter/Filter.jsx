import { FieldInput, FieldLabel } from './Filter.styled';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filterSlice';
import { selectFilter } from '../../redux/selectors';

const Filter = () => {
  const filterInputId = nanoid();

  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(changeFilter(event.currentTarget.value));
  };

  return (
    <div>
      <FieldLabel htmlFor={filterInputId}>Find contacts by name:</FieldLabel>
      <FieldInput
        type="text"
        name="filter"
        value={filter}
        id={filterInputId}
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default Filter;
