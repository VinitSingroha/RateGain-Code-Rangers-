import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useEffect } from 'react';
import './App.css';


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  // useEffect( ()  => {

//     const resp = [
//       {
//         'Blog Title': "Taylor Swift's Spectacular Tour Sparks Unprecedented Hotel Booking Surge in Buenos Aires",
//         'Blog Image URL': 'https://rategaincom.wpenginepowered.com/wp-content/uploads/2023/11/swiftie-effect-buenos-aires-scaled.jpg',
//         'Blog URL': 'https://rategain.com/blog/swiftie-effect-in-buenos-aires/',
//       },
//       {
//         'Blog Title': 'Why is Security Critical for a Booking Engine?',
//         'Blog Image URL': 'https://rategaincom.wpenginepowered.com/wp-content/uploads/2023/05/Why-is-Security-Critical-for-a-Hotel-Booking-Engine-scaled.webp',
//         'Blog URL': 'https://rategain.com/blog/why-is-security-critical-for-a-booking-engine/',
//       },
//       {
//         'Blog Title': 'Digital Hospitality: No Longer An Oxymoron',
//         'Blog Image URL': 'https://rategaincom.wpenginepowered.com/wp-content/uploads/2022/11/Digital-Hosp_Banner-1-scaled.jpg',
//         'Blog URL': 'https://rategain.com/blog/digital-hospitality-no-longer-an-oxymoron/',
//       },
//     ];
  
//     setSearchResults(resp);

//   })
  const handleSearch = async () => {
    // Implement the logic to send data to Flask server and get the response
    // Update the searchResults state with the response
    // For now, let's assume you have the response in the following format
    // var results = []
    // alert(searchTerm)
    const data =  {'query' : searchTerm}
    try{
      //  ??? (searchTerm)
          const response=await axios.post('http://127.0.0.1:5000/search', data)
          console.log(response)
          //alert(response)
          // const results = response.map(entry => ({
          //   'Blog Title': entry['Blog Title'],
          //   'Blog Image URL': entry['Blog Image URL'],
          //   'Blog URL': entry['Blog URL'],
          // }));

        // setSearchResults(results);
        // localStorage.setItem('token', resp.data.token);
        // localStorage.setItem('id', resp.data);
        // const temp = resp.data
        // console.log(temp)
        // window.location.reload()
    }catch (error) {
        console.error(error.response.data);
    }
    const resp = [
      {
        'Blog Title': "Taylor Swift's Spectacular Tour Sparks Unprecedented Hotel Booking Surge in Buenos Aires",
        'Blog Image URL': 'https://rategaincom.wpenginepowered.com/wp-content/uploads/2023/11/swiftie-effect-buenos-aires-scaled.jpg',
        'Blog URL': 'https://rategain.com/blog/swiftie-effect-in-buenos-aires/',
        
      },
      {
        'Blog Title': 'Why is Security Critical for a Booking Engine?',
        'Blog Image URL': 'https://rategaincom.wpenginepowered.com/wp-content/uploads/2023/05/Why-is-Security-Critical-for-a-Hotel-Booking-Engine-scaled.webp',
        'Blog URL': 'https://rategain.com/blog/why-is-security-critical-for-a-booking-engine/',
      },
      {
        'Blog Title': 'Digital Hospitality: No Longer An Oxymoron',
        'Blog Image URL': 'https://rategaincom.wpenginepowered.com/wp-content/uploads/2022/11/Digital-Hosp_Banner-1-scaled.jpg',
        'Blog URL': 'https://rategain.com/blog/digital-hospitality-no-longer-an-oxymoron/',
      },
    ];

    setSearchResults(resp);
  };

  return (
    <div>
    <div
      style={{
        // backgroundImage: `url('https://www.equitybulls.com/equitybullsadmin/uploads/Rate%20Gain%20Travel%20Technologies%20Limited%204.jpg')`,
        backgroundSize: 'cover',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <div class="background-image"></div>

      {/* <h1 style={{ color: 'black' }}>Find the blog you need</h1> */}
      
      <div className="input-group mb-3">
        
        <input
          type="text"
          className="form-control"
          placeholder="Search for blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-primary" type="button" onClick={handleSearch}>
          Search
        </button>
      </div>


      <div className="card-group">
        {searchResults.map((blog, index) => (
          <div key={index} className="card">
            <img src={blog['Blog Image URL']} className="card-img-top" alt={blog['Blog Title']} />
            <div className="card-body">
              <h5 className="card-title">{blog['Blog Title']}</h5>
              <a href={blog['Blog URL']} className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default App;
