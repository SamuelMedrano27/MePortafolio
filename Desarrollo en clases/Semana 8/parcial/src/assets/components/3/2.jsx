import React, { useState } from 'react';
import alarmSound from '../../../../public/BeepExamen.mp3';


const Alarma = ({ onSetAlarma, onDesactivarAlarma, alarmaActivada }) => {
  const [horas, setHoras] = useState(0);
  const [minutos, setMinutos] = useState(0);

  const handleSetAlarma = () => {
    onSetAlarma(horas, minutos);
  };

  return (
    <div>
      <h2>Alarma</h2>
      <div>
        <label htmlFor="horas">Horas:</label>
        <input type="number" id="horas" min="0" max="23" value={horas} onChange={(e) => setHoras(Number(e.target.value))} disabled={alarmaActivada} />
      </div>
      <div>
        <label htmlFor="minutos">Minutos:</label>
        <input type="number" id="minutos" min="0" max="59" value={minutos} onChange={(e) => setMinutos(Number(e.target.value))} disabled={alarmaActivada} />
      </div>
      <button onClick={handleSetAlarma} disabled={alarmaActivada}>Establecer Alarma</button>
      <button onClick={onDesactivarAlarma} disabled={!alarmaActivada}>Desactivar Alarma</button>
    </div>
  );
};

export default Alarma;
