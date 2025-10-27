"use client"
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {

    const router = useRouter();


    const getAuthToken = () => {
        const token = sessionStorage.getItem("token");
        if(!token) {
          router.push('/login');
          return null;
        }
        return token;
      }

      const authToken = getAuthToken();
      if(!authToken) return;

    return (
        <>
        <h1>Home</h1>
        <div>
            <Link href="/doctor/create">Create new doctor</Link>
            <br></br>
            <Link href="/doctor/list">List All Doctors</Link>
            <br></br>
            <Link href="/pacient/create">Create new Pacient</Link>
            <br></br>
            <Link href="/appointment/create">Create new Appointment</Link>
            <br></br>
            <Link href="/prescription/create">Create new Prescription</Link>
        </div>
        </>
    );
    
}