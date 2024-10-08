import { useSelector } from "react-redux";
import css from "./ContactList.module.css";
import { contactsSelector } from "../../redux/contactsSlice";
import { filterSelector } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact";

export function ContactList() {
  const contacts = useSelector(contactsSelector);
  const filter = useSelector(filterSelector);

  const filteredData = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredData.map(({ id, name, number }) => {
        return <Contact key={id} id={id} name={name} number={number} />;
      })}
    </ul>
  );
}
