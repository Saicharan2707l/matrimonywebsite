import React from "react";
import { useState } from "react";
import "../styles/userDetails.css"

const UserDetail = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    DateOfBirth: "",
    PlaceOfBirth: "",
    FatherName: "",
    MotherName: "",
    Religion: "",
    Caste: "",
    SubCaste: "",
    Gothra: "",
    MaritalStatus: "",
    Height: "",
    Weight: "",
    BloodGroup: "",
    Complexion: "",
    PhysicalStatus: "",
    Education: "",
    Occupation: "",
    AnnualIncome: "",
    FamilyStatus: "",
    FamilyType: "",
    FamilyValues: "",
    FatherOccupation: "",
    MotherOccupation: "",
    NoOfBrothers: "",
    NoOfSisters: "",
    MarriedBrothers: "",
    MarriedSisters: "",
    Location: "",
    Country: "",
    State: "",
    District: "",
    Citizenship: "",
    Mobile: "",
    Email: "",
  });

  const [step, setStep] = useState(1);

  const handleChange = (input) => (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };
  const {
    name,
    age,
    DateOfBirth,
    PlaceOfBirth,
    Surname,
    FatherName,
    MotherName,
    Religion,
    Caste,
    SubCaste,
    Gothra,
    MaritalStatus,
    Height,
    Weight,
    BloodGroup,
    Complexion,
    PhysicalStatus,
    Education,
    Occupation,
    AnnualIncome,
    FamilyStatus,
    FamilyType,
    FamilyValues,
    FatherOccupation,
    MotherOccupation,
    NoOfBrothers,
    NoOfSisters,
    MarriedBrothers,
    MarriedSisters,
    Location,
    Country,
    State,
    District,
    Citizenship,
    Mobile,
    Email,
  } = formData;

  const sections = [

    <div className="section">
      <h1>Personal Details</h1>
      <div>
        <label htmlFor="name">Name :</label>
        <input
          type="text"
        //   placeholder="Name"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="age">Age :</label>
        <input
          type="text"
        //   placeholder="Age"
          name="age"
          value={age}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="DateOfBirth">Date Of Birth :</label>
        <input
          type="text"
        //   placeholder="DateOfBirth"
          name="DateOfBirth"
          value={DateOfBirth}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="PlaceOfBirth">Place Of Birth :</label>
        <input
          type="text"
        //   placeholder="PlaceOfBirth"
          name="PlaceOfBirth"
          value={PlaceOfBirth}
          onChange={handleChange}
        />
      </div>
      <button onClick={nextStep}>Next</button>
    </div>,
    <div className="section">
      <h1>Family Details</h1>
      <div >
        <label htmlFor="Surname">Surname :</label>
        <input
          type="text"
        //   placeholder="Surname"
          name="Surname"
          value={Surname}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="FatherName">Father's Name :</label>
        <input
          type="text"
        //   placeholder="FatherName"
          name="FatherName"
          value={FatherName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="MotherName">Mother's Name :</label>
        <input
          type="text"
        //   placeholder="MotherName"
          name="MotherName"
          value={MotherName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="Religion">Religion :</label>
        <input
          type="text"
        //   placeholder="Religion"
          name="Religion"
          value={Religion}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="Caste">Caste :</label>
        <input
          type="text"
        //   placeholder="Caste"
          name="Caste"
          value={Caste}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="SubCaste">SubCaste :</label>
        <input
          type="text"
        //   placeholder="SubCaste"
          name="SubCaste"
          value={SubCaste}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="Gothra">Gothra :</label>
        <input
          type="text"
        //   placeholder="Gothra"
          name="Gothra"
          value={Gothra}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="MaritalStatus">Marital Status :</label>
        <input
          type="text"
        //   placeholder="MaritalStatus"
          name="MaritalStatus"
          value={MaritalStatus}
          onChange={handleChange}
        />
      </div>
      <div className="btn-container">
    <button onClick={prevStep}>Prev</button>
    <button onClick={nextStep}>Next</button>
  </div>
    </div>,
    <div className="section">
      <h1>Physical Details</h1>
      <div >
        <label htmlFor="Height">Height :</label>
        <input
          type="text"
        //   placeholder="Height"
          name="Height"
          value={Height}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="Weight">Weight :</label>
        <input
          type="text"
        //   placeholder="Weight"
          name="Weight"
          value={Weight}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="BloodGroup">BloodGroup :</label>
        <input
          type="text"
        //   placeholder="BloodGroup"
          name="BloodGroup"
          value={BloodGroup}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="Complexion">Complexion :</label>
        <input
          type="text"
        //   placeholder="Complexion"
          name="Complexion"
          value={Complexion}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="PhysicalStatus">Physical Status :</label>
        <input
          type="text"
        //   placeholder="PhysicalStatus"
          name="PhysicalStatus"
          value={PhysicalStatus}
          onChange={handleChange}
        />
      </div>
      <div className="btn-container">
      <button onClick={prevStep}>Prev</button>
      <button onClick={nextStep}>Next</button>
      </div>
    </div>,
    <div className="section">
      <h1>Education Details</h1>

      <div>
        <label htmlFor="Education">Education :</label>
        <input
          type="text"
        //   placeholder="Education"
          name="Education"
          value={Education}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="Occupation">Occupation :</label>
        <input
          type="text"
        //   placeholder="Occupation"
          name="Occupation"
          value={Occupation}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="AnnualIncome">Annual Income :</label>
        <input
          type="text"
        //   placeholder="AnnualIncome"
          name="AnnualIncome"
          value={AnnualIncome}
          onChange={handleChange}
        />
      </div>
      <div className="btn-container">

      <button onClick={prevStep}>Prev</button>
      <button onClick={nextStep}>Next</button>
      </div>
    </div>,
    <div className="section">
      <h1>Family Details</h1>
      <div>
        <label htmlFor="FamilyStatus">Family Status :</label>
        <input
          type="text"
        //   placeholder="FamilyStatus"
          name="FamilyStatus"
          value={FamilyStatus}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="FamilyType">Family Type :</label>
        <input
          type="text"
        //   placeholder="FamilyType"
          name="FamilyType"
          value={FamilyType}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="FamilyValues">Family Values :</label>
        <input
          type="text"
        //   placeholder="FamilyValues"
          name="FamilyValues"
          value={FamilyValues}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="FatherOccupation">Father's Occupation :</label>
        <input
          type="text"
        //   placeholder="FatherOccupation"
          name="FatherOccupation"
          value={FatherOccupation}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="MotherOccupation">Mother's Occupation :</label>
        <input
          type="text"
        //   placeholder="MotherOccupation"
          name="MotherOccupation"
          value={MotherOccupation}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="NoOfBrothers">No Of Brothers :</label>
        <input
          type="text"
        //   placeholder="NoOfBrothers"
          name="NoOfBrothers"
          value={NoOfBrothers}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="NoOfSisters">No Of Sisters :</label>
        <input
          type="text"
        //   placeholder="NoOfSisters"
          name="NoOfSisters"
          value={NoOfSisters}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="MarriedBrothers">Married Brothers :</label>
        <input
          type="text"
        //   placeholder="MarriedBrothers"
          name="MarriedBrothers"
          value={MarriedBrothers}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="MarriedSisters">MarriedSisters :</label>
        <input
          type="text"
        //   placeholder="MarriedSisters"
          name="MarriedSisters"
          value={MarriedSisters}
          onChange={handleChange}
        />
      </div>
      <div className="btn-container">
      <button onClick={prevStep}>Prev</button>
      <button onClick={nextStep}>Next</button>
      </div>
    </div>,
    <div className="section">
      <h1>Location Details</h1>
      <div>
        <label htmlFor="Location">Location :</label>
        <input
          type="text"
        //   placeholder="Location"
          name="Location"
          value={Location}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="Country">Country :</label>
        <input
          type="text"
        //   placeholder="Country"
          name="Country"
          value={Country}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="State">State :</label>
        <input
          type="text"
        //   placeholder="State"
          name="State"
          value={State}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="District">District :</label>
        <input
          type="text"
        //   placeholder="District"
          name="District"
          value={District}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="Citizenship">Citizenship :</label>
        <input
          type="text"
        //   placeholder="Citizenship"
          name="Citizenship"
          value={Citizenship}
          onChange={handleChange}
        />
      </div>
      <div className="btn-container">
      <button onClick={prevStep}>Prev</button>
      <button onClick={nextStep}>Next</button>
      </div>
    </div>,
    <div className="section">
      <h1>Contact Details</h1>
      <div>
        <label htmlFor="Mobile">Mobile No :</label>
        <input
          type="text"
        //   placeholder="Mobile"
          name="Mobile"
          value={Mobile}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="Email">Email ID :</label>
        <input
          type="text"
        //   placeholder="Email"
          name="Email"
          value={Email}
          onChange={handleChange}
        />
      </div>
      <div className="btn-container">

      <button onClick={prevStep}>Prev</button>
      <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>,
  ];
  const percentageCompletion = Math.round(((step - 1) / sections.length) * 100);

  return (
    <div>
      <br />
      <br />
      {sections[step - 1]}
      {step !== 1 && <span>{percentageCompletion}% Profile Complete</span>}
    </div>
  );
};

export default UserDetail;
