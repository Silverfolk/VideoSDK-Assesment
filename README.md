# VideoSDK Assessment Project

Welcome to the VideoSDK Assessment Project! This project is a P2P WebRTC Video Call System implemented with technologies such as Express, Redux, React, PeerJS, and WebSockets. The main goal of this project is to facilitate video chatting and screen sharing.

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Silverfolk/VideoSDK-Assesment
Install Dependencies:

    npm install

Create Environment Variables:

Create a .env file in the root directory.
Add the following keys and replace the placeholder values:

      MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret_key

Project Overview
This project is a P2P WebRTC Video Call System with the following features:

Frontend:
Built with React.js.
User interface with two video elements displaying local and remote video streams.
Unique user ID input for each participant.
WebSocket connection for exchanging signaling data.

Backend:
Developed using Node.js.
WebSocket server for handling connections and managing signaling between clients.
Signaling protocol (JSON messages) for WebRTC connection information exchange.
User authentication and assignment of unique user IDs.
WebRTC connection for audio and video streaming.

## WebRTC and PeerJS Integration

This project leverages WebRTC for real-time media streaming, enabling features such as video calls and screen sharing. The integration of WebRTC involves several key components:

- **WebRTC API:**
  - Utilizes the WebRTC API, specifically `getUserMedia`, to access the user's camera and microphone for media streaming.

- **SDP Offers and Answers Exchange:**
  - Implements the exchange of Session Description Protocol (SDP) offers and answers between both clients. This negotiation process is crucial for establishing a WebRTC connection.

- **ICE Candidates Exchange:**
  - Facilitates the exchange of Interactive Connectivity Establishment (ICE) candidates. This process helps establish a direct peer-to-peer (P2P) connection, ensuring efficient communication between participants.

- **Display Remote Participant's Video Stream:**
  - Renders the remote participant's video stream on the user interface, providing a seamless and interactive video chat experience.

In addition to WebRTC, this project utilizes PeerJS, a library built on top of WebSocket, to simplify the process of setting up WebRTC connections. PeerJS abstracts many of the complexities of WebRTC, making it easier to integrate peer-to-peer communication into the application.

**How WebRTC and PeerJS are Linked:**
- PeerJS acts as a layer of abstraction, handling the signaling process through WebSocket, which is crucial for WebRTC setup.
- WebSocket communication facilitated by PeerJS helps exchange signaling data, including SDP offers, answers, and ICE candidates, between clients.
- The integration of PeerJS simplifies the overall WebRTC implementation, providing a cleaner and more developer-friendly interface for establishing and managing peer connections.

![VideoSDK](https://github.com/Silverfolk/WatchU/assets/71553152/031dec83-6f6d-423f-b147-4e94f7fb11b9)


Result :
![3](https://github.com/Silverfolk/WatchU/assets/71553152/2485391c-8b5f-4fbe-8e00-3779592d474a)
![4](https://github.com/Silverfolk/WatchU/assets/71553152/021783c0-f3a4-4184-9dae-739252f5ef71)
![5](https://github.com/Silverfolk/WatchU/assets/71553152/8c918177-e54a-42b9-877c-7043bc6a7c6d)
![6](https://github.com/Silverfolk/WatchU/assets/71553152/eb69a1a7-0a07-4899-9759-bb6ab741475f)
![7](https://github.com/Silverfolk/WatchU/assets/71553152/e487ffa5-63d2-4a61-8308-5cb0220c730d)
![8](https://github.com/Silverfolk/WatchU/assets/71553152/21e53aaa-9616-46cd-a8ae-8b1b584e3d1a)
![1](https://github.com/Silverfolk/WatchU/assets/71553152/80e3fcc5-c93e-4c3b-ad0e-6c9396e639c0)
![2](https://github.com/Silverfolk/WatchU/assets/71553152/911a8435-614b-4094-9cf8-02b030de87f0)

Bonus Features
In addition to the core requirements, the project includes the following bonus features:

Audio muting and video pausing toggles.
Support for screen sharing in addition to video and audio calls.
Implementation of error handling for graceful handling of connection issues.

