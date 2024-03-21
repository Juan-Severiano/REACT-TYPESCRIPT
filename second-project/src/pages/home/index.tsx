import Container from "../../components/container";

import Car01 from '../../assets/car01.png';
import Car02 from '../../assets/car02.png';
import Car03 from '../../assets/car03.png';

export function Home() {
  return (
    <Container>
      <section>
        <input type="text" />
        <button type="button">Buscar</button>
      </section>
      <h2>Carros usados em todo o Ceará</h2>
      <main>
        <section>
          <img src={Car01} alt="Carro 01" />
          <p>Jaguar F-PACE</p>
          <div>
            <span>Ano: 2016/2017 | 26999 Km</span>
            <strong>R$ 239.000,00</strong>
          </div>
        </section>
        <section>
          <img src={Car02} alt="Carro 01" />
          <p>Porsche F-PACE</p>
          <div>
            <span>Ano: 2016/2017 | 26999 Km</span>
            <strong>R$ 239.000,00</strong>
          </div>
        </section>
        <section>
          <img src={Car03} alt="Carro 01" />
          <p>Porsche F-PACE</p>
          <div>
            <span>Ano: 2016/2017 | 26999 Km</span>
            <strong>R$ 239.000,00</strong>
          </div>
        </section>
      </main>
    </Container>
  )
}
