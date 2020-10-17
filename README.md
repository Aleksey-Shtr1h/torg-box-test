## Instructions

* Clone the repo
* Run `npm install`
* Run `npm start`

## Описание решения:

* Настройка Webpack: В модули с правилами подключил js, jsx, css с пакетами "style-loader", "css-loader", "postcss-loader", "babel-loader".

Сборка идет в папку **/dist** от входного js файла **/src/index.js** и преобразуется в **"index.html", "index-bundle.js"**.

* Начало приложения начинается **/src/index.js**. Здесь подключаем:  
  * ReactDOM (для интеграции react c html)
  * Provider, createStore (для запуска Redux store в react)

* Компоненты:
  **Main** - главный компонент часов. Здесь реализована логика миханизм запуска и обновления часов с помощью React Hooks (**useState, useEffect**). 

  Изначально **timeZoneClockOne**, **timeZoneClockTwo** state в Redux выставленно на Красноярское время, данные этих переменных берутся с помощью React-readux Hooks **useSelector** и передаются в компоненты **ClockCool**, **ClockDigital**.

  Смена времени производится с помощью функций **onTimeZoneClockOneClick, onTimeZoneClockTwoClick**, которые через пропсы передаются в компонент **FormSelectTime** и через dispatch, подключаемое с помощью React-readux Hooks **useDispatch**, название города попадает в action и производится смена времени значений state в Redux: **timeZoneClockOne** или **timeZoneClockTwo**.

  **ClockCool** - стрелочные часы.

  **FormSelectTime** - форма выбора города. Механизм обновления с помощью React, React-readux Hooks (useState, useDispatch). 

  **ClockDigital** - похожий компонент с **ClockCool**. Только изменена верстка и логика часов.