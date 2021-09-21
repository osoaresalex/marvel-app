import Link from 'next/link';
import { Container, Content } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <div>
          <h1>
            <Link href="/">
              <a>
                BUSCA MARVEL
              </a>
            </Link>
          </h1>
        </div>

        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>
                  HOME
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </Content>
    </Container>
  );
}