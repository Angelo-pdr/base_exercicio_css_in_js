import styled from 'styled-components'
import { Container } from '../../styles'

export const VagaLi = styled.li`
  border: 1px solid #a7727d;
  background-color: #f9f5e7;
  color: #a7727d;
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: #a7727d;
    color: #f9f5e7;
  }

  &:hover a {
    border-color: #a7727d;
    background-color: #f9f5e7;
    color: #a7727d;
  }

  a {
    border-color: #f9f5e7;
    background-color: #a7727d;
    color: #f9f5e7;
    display: inline-block;
    padding: 8px 16px;
    text-decoration: none;
    margin-top: 16px;
    font-weight: bold;
    font-size: 14px;
    border-radius: 8px;
    text-align: center;
  }
`

export const ContainerHero = styled(Container)`
  position: relative;
  color: #eee;
`

export const VagaTitulo = styled.h2`
  font-weight: bold;
  margin-bottom: 16px;
`
