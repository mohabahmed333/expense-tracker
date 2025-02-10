Expense Tracker App

Description
An expense tracking application.

This application allows users to track their expenses efficiently. Users can:

Add an expense (with name, amount, and category,date,paymentMethod,notes).
View a list of expenses with a total amount displayed.
Delete an expense from the list.

Technologies Used

React (UI framework)
TypeScript (Static typing)
Zustand (State management)
React Router (Navigation)
React Hook Form & Yup (Form handling & validation)
TailwindCSS (Styling)
JSON Server (Mock backend)
React Query for caching & fetching expense data

Installation
Make sure you have Node.js installed on your system.

# Clone the repository (if applicable)

git clone <https://github.com/mohabahmed333/expense-tracker.git>

# Navigate to the project directory

cd expense-tracker

# Install dependencies

npm install

Running the Application
Start the Backend (JSON Server)
npm run json-server

Start the Frontend
npm run dev

Project Structure

/expense-tracker
│── src/
│ ├── components/ # UI components
│ ├── pages/ # Application pages
│ ├── store/ # Zustand state management
│ ├── utils/ # Utility functions
│ ├── App.tsx # Main application entry
│── public/ # Static assets
│── package.json # Project dependencies
│── tailwind.config.js # Tailwind CSS configuration
│── tsconfig.json # TypeScript configuration
