# IPO Management System

This project is a backend application for managing IPO (Initial Public Offering) statuses, including:
- PAN management
- IPO selection
- Allotment check

It interacts with external APIs for fetching IPO details and verifying IPO allotments based on PAN numbers.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
  - [PAN Management](#pan-management)
  - [IPO Management](#ipo-management)
  - [IPO Allotment Check](#ipo-allotment-check)
- [Usage](#usage)

---

## Features
- Add PAN details
- Fetch available IPOs
- Select IPOs for a specific PAN
- Check IPO allotment status for selected IPOs

---

## Technologies Used
- **Node.js**: Runtime environment
- **Express.js**: Web framework
- **Mongoose**: MongoDB object modeling
- **Axios**: HTTP requests
- **xml2js**: XML to JSON parsing
- **MongoDB**: Database

---

## Setup and Installation

### Prerequisites
Ensure you have the following installed:
- Node.js (v16 or above)
- MongoDB (local or cloud instance)

### Steps

1. **Clone the repository:**
   ```bash
   git clone <repository_url>
   cd <repository_directory>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up the environment variables:**
   Create a `.env` file in the root directory and add the following:
   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/ipo-management
   ```

4. **Start the server:**
   ```bash
   npm start
   ```
   The server will run on `http://localhost:3000` by default.

5. **Test the APIs:**
   Use tools like Postman or curl to interact with the APIs.

---

## Environment Variables

| Variable    | Description                      | Default                     |
|-------------|----------------------------------|-----------------------------|
| `PORT`      | The port the server runs on      | 3000                        |
| `MONGO_URI` | MongoDB connection string        | mongodb://localhost:27017/ipo-management |

---

## API Documentation

### PAN Management

#### Add PAN
- **Endpoint:** `POST /api/pan`
- **Description:** Adds a new PAN number.
- **Request Body:**
  ```json
  {
      "name": "John Doe",
      "panNumber": "ABCDE1234F"
  }
  ```
- **Response:**
  ```json
  {
      "message": "PAN added successfully",
      "data": {
          "_id": "<generated_id>",
          "name": "John Doe",
          "panNumber": "ABCDE1234F",
          "__v": 0
      }
  }
  ```

---

### IPO Management

#### Fetch IPO List
- **Endpoint:** `GET /api/ipo/list`
- **Description:** Fetches the list of available IPOs.
- **Response:**
  ```json
  {
      "message": "IPO list fetched successfully",
      "data": [
          {
              "id": "11796",
              "name": "Inventurus Knowledge Solutions Limited (IKS Health) - IPO"
          },
          {
              "id": "11795",
              "name": "One Mobikwik Systems Limited – IPO"
          }
      ]
  }
  ```

#### Select IPO
- **Endpoint:** `POST /api/ipo/select`
- **Description:** Selects an IPO for a specific PAN number.
- **Request Body:**
  ```json
  {
      "ipoId": 11796,
      "ipoName": "Inventurus Knowledge Solutions Limited (IKS Health) - IPO",
      "panNumber": "ABCDE1234F"
  }
  ```
- **Response:**
  ```json
  {
      "message": "IPO selected successfully",
      "data": {
          "_id": "<generated_id>",
          "ipoId": 11796,
          "ipoName": "Inventurus Knowledge Solutions Limited (IKS Health) - IPO",
          "panNumber": "ABCDE1234F",
          "status": "Not Checked",
          "lastChecked": "2024-12-21T00:00:00.000Z",
          "__v": 0
      }
  }
  ```

---

### IPO Allotment Check

#### Check Allotment
- **Endpoint:** `GET /api/ipo/allotment-check`
- **Description:** Checks the allotment status for all PAN numbers associated with a specific IPO.
- **Query Parameters:**
  - `ipoId` (required): The ID of the IPO to check.
- **Response:**
  ```json
  {
      "message": "Allotment check completed",
      "data": [
          {
              "_id": "<generated_id>",
              "ipoId": 11796,
              "ipoName": "Inventurus Knowledge Solutions Limited (IKS Health) - IPO",
              "panNumber": "ABCDE1234F",
              "status": "Allotted",
              "lastChecked": "2024-12-21T00:00:00.000Z",
              "__v": 0
          },
          {
              "_id": "<generated_id>",
              "ipoId": 11796,
              "ipoName": "Inventurus Knowledge Solutions Limited (IKS Health) - IPO",
              "panNumber": "XYZDE5678G",
              "status": "Not Allotted",
              "lastChecked": "2024-12-21T00:00:00.000Z",
              "__v": 0
          }
      ]
  }
  ```

---

## Usage

1. Start the server using `npm start`.
2. Use Postman or similar tools to test the APIs listed above.
3. Monitor logs for any issues during API interactions.

