import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Container, Content } from './styles';

export default function Footer() {
  return (
    <Container>
      <Content>
        <div>
          <a href="https://www.linkedin.com/in/osoaresalex/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={40} />
          </a>
          <a href="https://github.com/osoaresalex" target="_blank" rel="noopener noreferrer">
            <FaGithub size={40} />
          </a>
        </div>
        <p>Desenvolvido por Alex Soares</p>
      </Content>
    </Container>
  );
}