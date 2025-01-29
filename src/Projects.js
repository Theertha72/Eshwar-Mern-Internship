import React from "react";
import "./App.css";

const Projects = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <ul>
        <h3>Fake news detection </h3>
        <li>Fake news detection system involves several steps, including data collection, data preprocessing,
        feature extraction, model training, and evaluation. Below is an outline of how to approach building 
        a fake news detection system using Python, with an example implementation using a simple machine learning
         model.Fake news refers to false or misleading information presented as news, often with the intent to 
         deceive readers. It spreads misinformation, creates confusion, and can have far-reaching consequences in 
         politics, health, finance, and society at large.
        </li>
        <h3>Medical store Management system </h3>
        <li>Medical stores management in hospitals is a tedious and time consuming chore with limited
        resources tasked for the purpose and poor penetration of Information Technology. The process of automation
        is slow paced due to various inherent factors and is being challenged by the increasing inventory loads and
        escalating budgets for procurement of drugs.A Medical Store Management System is a software solution designed
        to streamline the operations of a medical store or pharmacy. It helps manage inventory, track sales, handle
        purchases, monitor customer records, and generate reports efficiently. This system aims to reduce manual errors,
        improve accuracy, and save time in day-to-day operations.
        </li>
      </ul>
    </div>
  );
};

export default Projects;