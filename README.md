# Alumni Connect Platform

Alumni Connect is a comprehensive, full-stack web application designed to bridge the gap between current students and alumni of the Prasad V Potluri Siddhartha Institute of Technology. It serves as a dynamic community hub for networking, mentorship, and career guidance, featuring role-based access for both administrators and general users.

This project was built with a modern, serverless architecture, leveraging the power of React for the frontend and Google Firebase for all backend services.

---

## ✨ Features

The platform is rich with features designed to foster a vibrant and supportive alumni network:

* **Role-Based Access Control:**
    * **Admin View:** Full administrative privileges, including adding new students, alumni, and events. Admins can view all data and manage platform content.
    * **User View:** A view-only experience for students and alumni to consume content, participate in discussions, and view directories.

* **Interactive Dashboard:**
    * Admins get an at-a-glance overview of platform statistics.
    * **Data-Driven Charts:** Visualizations for "Sessions by Year" and "Current Alumni Status" are generated dynamically from live Firestore data.

* **Community Discussion Forums:**
    * Users can start new discussion threads and post replies.
    * Real-time updates ensure a live, interactive forum experience.

* **Interaction Sessions & Events:**
    * Admins can create and manage various types of events (Alumni Meetups, Webinars, Panel Discussions).
    * Users can view a list of all upcoming and past sessions.

* **AI-Powered Chatbot:**
    * An integrated chatbot, powered by the **Gemini API**, provides instant assistance.
    * **UI Navigation:** The chatbot can understand user intent and navigate them to the correct page (e.g., "show me the alumni list").

* **Dynamic Data Management:**
    * All data (students, alumni, events, forums) is stored in and retrieved from a **Cloud Firestore** database in real-time.
    * Forms for adding new data are seamlessly integrated and update the database instantly.

---

## 🛠️ Technology Stack

This project uses a modern, serverless technology stack for rapid development and scalability.

* **Frontend:**
    * **React:** A component-based JavaScript library for building the user interface.
    * **Tailwind CSS:** A utility-first CSS framework for styling.
    * **Recharts:** A composable charting library for data visualization.
    * **Lucide React:** A library for clean and beautiful icons.

* **Backend & Database:**
    * **Google Firebase:** The core of the backend infrastructure.
        * **Cloud Firestore:** A real-time, NoSQL database for all data storage.
        * **Firebase SDK:** Used for all communication between the React app and the database.

* **AI Services:**
    * **Google Gemini API:** Powers the intelligent, navigating chatbot.

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js and npm (or yarn) installed on your machine.
* A free Google Firebase project with Cloud Firestore enabled.

### Installation

1.  **Clone the repo**
    ```sh
    git clone [https://github.com/your-username/alumni-connect.git](https://github.com/your-username/alumni-connect.git)
    ```

2.  **Navigate to the project directory**
    ```sh
    cd alumni-connect
    ```

3.  **Install NPM packages**
    ```sh
    npm install
    ```

4.  **Configure Firebase**
    * Open `src/App.js` (or `src/firebase.js` if you have a separate config file).
    * Replace the placeholder `firebaseConfig` object with your own project's configuration keys from the Firebase console.

    ```javascript
    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_AUTH_DOMAIN",
      // ... and so on
    };
    ```

5.  **Run the application**
    ```sh
    npm start
    ```

The application will now be running on `http://localhost:3000`.
