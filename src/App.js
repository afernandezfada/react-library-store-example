import React, {useEffect, useState} from 'react';
import './App.css';
import List from './components/List';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import BookService from "./services/BookService";

function App() {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    BookService.getAllBooksFromApi().then(data => {
      //console.log(data);
      setBookData(data);
    })
    
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Library Store</h1>
      </header>
      <main>
        <Container fluid>
          <Row>
            <Col>
              <List title='Books' data={bookData} />
            </Col>
            <Col>
              <List title='Videos' />
            </Col>
          </Row>
        </Container>
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default App;
