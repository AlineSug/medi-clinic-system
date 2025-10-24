# medi-clinic-system
Medical clinic system backend built with Node.js, Express, and MongoDB. Includes entities for Doctor, Patient, Appointment, and Prescription. Doctor with valid credential can make  login, create prescriptions and generate PDFs for printing . Authentication and Next.js frontend integration coming soon.

I'm developing this project for a medical clinic system. It’s still in progress — for now, this is the backend.
I’m using Node.js and Express, with a local MongoDB database, along with other dependencies.
In this system, it’s possible to register the following entities:
Doctor (with name, login, password, and medicalRegistration),
Patient,
Appointment,
Prescription.
The project is organized using a modular folder structure, including Models, Repositories, Routes, Services, and a Database folder.
I’ve tested the basic CRUD operations through Postman, running both the server and the local MongoDB database in the terminal — everything worked correctly.
Next, I’m going to implement an authentication system for login.
Only a Doctor with valid credentials will be able to register Patients, Appointments, and Prescriptions using an authentication token.
The Doctor will also be able to create a prescription for medications and generate a PDF file for printing.
After that, I’ll connect the backend with a Next.js frontend.
