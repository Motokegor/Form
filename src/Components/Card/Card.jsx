import React from 'react';
import "./Card.scss";

export default function Card(props) {
  return (
    <div className="card_container">
        <div className="card_title">
            <h2>Имя: {props.object.name}</h2>
            <h2>Фамилия: {props.object.text}</h2>
        </div>
        <div className="card_text">
            <h4>Телефон: {props.object.phone}</h4>
            <h4>Электронная почта: {props.object.email}</h4>
            <h4>Адрес доставки: {props.object.deliv}</h4>
        </div>
        <button onClick={() => props.delCard(props.object.id)}>delete</button>
    </div>
  )
}