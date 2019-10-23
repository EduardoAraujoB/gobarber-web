import React, { useState, useMemo } from 'react';
import { format, subDays, addDays } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import api from '~/services/api';

import { Container, Time } from './styles';

export default function Dashboard() {
  const [date, setDate] = useState(new Date());

  const dateFormated = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  return (
    <Container>
      <header>
        <button>
          <MdChevronLeft size={36} color="#fff" onClick={handlePrevDay} />
        </button>
        <strong>{dateFormated}</strong>
        <button>
          <MdChevronRight size={36} color="#fff" onClick={handleNextDay} />
        </button>
      </header>

      <ul>
        <Time past>
          <strong>08:00</strong>
          <span>Eduardo Araújo</span>
        </Time>
        <Time available>
          <strong>09:00</strong>
          <span>Em aberto</span>
        </Time>
        <Time>
          <strong>10:00</strong>
          <span>Eduardo Araújo</span>
        </Time>
        <Time>
          <strong>11:00</strong>
          <span>Eduardo Araújo</span>
        </Time>
      </ul>
    </Container>
  );
}
