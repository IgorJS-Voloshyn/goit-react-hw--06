export const contactsSelector = (state) => state.contacts.items;

export const filterSelector = (state) => state.filter;

export const getVisibleContacts = (state) => {
  const contacts = contactsSelector(state);
  const filter = filterSelector(state);
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
