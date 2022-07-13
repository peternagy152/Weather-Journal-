
/* Global Variables */
const baseURL = "https://api.openweathermap.org/data/2.5/weather?q=";
const persolnalKey = "&appid=768898981cbcc889aeb02f64077307b1&units=metric";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth() + 1) + '/'+ d.getDate()+'/'+ d.getFullYear();


// Test Js File 
console.log("Here From App ");

// ------------------Post Data To Server  -------------
const postData = async ( url = '', data = {})=>{
    console.log(data);
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
     // Body data type must match "Content-Type" header        
      body: JSON.stringify(data), 
    });

      try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      }catch(error) { 
      console.log("error", error);
      }
  }
// -------------------------------Fetching APi -----------------------

    const getTemperature  = async (baseURL, userZip, persolnalKey)=>{
    
      const res = await fetch(baseURL+userZip+persolnalKey)
      try {
    
        const data = await res.json();
        return data;
      }  catch(error) {
        console.log("error", error);
        // appropriately handle the error
      }
    }
    //2172797
    // On button Click -> Call That Function 
function generateTemperature(){
    const response =  document.getElementById('feelings').value;
    const userZip =  document.getElementById('zip').value;
     data=  getTemperature(baseURL,userZip,persolnalKey)
// Read From Promises 
const GetTemp = async () => {
  const a = await data;
  //Store into the Server 
  postData('/addTemp' , {temp: a.main.temp , date: d , feelings:response })
};
GetTemp();
const delay = ms => new Promise(res => setTimeout(res, ms));
const delayUpdater = async() => {
    await delay(1000)
    updateUI();
}
delayUpdater();
}

// Function to Get ProjectData From Server 
async function fetchAsync (url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  }
  
  // Function to Update the UI 

const updateUI = async () => {

  const request = await fetch('/returndata');
  try {
  const allData = await request.json();
  document.getElementById('date').innerHTML = allData.date;
  document.getElementById('temp').innerHTML = allData.temp;
  document.getElementById('content').innerHTML = allData.feelings;
  
  } catch (error) {
  console.log("error", error);
  }
  }