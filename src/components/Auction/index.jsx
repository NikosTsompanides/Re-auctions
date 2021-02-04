import React from "react";

import Card from "../Base/Card/Card";
import CardImage from "../Base/Card/CardImage";
import CardBody from "../Base/Card/CardBody";
import CardTitle from "../Base/Card/CardTitle";
import CardActions from "../Base/Card/CardActions";
import CardDescription from "../Base/Card/CardDescription";
import Countdown from "react-countdown";
import Row from "../Base/Grid/Row";
import Col from "../Base/Grid/Col";

const CountdownRenderer = ({ days, hours, minutes, seconds }) => {
  if (days > 1) {
    return <span>{days} Days</span>;
  }
  if (hours > 1) {
    return (
      <span>
        {hours} hours and {minutes} minutes
      </span>
    );
  }
  return (
    <span>
      {minutes}:{seconds}
    </span>
  );
};

export default function Auction({ product }) {
  return (
    <Card height={200}>
      <Row fullHeight>
        <Col cols="full" md="1/3">
          <CardImage src={product.img} />
        </Col>
        <Col cols="full" md="2/3" gap={4}>
          <CardBody>
            <div className="flex flex-col justify-between h-full py-2">
              <div>
                <CardTitle title={product.title} />
                <CardDescription>{product.description}</CardDescription>
              </div>
              <div>
                <Row justify="between">
                  <div className="text-gray-400 ">
                    Bids:
                    <span className="ml-2 text-gray-500 font-bold">
                      {product.bids}
                    </span>
                  </div>

                  <div className="text-gray-400">
                    Expires at:
                    <span className="ml-2 text-red-500 font-bold">
                      <Countdown
                        date={product.expiresAt.getTime()}
                        renderer={CountdownRenderer}
                      />
                    </span>
                  </div>

                  <div className="text-gray-400 mb-2">
                    Price:
                    <span className="ml-2 text-green-500 font-bold">
                      {product.currentPrice} €
                    </span>
                  </div>
                </Row>
                <CardActions>
                  <button className="outline-none focus:outline-none border-none rounded shadow bg-blue-400 hover:bg-blue-500 text-white w-full py-1">
                    Bid
                  </button>
                </CardActions>
              </div>
            </div>
          </CardBody>
        </Col>
      </Row>
    </Card>
  );
}
