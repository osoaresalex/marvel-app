import { Container, Content, Context } from './styles';

export default function Hero() {
  return (
    <Container>
      <Content>
        <div className="pop"></div>
        <div className="hero-mask"></div>
        <div>
          {/* <img src="/assets/images/hero-banner.jpeg" alt="Banner MARVEL" /> */}
        </div>
      </Content>

      <Context>
        <h2>BUSCA MARVEL</h2>
        <p>TESTE FRONT-END OBJECTIVE</p>
      </Context>
    </Container>
  );
}