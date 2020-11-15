import React from 'react';

import './Navigation.css';



export const Navigation = () => {
    return (
        <aside className="sotring-block">
            <form action="#" className="form-filters" autoComplete="off">
                <fieldset className="sort-flight-details">
                    <legend>Сортировать</legend>
                    <div className="sort-flight-details__item">
                        <input type="radio" defaultChecked="checked" name="details-features" defaultValue="по возрастанию цены" id="price-up" className="sort-flight-details__checkbox" />
                        <label className="sort-flight-details__label" htmlFor="price-up">по возрастанию цены</label>
                    </div>

                    <div className="sort-flight-details__item">
                        <input type="radio" name="details-features" defaultValue="по убыванию цены" id="price-down" className="sort-flight-details__checkbox" />
                        <label className="sort-flight-details__label" htmlFor="price-down">по убыванию цены</label>
                    </div>

                    <div className="sort-flight-details__item">
                        <input type="radio" name="details-features" defaultValue="по времени в пути" id="travel-time" className="sort-flight-details__checkbox" />
                        <label className="sort-flight-details__label" htmlFor="travel-time">по времени в пути</label>
                    </div>
                </fieldset>

                <fieldset className="sort-transfer">
                    <legend>Фильтровать</legend>
                    <div className="sort-transfer__item">
                        <input type="checkbox" name="transfer-features" defaultValue="1 пересадка" id="1-transfer" className="sort-transfer__checkbox" />
                        <label className="sort-transfer__label" htmlFor="1-transfer">1 пересадка</label>
                    </div>

                    <div className="sort-transfer__item">
                        <input type="checkbox" name="transfer-features" defaultValue="без пересадок" id="without-transfers" className="sort-transfer__checkbox" />
                        <label className="sort-transfer__label" htmlFor="without-transfers">без пересадок</label>
                    </div>
                </fieldset>

                <fieldset className="sort-price">
                    <legend>Цена</legend>

                    <div className="sort-price__item">
                        <label className="sort-price__label" htmlFor="from">От</label>
                        <input type="text" name="sort-price-features" defaultValue="0" id="from" className="sort-price__input" />
                    </div>

                    <div className="sort-price__item">
                        <label className="sort-price__label" htmlFor="to">До</label>
                        <input type="text" name="sort-price-features" defaultValue="10000" id="to" className="sort-price__input" />
                    </div>
                </fieldset>

                <fieldset className="sort-airline">
                    <legend>Авиакомпании</legend>
                    <div className="sort-airline__item">
                        <input type="checkbox" name="sort-airline-features" defaultValue="LOT Polish Airlines" id="LOT-Polish-Airlines" className="sort-airline__checkbox" />
                        <label className="sort-airline__label" htmlFor="LOT-Polish-Airlines">LOT Polish Airlines от 21049 р.</label>
                    </div>

                    <div className="sort-airline__item">
                        <input type="checkbox" name="sort-airline-features" defaultValue="Аэрофлот - росс..." id="aeroflot" className="sort-airline__checkbox" />
                        <label className="sort-airline__label" htmlFor="aeroflot">Аэрофлот - росс... от 31733 р.</label>
                    </div>
                </fieldset>
            </form>
        </aside>
    )
}