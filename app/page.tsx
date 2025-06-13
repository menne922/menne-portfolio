'use client';
import React from 'react';

export default function Home() {
  return (
    <main className="text-gray-800">
      <section className="min-h-screen flex flex-col items-center justify-center bg-white p-10" id="hero">
        <h1 className="text-4xl font-bold mb-4">Menne Burger</h1>
        <p className="text-xl">Senior Full Stack Engineer — Amsterdam, Netherlands</p>
        <p>Email: menneburger744@gmail.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/Menne-burger-6637882ba/" className="text-blue-500 underline">View Profile</a></p>
      </section>

      <section className="min-h-screen bg-gray-100 p-10" id="projects">
        <h2 className="text-3xl font-semibold mb-6">Selected Projects</h2>
        <ul className="list-disc pl-6 space-y-4">
          <li><strong>Crypto Trading Platform (Miro):</strong> Built with Angular 14 + NgRx and .NET 6 APIs, integrated Azure Functions, Blob Storage, and Key Vault.</li>
          <li><strong>Casino & Sportsbook Apps (ServiceNow):</strong> Dynamic forms using Angular 8+, ASP.NET Core 3.1, IdentityServer, optimized SQL queries.</li>
          <li><strong>E-Commerce & Gaming Platform (Uber):</strong> Migrated to Angular 15 and .NET Core microservices on AKS, with SignalR and Azure AD.</li>
        </ul>
      </section>

      <section className="min-h-screen bg-white p-10" id="tech">
        <h2 className="text-3xl font-semibold mb-6">Technology Stack</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Angular, RxJS, NgRx, TypeScript, SCSS</li>
          <li>ASP.NET Core, .NET 6/7, EF Core, Web API</li>
          <li>Azure Functions, App Services, Blob Storage, Azure DevOps</li>
          <li>SQL Server, PostgreSQL, MongoDB</li>
          <li>Swagger, Docker, Git, Postman, Selenium, CI/CD</li>
        </ul>
      </section>

      <section className="min-h-screen bg-gray-100 p-10" id="community">
        <h2 className="text-3xl font-semibold mb-6">Community Contributions</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Mentored 10+ devs in Angular & .NET Core</li>
          <li>Led code review sessions, shared architecture patterns</li>
          <li>Delivered workshops on CI/CD and Azure deployment</li>
        </ul>
      </section>
    </main>
  );
}