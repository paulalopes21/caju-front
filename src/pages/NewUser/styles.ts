import Button from "@/components/Buttons";
import { _IconButtonStyled } from "@/components/Buttons/IconButton";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
`;

export const Card = styled.div`
  border: 2px solid #f0f0f0;
  width: 500px;
  padding: 48px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${_IconButtonStyled} {
    margin-bottom: 8px;
    align-items: flex-start;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${Button} {
    align-self: flex-end;
  }
`;
