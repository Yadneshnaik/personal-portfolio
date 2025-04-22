import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const certifications = [
    {
      title: "10th – Commerce",
      board: "ICSE Board",
      institute: "Phoenix Public Residential School, Belgaum",
      duration: "June 2016 – April 2017",
    },
    {
      title: "12th – Office Management",
      board: "Goa Board",
      institute: "St. Alex Higher Secondary School, Goa",
      duration: "June 2019 – April 2020",
    },
    {
      title: "B.Voc – Software Development",
      board: "Goa University",
      institute: "Parvatibai Chowgule College of Arts and Science",
      duration: "June 2020 – April 2023",
    },
    {
      title: "Postgraduate Diploma in Computer Applications",
      board: "Goa University",
      institute: "Parvatibai Chowgule College of Arts and Science",
      duration: "June 2024 – April 2025",
    },
    {
      title: "Graphic Design & UI/UX Course",
      board: "Goa University",
      institute: "Parvatibai Chowgule College of Arts and Science",
      duration: "October 2023 – March 2024",
    },
  ];

const Certifications = () => {
    return (
        <section className="certifications-section" style={{ padding: "50px 0" }}>
            <Container>
                <h2 className="text-center mb-5">My Certifications & Education</h2>
                <Row>
                    {certifications.map((cert, index) => (
                        <Col key={index} xs={12} md={6} lg={4} className="mb-4">
                            <Card style={{ borderRadius: '12px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                                <Card.Body>
                                    <Card.Title className="mb-2 text-muted">{cert.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{cert.board}</Card.Subtitle>
                                    <Card.Text className="mb-2 text-muted"><strong>Institute:</strong> {cert.institute}</Card.Text>
                                    <Card.Text className="mb-2 text-muted"><strong>Duration:</strong> {cert.duration}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Certifications;
