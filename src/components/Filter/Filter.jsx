import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import css from './Filter.module.css'
import { setFilter } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/selectors';


export const Filter = () => {
  const dispatch = useDispatch();

  const setFilterName = e => dispatch(setFilter(e.target.value));

  const filter = useSelector(selectFilter);
  

  return (
    <div className={css.filterContainer}>
      <label htmlFor="filter"> Filters contacts by name </label>

      <input className={css.filterInput}
        type="text"
        name="filter"
        value={filter}
        onChange={setFilterName}
        id="filter"
        required
      />
    </div>
  );
};
