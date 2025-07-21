import { useState } from "react";
import Input from "./Input";

const JobApplicationForm = () => {
    const [firstName, setFirstName] = useState("Renato")
    const [lastName, setLastName] = useState("Bakker")
    const [position, setPosition] = useState("Student")
    const [telephone, setTelephone] = useState("019443322322")
    const [email, setEmail] = useState("renato@renato.com")
    const [startDate, setStartDate] = useState("09.12.2024")
    const [salary, setSalary] = useState('3000')
  return (
    <form>
      <Input
        type="text"
        val={firstName}
        setter={setFirstName}
        text="First name"
        
      />
      <Input type="text" val={lastName} setter={setLastName} text="Last name" />
      <Input type="text" val={position} setter={setPosition} text="Position" />
      <Input
        type="tel"
        val={telephone}
        setter={setTelephone}
        text="Telephone"
      />
      <Input type="email" val={email} setter={setEmail} text="E-mail address" />
      <Input
        type="date"
        val={startDate}
        setter={setStartDate}
        text="Starting date"
      />
      <Input
        type="text"
        val={salary}
        setter={setSalary}
        text="Salary request"
      />
    </form>
  );
};

export default JobApplicationForm;