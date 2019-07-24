import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  const [techs, setTechs] = useState(['']);
  const [newTech, setNewTech] = useState('');

  const handleAdd = useCallback(() => {
    setTechs([...techs, newTech]);
    setNewTech('Coloque um novo texto');
  }, [newTech, techs]);

  // componentDidUpdate
  useEffect(() => {
    const storageTechs = localStorage.getItem('techs');
    if (storageTechs) {
      setTechs(JSON.parse(storageTechs));
    }
  }, []);

  // compomentDidMount
  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  });

  const techSize = useMemo(() => techs.length, [techs.length]);

  return (
    <>
      <ul>
        {techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newTech}
        onChange={e => setNewTech(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
      <br /> <br />
      <strong>Voce possui {techSize} tecnologia(s).</strong>
    </>
  );
}

export default App;
