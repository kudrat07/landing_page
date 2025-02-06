# IT Consulting Firm Landing Page

## Overview

This repository contains the source code for the landing page of an IT Consulting Firm. The page is designed to be modern, responsive, and user-friendly, offering key information about the company's services, approach, and contact details.

The website is designed to showcase the following sections:

- **About Us**: Brief information about the company's mission and vision.
- **Services**: A detailed breakdown of the services provided by the firm.
- **Why Choose Us?**: A compelling argument on why clients should opt for the firm's services.
- **How It Works**: A step-by-step guide on the consulting process.
- **Contact Us**: A contact form allowing visitors to reach out directly.

This landing page can be integrated with Google Sheets for dynamic content and to store contact form submissions.

## Features

- **Responsive Design**: The website adjusts seamlessly to various screen sizes, including mobile and tablet devices.
- **Modern UI/UX**: The page features a clean, professional design to ensure the user experience is smooth and intuitive.
- **Contact Form**: A form to allow potential clients to easily get in touch.
- **Google Sheets Integration**: Dynamic data from Google Sheets is fetched to display services and other information.

## Technologies Used

- **Frontend**:
  - HTML5
  - CSS3 (Module CSS for styling)
  - JavaScript (React for dynamic functionality)

- **Backend**:
  - Google Apps Script (for data storage and retrieval from Google Sheets)

- **Deployment**:
  - Vercel for hosting the site
  - Google Sheets for dynamic content management

## How It Works

### Content Management via Google Sheets

The content for services and contact form data is dynamically fetched from Google Sheets using Google Apps Script. The script is deployed as a web app and returns data in JSON format to the landing page.

### Contact Form

The contact form is designed to collect name, email, and message from users. Upon submission, the form data is sent directly to a Google Sheet, where it is stored for easy management and follow-up.
