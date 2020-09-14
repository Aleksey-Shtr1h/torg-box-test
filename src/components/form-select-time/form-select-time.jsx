import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {ActionCreatorApp} from '../../redux/app/app-action.js';

import {CityTimeOptions} from '../../constans.js';

import '../../styles/formselect-time.css';

export const FormSelectTime = () => {
  // const cityNameActive = useSelector((state) => state.APP.cityNameActive);

  const [cityName, setCityName] = useState(`Красноярск`); 

  const dispatch = useDispatch();

  return (
    <section className="choice-time">
      <form className="choice-time__form" action="#" method="get">
        <span className="choice-time__form-caption">Выберите город часового пояса</span>

        <select 
          className="choice-time__form-type"
          id={cityName} 
          value={cityName}

          onChange={(evt) =>
            setCityName(evt.target.value)
          }
        >

          {CityTimeOptions.map((CityTimeOption, id) => 
            <option
              className="choice-time__option" 
              value={CityTimeOption.value}
              key={CityTimeOption.value + CityTimeOption.name + id}
            >
              {CityTimeOption.name}
            </option>
          )}

        </select>

        <button 
          className="choice-time__btn" 
          type="button"
          onClick={() => 
            dispatch(ActionCreatorApp.actionChangeTime(cityName))
          }
        >
          Выбрать
        </button>
      </form>
    </section>
  )
};