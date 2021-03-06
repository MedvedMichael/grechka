import React, {FormEvent} from "react";
import styled from "styled-components";
import {IoSearchSharp} from "react-icons/all";
import {useInput} from "../hooks/useInput";
import {useFilter} from "../context/filter";

const Section = styled.section`
  max-width: 80rem;
  min-width: 20rem;
  display: flex;
  margin: 0 auto;
  height: 48px;

`;


const Input = styled.input`
  padding-left: .625rem;
  padding-right: 4.5rem;
  flex-grow: 24;
  border: 1px solid #6E9FEC;
`;

const Button = styled.button`
  color: #fff;
  background-color: #6E9FEC;
  flex-grow: 1;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Form = styled.form`
    flex-grow: 100;
  display: flex;
`;

export default function Search () {
    const {value, handleChange} = useInput();
    const {setFilter} = useFilter();

    const submitForm = (e:FormEvent) => {
        e.preventDefault();
        setFilter(value)
    };

    return (
        <Section >
            {/* <Select>
                <option value="grechka" selected>Grechka</option>
            </Select> */}
            <Form onSubmit={submitForm}>
                <Input placeholder="Знайти товар" value={value} onChange={handleChange}/>
                <Button type="submit">
                    <IoSearchSharp/>
                </Button>
            </Form>
        </Section>
    );
}
