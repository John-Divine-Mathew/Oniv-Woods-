import { useState } from "react";

const Enroll = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Enrollment Submitted Successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-700">
          Enrollment Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            required
          />

          <select
            name="course"
            value={form.course}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            required
          >
            <option value="">Select Course</option>
            <option>Wood Workshop Training</option>
            <option>Simulation Training</option>
            <option>Internship Program</option>
            <option>Live Projects</option>
          </select>

          <textarea
            name="message"
            placeholder="Your Message (optional)"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg h-28"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-xl text-lg hover:bg-green-800 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Enroll;
