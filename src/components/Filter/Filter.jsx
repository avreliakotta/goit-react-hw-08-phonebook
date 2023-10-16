import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterByName } from '../../redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(state => state.filter.filter);

  const dispatch = useDispatch();
  const handleChange = event => {
    const name = event.target.value;
    dispatch(setFilterByName(name));
  };
  return (
    <div className={css.FilterWrap}>
      <label className={css.filterLabel}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
          className={css.filterInput}
        />
      </label>
    </div>
  );
};
