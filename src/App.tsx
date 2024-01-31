import React, { useState } from 'react';
import './App.css';
import { TonConnectButton } from '@tonconnect/ui-react';


function App() {

  const [view, setView] = useState('default'); // Для управления отображаемым видом
  const [depositAmount, setDepositAmount] = useState('');
  const [riskSize, setRiskSize] = useState('');
  const [priceForecast, setPriceForecast] = useState('');
  const [roundsCount, setRoundsCount] = useState('');
  const [autoContinue, setAutoContinue] = useState(false); // Для чекбокса

  // Функции для обработки событий
  const handleViewBets = () => {
    // Здесь будет логика для отображения ставок пользователя
    setView('viewBets');
  };

  const handleMakeDepositAndBet = () => {
    // Здесь будет логика для внесения депозита и совершения ставки
    setView('makeDepositAndBet');
  };

  const handleChangeBet = () => {
    // Здесь будет логика для изменения ставки
    setView('changeBet');
  };

  const handleUpdateBet = () => {
    // Здесь будет логика для отправки новой ставки и прогноза
    // Необходимо реализовать функцию, которая будет взаимодействовать с контрактом
  };

  // Компоненты для различных видов
  const ViewBets = () => (
    <div>
      <div>Баланс: {/* Здесь будет вывод баланса пользователя */}</div>
      <div>Ставка: {/* Здесь будет вывод ставки пользователя */}</div>
    </div>
  );

  const MakeDepositAndBet = () => (
    <div>
      <input
        type="text"
        placeholder="Размер депозита"
        value={depositAmount}
        onChange={(e) => setDepositAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Размер риска"
        value={riskSize}
        onChange={(e) => setRiskSize(e.target.value)}
      />
      <input
        type="text"
        placeholder="Прогноз изменения цены"
        value={priceForecast}
        onChange={(e) => setPriceForecast(e.target.value)}
      />
      <input
        type="text"
        placeholder="Количество раундов"
        value={roundsCount}
        onChange={(e) => setRoundsCount(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={autoContinue}
          onChange={(e) => setAutoContinue(e.target.checked)}
        />
        Ставить пока не кончится депозит
      </label>
      {/* Здесь будет кнопка для отправки данных */}
    </div>
  );

  const ChangeBet = () => (
    <div>
      <div>Текущая ставка: {/* Здесь будет вывод текущей ставки */}</div>
      <div>Прогноз изменения цены: {/* Здесь будет вывод текущего прогноза */}</div>
      <input
        type="text"
        placeholder="Новая ставка"
        value={riskSize}
        onChange={(e) => setRiskSize(e.target.value)}
      />
      <input
        type="text"
        placeholder="Новый прогноз"
        value={priceForecast}
        onChange={(e) => setPriceForecast(e.target.value)}
      />
      <button onClick={handleUpdateBet}>Обновить ставку</button>
    </div>
  );

  return (
    <div className='App'>
      <div className='Container'>
        <TonConnectButton />

        
        <div className='ButtonGroup'>
          <button className='Button' onClick={() => setView('viewBets')}>Посмотреть мои ставки</button>
          <button className='Button' onClick={() => setView('makeDepositAndBet')}>Внести депозит и сделать ставку</button>
          <button className='Button' onClick={() => setView('changeBet')}>Изменить ставку</button>
        </div>

        {view === 'viewBets' && <ViewBets />}
        {view === 'makeDepositAndBet' && <MakeDepositAndBet />}
        {view === 'changeBet' && <ChangeBet />}
      </div>
    </div>
  );
}

export default App;