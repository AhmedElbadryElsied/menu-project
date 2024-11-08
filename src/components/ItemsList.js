import React from "react";
import { Card, Col, Row } from "react-bootstrap";

function ItemsList({ itemsData }) {
  return (
    <Row>
        
      {itemsData.length ? (
        itemsData.map((ele) => {
          return (
            <Col key={ele.id} sm="12" className="mb-3 animation">
              <Card
                className="d-flex flex-row"
                style={{
                  background: "#f8f8f8",
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                }}
              >
                <Card.Img
                  style={{
                    width: "200px",
                    height: "150px",
                    borderRadius: "10px",
                  }}
                  variant="top"
                  src={ele.src}
                />
                <Card.Body>
                  <Card.Title className="d-flex justify-content-between">
                    <div className="item-title">{ele.title}</div>
                    <div className="item-price">{ele.price}</div>
                  </Card.Title>
                  <Card.Text className="py-2">
                    <div className="item-discribtion">
                      {ele.describtion}
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })
      ) : (
        <h1>No found Data</h1>
      )}
    </Row>
  );
}

export default ItemsList;
