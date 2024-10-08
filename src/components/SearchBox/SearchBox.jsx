import { useDispatch } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

export function SearchBox() {
  const dispatch = useDispatch();
  return (
    <div>
      <label className={css.label}>
        Find contacts by name:
        <input
          className={css.input}
          onChange={(e) => {
            dispatch(changeFilter(e.target.value));
          }}
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
    </div>
  );
}
