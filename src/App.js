import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import { DateTime } from 'luxon';
import sunimg from './pics/download-removebg-preview.png';
import {FiSearch} from 'react-icons/fi'
import {GrLocation } from 'react-icons/gr'
import {IoIosSunny} from 'react-icons/io'
import timeDisplay from './component/timeDisplay.jsx'
// import MapContainer from './component/mapContainer/mapContainer';

function App() {
  const[lat , setlat] = useState(0);
  const[lon , setlon] = useState(0);
  const[weatherdatas , setweatherdatas] = useState({})
  const[city , setcity] = useState("london");
  const[flag ,setflag] = useState(1)
 
  // const getlocation = async()=>{
  //   window.navigator.geolocation.getCurrentPosition(async(position)=>{
  //     // console.log(position.coords.latitude);
      
  //    setlat(position.coords.latitude);
  // //  console.log( position.coords.longitude);
  //    setlon( position.coords.longitude);
  //     await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=67943591f710ebe0db7e30dc2db51fbf`);
  //   }
  // );
  // }

  const fetchWeather = async()=>{
    try{
      
      
      
      window.navigator.geolocation.getCurrentPosition((position)=>{
        // console.log(position.coords.latitude);
        
       setlat(position.coords.latitude);
    //  console.log( position.coords.longitude);
       setlon( position.coords.longitude);
      
      }

    );
       

      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon }&appid=67943591f710ebe0db7e30dc2db51fbf&units=metric`);
      // console.log(res.data);
      console.log(lat);
      console.log(lon);
      setweatherdatas(res.data)
    }
    catch(err){
      console.log(err);
    }

  }

  const search = async()=>{
    try{
      
      // setcity(document.getElementById('city').value)
      
      console.log(city);
      
      const res = await axios.get(` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=67943591f710ebe0db7e30dc2db51fbf&units=metric`);
      // console.log(res.data);
      console.log(city);
      setweatherdatas(res.data)
      document.getElementById("citys").value ="";

   
    }
    catch(err){
      console.log(err);
    }

  }
 console.log(weatherdatas);
 let temp = 0;
 let wind_speed=0;
 let humidity =0;
 let cityname =city;
  let timeZone =0;
  let temp_min =0;
   const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
 try{
  temp = weatherdatas.main.temp;
  humidity =weatherdatas.main.humidity;
 wind_speed =weatherdatas.wind.speed;
 cityname =weatherdatas.name;
 timeZone =weatherdatas.timezone;
 temp_min = weatherdatas.main.temp_min;
 console.log(timeZone);
 }
 catch(e){
console.log(e);
 }

  useEffect(()=>{ 
    fetchWeather(); 
    search()
  },[])

  return (
    <div className="  bg-cover bg-no-repeat bg-center  h-[100vh] bg-[url(https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?cs=srgb&dl=pexels-andre-furtado-1162251.jpg&fm=jpg)]" >
      <div className='md:w-[40%] flex flex-col justify-between ease-linear duration-500 w-[100%] absolute bg-[#0101016a] rounded-lg shadow-lg    h-[100vh] right-0 top-0 '>
        <div>
          <form className='flex justify-center m-4'>
              <input className='focus:outline-none font-serif bg-[#0101016a] w-[40%] md:mr-8 mt-2 p-3 outline-none text-white  font-bold '
                type="text"
                name="" 
                id="city"
                autoComplete="new-password"  
                onChange={(e)=>{
                let ct ="";
                ct+=e.target.value
                console.log(ct);
                
                setcity(ct);

              }}
            
              />
                <div  onClick={async(e)=>
                  { search();
                    e.preventDefault();
                  }} 
                  className=' p-3 rounded-full  m-2  text-center  bg-blue-300  hover:bg-green-400'
                  ><FiSearch color='text-white'/></div>
                <div onClick={
                  (e)=>{
                      e.preventDefault();
                      fetchWeather();
                  }
                }
                className='p-3 rounded-full  m-2  text-center  bg-blue-300 hover:bg-green-400' >
                  <GrLocation/>
                </div>
                
          </form>
        </div>    
          {/* <div className='flex flex-col justify-between'> */}
              <div >
                    <span
                     className='mx-auto ' > 
                     <IoIosSunny className='mx-auto   animate-spin-slow' color='orange' size={150}></IoIosSunny>
                    </span>
              </div >
              <div className=' wi divide-y divide-[#b8b8b8]   p-4 md:ml-16  '>
                  <h1 className='p-4 block  text-white'> <span className='text-2xl mr-5 md:mr-28'>Temperature</span> {temp} <span className='ml-2'>C</span></h1>
                  <h1 className='p-4 text-white'>  <span className='text-2xl mr-5 md:mr-16'>Min Temperature</span> {temp_min} <span  className='ml-2'>C</span></h1>
                  <h1 className='p-4 text-white'> <span className='text-2xl mr-5 md:mr-40'>humidity</span> {humidity}</h1>
                  <h1 className='p-4 text-white'> <span className='text-2xl mr-5 md:mr-28'>Wind Speed</span> {wind_speed} <span  className='ml-2'>km/hr</span></h1>
              </div>
          {/* </div> */}
      </div>
      <div className=' hidden ease-linear duration-500  md:block md:w-[60%] h-[100vh] absolute left-0 top-0 md:flex md:flex-col justify-between'>
            <div className='' >
                <h1 className='hidden md:block text-5xl text-white m-6 '>{cityname}</h1>
            </div>
            <div className=' m-10 flex justify-between' >
                <div>
                  <span className='hidden md:block text-white '>{new Date().getHours()}:{new Date().getMinutes()} :{new Date().getSeconds()}</span>
                </div>
                <div className='flex'>
                <span className='text-7xl text-white '>{temp} <sup className='text-2xl align-top'>0</sup> <span>C</span></span>
                </div>
            </div>
      </div>
      {/* <MapContainer/> */}
    </div>
  );
}

export default App;  
