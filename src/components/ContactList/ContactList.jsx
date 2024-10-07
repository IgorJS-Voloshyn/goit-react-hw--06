import { useDispatch, useSelector } from "react-redux";
import css from "./ContactList.module.css";
import { contactsSelector, deleteContact } from "../../redux/contactsSlice";

export function ContactList() {
  const contacts = useSelector(contactsSelector);
  const dispatch = useDispatch(deleteContact);
  console.log(contacts);
  return (
    <ul className={css.list}>
      {[
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ].map(({ id, name, number }) => {
        return (
          <li key={id} className={css.list_item}>
            {name}: <span>{number}</span>
            <button
              type="button"
              onClick={dispatch(deleteContact(id))}
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
