import { useDispatch, useSelector } from "react-redux";
import css from "./ContactList.module.css";
import { deleteContact, contactsSelector } from "../../redux/contactsSlice";
import { filterSelector } from "../../redux/filtersSlice";

export function ContactList() {
  const contacts = useSelector(contactsSelector);
  const dispatch = useDispatch();
  const filter = useSelector(filterSelector);

  const filteredData = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredData.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.list_item}>
            {name}: <span>{number}</span>
            <button
              type="button"
              onClick={() => dispatch(deleteContact(id))}
              className={css.btn}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
