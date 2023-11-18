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

Feel free to explore the codebase for more details on the integration of WebRTC and PeerJS. If you have any questions or need further assistance, don't hesitate to reach out.


Bonus Features
In addition to the core requirements, the project includes the following bonus features:

Audio muting and video pausing toggles.
Support for screen sharing in addition to video and audio calls.
Implementation of error handling for graceful handling of connection issues.

