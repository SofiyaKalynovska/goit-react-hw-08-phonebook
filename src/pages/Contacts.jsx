import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList';
import Section from '../components/Section';
import Filter from '../components/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading, selectError } from 'redux/selectors';
import { ThreeDots } from 'react-loader-spinner';
import { Wrapper } from '../components/App/App.styled';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        {isLoading && !error ? (
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#33415c"
            ariaLabel="three-dots-loading"
            wrapperClassName=""
            visible={isLoading}
            wrapperStyle={{ display: 'inline' }}
          />
        ) : (
          <Filter />
        )}
        <ContactList />
      </Section>
    </Wrapper>
  );
};

export default Contacts;
