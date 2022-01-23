import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import styled from 'styled-components';
import { Form } from 'react-bootstrap';

import { changeFilter } from '../../store/contacts/actions';
import { getFilter } from '../../store/contacts/selectors';

const Label = styled.label`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
`;

export default function Filter({ title }) {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);

    const onChange = value => dispatch(changeFilter(value));

    const handleFilterChange = event => {
        const { value } = event.target;
        onChange(value.toLowerCase());
    };

    const filterId = shortid.generate();
    return (
        <Label htmlFor={filterId}>
            <span>{title}</span>
            <Form.Control
                type="text"
                name="filter"
                required
                value={filter}
                onChange={handleFilterChange}
                placeholder="Search..."
                id={filterId}
            />
        </Label>
    );
}
Filter.propTypes = {
    title: PropTypes.string,
};
