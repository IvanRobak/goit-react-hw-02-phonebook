import { List, Item, Text, DeleteBtn } from './ContactList.styled';

const ContactList = ({ contactList, onDelete }) => {
  return (
    <List>
      {contactList.map(({ id, name, number }) => (
        <Item key={id}>
          <Text>{`${name}: ${number}`}</Text>
          <DeleteBtn type="button" onClick={() => onDelete(id)}>
            Delete
          </DeleteBtn>
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
