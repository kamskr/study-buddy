import React, { useContext, useReducer } from 'react';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Title } from 'components/atoms/Title/Title';
import { UsersContext } from 'providers/UsersProvider';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
  consent: false,
};

const actionTypes = {
  INPUT_CHANGE: 'INPUT_CHANGE',
  CLEAR_VALUES: 'CLEAR_VALUES',
  CONSENT_TOGGLE: 'CONSENT_TOGGLE',
  THROW_ERROR: 'THROW_ERROR',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INPUT_CHANGE:
      return {
        ...state,
        [action.field]: action.value,
      };
    case actionTypes.CLEAR_VALUES:
      return initialFormState;
    case actionTypes.CONSENT_TOGGLE:
      return {
        ...state,
        consent: !state.consent,
      };
    case actionTypes.THROW_ERROR:
      return {
        ...state,
        error: action.errorValue,
      };
    default:
      return state;
  }
};

const AddUser = () => {
  const [formValues, dispatch] = useReducer(reducer, initialFormState);
  const { handleAddUser } = useContext(UsersContext);

  const handleInputChange = (e) => {
    dispatch({
      type: actionTypes.INPUT_CHANGE,
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();
    if (formValues.consent) {
      handleAddUser(formValues);
      dispatch({ type: actionTypes.CLEAR_VALUES });
    } else {
      dispatch({ type: actionTypes.THROW_ERROR, errorValue: 'You need to give consent' });
    }
  };

  return (
    <ViewWrapper as="form" onSubmit={handleSubmitUser}>
      <Title>Add new student</Title>
      <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
      <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
      <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
      <FormField
        label="Consent"
        id="consent"
        name="consent"
        type="checkbox"
        value={formValues.consent}
        onChange={() => dispatch({ type: actionTypes.CONSENT_TOGGLE })}
      />
      <Button type="submit">Add</Button>
      {formValues.error ? <p>{formValues.error}</p> : null}
    </ViewWrapper>
  );
};

export default AddUser;
