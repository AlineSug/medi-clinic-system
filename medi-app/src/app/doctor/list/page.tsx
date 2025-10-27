"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";


interface Doctor {
    _id: string;
    name: string;
    medicalRegistration: string;
    email: string;
    phone: string;
}

export default function DoctorList() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://127.0.0.1:3001/doctors", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("token") || "",
      },
    })
      .then((response) => response.json())
      .then((data) => setDoctors(data)) 
      .catch((err) => setError('Error to found Doctors'+ err));
  }, []);

  const deleteDoctor = async (id: string) => {
    const add = await fetch(`http://127.0.0.1:3001/doctors/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("token") || "",
      },
    });
    const content = await add.json();
    console.log(content);
    if (content.login) {
      window.location.reload();
    } else {
      setError(content.error);
    }
  };
  return (
    <>
      <Link
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        href="/home"
      >
        Voltar
      </Link>
      <table>
        <thead>
          <tr>
            <td className="border border-slate-300">Name</td>
            <td className="border border-slate-300 text-center">Login</td>
            <td className="border border-slate-300 text-center">Registro Médico</td>
            <td className="border border-slate-300 text-center">Email</td>
            <td className="border border-slate-300 text-center">Telefone</td>
          </tr>
        </thead>

        <tbody className="doctors" id="doctors">
            {doctors.map((doctor: Doctor) => {
                return(
                    <tr key={doctor._id}>
                    <td className='border border-slate-300'>{doctor.name}</td>
                    <td className='border border-slate-300'>{doctor.medicalRegistration}</td>
                    <td className='border border-slate-300 text-center'>{doctor.email}</td>
                    <td className='border border-slate-300 text-center'>{doctor.phone}</td>
                    <td className='border border-slate-300 text-center'>
                        <button onClick={() => deleteDoctor(doctor._id)} className='bg-red-500 p-2 inline-block text-white text-sm'>Delete</button>
                    </td>
                    <td className='border border-slate-300 text-center'>
                        <Link href={`/doctor/edit/${doctor._id}`} className='bg-yellow-500 p-2 inline-block ml-3 text-white text-sm'>Edit</Link>
                    </td>
                    </tr>
                )
})}
        </tbody>
      </table>
      {error && <div className="text-red-500">{error}</div>}
    </>
  );
}
