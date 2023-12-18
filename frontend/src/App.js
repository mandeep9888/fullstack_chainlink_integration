import React, { useState } from "react";
import { ethers } from "ethers";
import { Card, Button, Form, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [storedPrice, setStoredPrice] = useState("");
  const [selectedPair, setSelectedPair] = useState("");
  const contractAddress = "0xCbf3b6D022c4ED6504e33aCDaa5269baCE533369";
  const ABI = [
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [],
      name: "getBTC_ETH",
      outputs: [
        {
          internalType: "int256",
          name: "",
          type: "int256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getDAI_USD",
      outputs: [
        {
          internalType: "int256",
          name: "",
          type: "int256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getETH_USD",
      outputs: [
        {
          internalType: "int256",
          name: "",
          type: "int256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getLINK_USD",
      outputs: [
        {
          internalType: "int256",
          name: "",
          type: "int256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];

  const provider = new ethers.BrowserProvider(window.ethereum);
  const smartContract = new ethers.Contract(contractAddress, ABI, provider);

  const getPair = async (pair) => {
    try {
      let contractPrice = 0;
      switch (pair) {
        case "DAI/USD":
          contractPrice = await smartContract.getDAI_USD();
          setStoredPrice(`$${parseInt(contractPrice) / 100000000}`);
          break;
        case "ETH/USD":
          contractPrice = await smartContract.getETH_USD();
          setStoredPrice(`$${parseInt(contractPrice) / 100000000}`);
          break;
        case "LINK/USD":
          contractPrice = await smartContract.getLINK_USD();
          setStoredPrice(`$${parseInt(contractPrice) / 100000000}`);
          break;
        case "BTC/ETH":
          contractPrice = await smartContract.getBTC_ETH();
          setStoredPrice(
            `${parseInt(contractPrice) / 1000000000000000000} ETH`
          );
          break;
        default:
          console.error("Invalid pair:", pair);
      }
    } catch (error) {
      console.error("Error fetching pair:", pair, error);
    }
  };

  const handleChange = (e) => {
    setSelectedPair(e.target.value);
    setStoredPrice("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getPair(selectedPair);
  };

  return (
    <div className="container">
      <div>
        <Card
          style={{ width: "32rem" }}
          className="mt-5 shadow bg-body rounded"
        >
          <Card.Header as="h5">Select a Conversion Pair</Card.Header>
          <Card.Body>
            <div className="col">
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="pairs">
                  {["BTC/ETH", "DAI/USD", "ETH/USD", "LINK/USD"].map(
                    (pairValue) => (
                      <Form.Check
                        key={pairValue}
                        value={pairValue}
                        type="radio"
                        onChange={handleChange}
                        aria-label={`radio-${pairValue}`}
                        label={pairValue}
                        checked={selectedPair === pairValue}
                      />
                    )
                  )}
                </Form.Group>
                <div className="mt-5">
                  <Button type="submit" size="sm" variant="outline-primary">
                    Get price value
                  </Button>
                </div>
              </Form>
            </div>
          </Card.Body>
        </Card>
        <div>
          <Card
            style={{ width: "32rem" }}
            className="mt-5 shadow bg-body rounded"
          >
            <Card.Header as="h5">Result</Card.Header>
            <Card.Body>
              <div className="col">
                <h5>
                  {selectedPair
                    ? `${selectedPair} => ${storedPrice}`
                    : "Please select a pair"}
                </h5>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
