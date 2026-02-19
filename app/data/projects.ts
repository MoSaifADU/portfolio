export const projects = [
  {
    slug: "smart-waste-management",
    title: "Smart Waste Management System",

    shortDescription:
      "AI-powered waste collection system with route optimization and real-time tracking.",

    overview:
      "A mobile and web-based system designed to optimize waste collection operations using AI-driven routing, real-time tracking, and role-based access for users, drivers, and administrators.",

    problem:
      "Traditional waste collection relies on fixed schedules and manual reporting, leading to inefficient routes, delayed pickups, increased fuel consumption, and poor visibility for users and administrators.",

    features:
      [
        "User Role: Report full bins, view collection schedules, and track trucks in real-time.",
        "Driver Role: Receive optimized routes, update collection status, and navigate using integrated maps.",
        "Admin Role: Monitor operations, manage users and drivers, and analyze collection data through dashboards.",
      ],

      challenges:
      [
        "Integrating real-time data from multiple sources to ensure accurate bin status reporting.",
        "Developing AI algorithms for dynamic route optimization based on current traffic and bin statuses.",
        "Ensuring seamless communication between mobile and web platforms for different user roles.",
      ],
    
      solution:
      "The system introduces dynamic bin reporting, AI-based route optimization, and live truck tracking to improve operational efficiency, reduce costs, and enhance transparency.",

    tech: [
      "React Native",
      "Next.js",
      "Firebase",
      "Google Maps API",
      "Expo",
    ],

    video: "",
  },


{
  slug: "charity-service-mobile-app",
  title: "Charity Service Mobile Application",

  shortDescription:
    "An Android mobile application built for a charity organization to manage services efficiently, with offline support and real-time data synchronization.",

  overview:
    "This mobile application was developed for a charity organization to support service operations in areas with unreliable internet connectivity. The app allows staff and volunteers to perform essential tasks offline and automatically sync data once connectivity is restored. The application is fully deployed and currently live on the Google Play Store.",

  problem:
    "Charity operations in rural and low-connectivity areas often struggle with unreliable network access, making it difficult to record data, manage attendance, and maintain accurate records in real time.",

  solution:
    "The application was designed as an offline-first Android solution, enabling users to record data locally and seamlessly synchronize it with a central backend when an internet connection becomes available. Location data is captured where required to ensure transparency and accountability.",

  features: [
    "Offline-first functionality with automatic data synchronization",
    "Teacher/staff attendance submission with GPS location capture",
    "Role-based access for admins and staff",
    "Secure authentication and data storage",
    "Optimized for low-connectivity environments",
  ],

  tech: [
    "React Native",
    "Firebase",
    "Firestore",
    "Android",
    "GPS / Location Services",
  ],

  challenges: [
    "Designing reliable offline data storage and sync mechanisms",
    "Handling location capture accurately without constant internet access",
    "Ensuring data consistency during reconnection and synchronization",
  ],

  video: "",

  liveLink: "",
}
,

  {
  slug: "countries-flag-quiz",
  title: "Countries Flag Quiz Game",

  shortDescription:
    "An interactive web-based quiz game that tests users’ knowledge of world flags through a clean, responsive UI.",

  overview:
    "The Countries Flag Quiz Game is a web application built to help users test and improve their knowledge of world flags. The game presents a flag and challenges the user to identify the correct country from multiple choices, providing instant feedback and a smooth user experience.",

  problem:
    "Many geography learning tools are either outdated, visually cluttered, or not engaging enough for users to stay motivated while learning.",

  solution:
    "This project delivers a modern, responsive quiz experience using React and Tailwind CSS, focusing on simplicity, fast interactions, and an intuitive user interface to make learning fun and accessible.",

  features: [
    "Multiple-choice flag-based quiz",
    "Instant feedback for correct and incorrect answers",
    "Score tracking during gameplay",
    "Responsive design for desktop and mobile devices",
    "Clean and minimal UI for better focus",
  ],

  tech: [
    "React.js",
    "Tailwind CSS",
    "JavaScript",
    "REST API",
  ],



  video: "",

  challenges: [
    "Managing quiz state and score updates efficiently in React",
    "Ensuring responsive layout across different screen sizes",
    "Handling dynamic data rendering for flags and options",
  ],
}

];
