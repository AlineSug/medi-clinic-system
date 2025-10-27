"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DoctorCreate() {

  const router = useRouter();

  const [name, setName] = useState<string>("");
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [medicalRegistration, setMedicalRegistration] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [IsAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  
 useEffect(() => {
    const verifyAuth = async () => {
      const token = sessionStorage.getItem("token");
      
      if (!token) {
        router.push('/login');
        return;
      }
        setIsAuthenticated(true);
        setIsLoading(false);
    };

      verifyAuth();
  }, [router]);


  const addDoctor = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if(name != "" && login != "" && password != "" && medicalRegistration != "" && phone != "" && email != ""){
      const formData = {
        name: name,
        login: login,
        password: password,
        medicalRegistration: medicalRegistration,
        phone: phone,
        email: email
      };
   
        const token = sessionStorage.getItem("token");
        if(!token) {
          router.push('/login');
          return;
        }
        try {
          const add = await fetch('http://127.0.0.1:3001/postDoctor',{
            method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        },
        body: JSON.stringify(formData)
          });
          const content = await add.json();

          if (content.login) {
            router.push('/home');
          }else{
            setError(content.error || 'Error to create Doctor');           
          }
        } catch (error) {
          setError('Error to connect with server'+ error);
        }
    } else {
      setError('Please fill all information to Register');
    }
  };
    if(isLoading) {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-xl">Checking the Authentication...</div>
        </div>
      );
    }
    if(!IsAuthenticated) {
      return null;
    }
  return (
    <>
      <Link
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        href="/home"
      >
        Voltar
      </Link>
      <form className="w-full" onSubmit={addDoctor}>
        <span className="font-bold text-yellow-500 py-2 block underline text-2xl">
          Formulário Criação de Médico
        </span>
        <div className="w-full py-2">
          <label htmlFor="" className="text-sm font-bold py-2 block">
            Nome
          </label>
          <input
            type="text"
            name="name"
            className="w-full border-[1px] border-gray-200 p-2 rounded-sm"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          />
        </div>
        <div className="w-full py-2">
          <label htmlFor="" className="text-sm font-bold py-2 block">
            Login
          </label>
          <textarea
            name="login"
            className="w-full border-[1px] border-gray-200 p-2 rounded-sm"
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setLogin(e.target.value)}
          />
        </div>
        <div className="w-full py-2">
          <label htmlFor="" className="text-sm font-bold py-2 block">
            Password
          </label>
          <textarea
            name="password"
            className="w-full border-[1px] border-gray-200 p-2 rounded-sm"
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setPassword(e.target.value)}
          />
        </div>
        <div className="w-full py-2">
          <label htmlFor="" className="text-sm font-bold py-2 block">
            Medical Registration
          </label>
          <textarea
            name="medicalRegistration"
            className="w-full border-[1px] border-gray-200 p-2 rounded-sm"
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMedicalRegistration(e.target.value)}
          />
        </div>
        <div className="w-full py-2">
          <label htmlFor="" className="text-sm font-bold py-2 block">
            Email
          </label>
          <textarea
            name="email"
            className="w-full border-[1px] border-gray-200 p-2 rounded-sm"
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setEmail(e.target.value)}
          />
        </div>
        <div className="w-full py-2">
          <label htmlFor="" className="text-sm font-bold py-2 block">
            Phone
          </label>
          <textarea
            name="phone"
            className="w-full border-[1px] border-gray-200 p-2 rounded-sm"
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setPhone(e.target.value)}
          />
        </div>
        <div className="w-full py-2">
          <button type="submit" className="w-20 p-2 text-white border-gray-200 border-[1px] rounded-sm bg-green-400">
            Submit
          </button>
        </div>
        <div>
          {error && (
            <div
              className="p-2 text-white border-gray-200 border-[1px] rounded-sm bg-red-400"
              style={{ color: "red" }}
            >
              {error}
            </div>
          )}
        </div>
      </form>
    </>
  );
}
