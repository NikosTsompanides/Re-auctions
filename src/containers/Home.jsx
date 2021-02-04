import React from "react";
import Auction from "../components/Auction";
import Col from "../components/Base/Grid/Col";
import Row from "../components/Base/Grid/Row";
import DefaultLayout from "../layout/DefaultLayout";
import withLayout from "../utils/HOCs/withLayout";

const sampleProducts = [
  {
    img: "https://picsum.photos/200/200",
    title: "Product 1",
    description: "Lorem Ipsum dolor sit ament",
    bids: 10,
    expiresAt: new Date("2021-06-12"),
    currentPrice: 39.99,
  },
  {
    img: "https://picsum.photos/200/200",
    title: "Product 2",
    description: "Lorem Ipsum dolor sit ament",
    bids: 30,
    expiresAt: new Date("2021-07-01"),
    currentPrice: 68.35,
  },
  {
    img: "https://picsum.photos/200/200",
    title: "Product 3",
    description: "Lorem Ipsum dolor sit ament",
    bids: 27,
    expiresAt: new Date("2021-03-08"),
    currentPrice: 120,
  },
];
const Home = () => {
  return (
    <div>
      <div className="my-4">
        <Row>
          {sampleProducts.map((product, i) => (
            <Col cols="full" md="1/3" gap={4} key={i}>
              <Auction product={product} />
            </Col>
          ))}
        </Row>
      </div>
      <div className="my-4">
        <Row>
          {sampleProducts.map((product, i) => (
            <Col cols="full" md="1/3" gap={4} key={i}>
              <Auction product={product} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default withLayout(DefaultLayout)(Home);
