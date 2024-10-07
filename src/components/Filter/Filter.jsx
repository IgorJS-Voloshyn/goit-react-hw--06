import css from "./Filter.module.css";

export function Filter({}) {
  return (
    <div>
      <label className={css.label}>
        Find contacts by name:
        <input
          className={css.input}
          onChange={}
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
