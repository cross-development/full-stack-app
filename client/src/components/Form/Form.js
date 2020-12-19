//Core
import React from 'react';
//Styles
import { StyledForm, StyledLabel, StyledInput, StyledButton } from './Form.styles';

const Form = ({ onHandleSubmit }) => {
	const handleSubmit = e => {
		e.preventDefault();

		onHandleSubmit(e.target[0].files[0]);
	};

	return (
		<StyledForm onSubmit={handleSubmit}>
			<StyledLabel>
				<StyledInput type="file" accept="application/JSON" />
			</StyledLabel>

			<StyledButton type="submit">Отправить</StyledButton>
		</StyledForm>
	);
};

export default Form;
