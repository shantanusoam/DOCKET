import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { read, utils } from 'xlsx';
import './App.css'
import DocketForm from './Components/DocketForm';
import DocketList from './Components/DocketList';
function App() {

  const [poData, setPoData] = useState([]);

  const [dockets, setDockets] = useState([]);
// Replace with API data

  const handleCreateDocket = (docket) => {
    setDockets([...dockets, docket]);
  };
  async function fetchData() {
    try {
      const response = await fetch('/export29913.xlsx');
      const arrayBuffer = await response.arrayBuffer();

      // const data = new Uint8Array(arrayBuffer);
      const workbook = read(arrayBuffer);

      // Assuming the first sheet in the workbook contains your data
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];

      // Parse sheet data into JSON format
      const parsedData = utils.sheet_to_json(sheet);

      // Set the parsed data to the state
      setPoData(parsedData);
    } catch (error) {
      console.error('Error loading XLSX file:', error);
    }
  }

  useEffect(() => {
   
    fetchData();
  }, []);


  function parseCSV(csvText) {

    const rows = csvText.split('\n');
    const headers = rows[0].split(',');
    const data = [];
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i].split(',');
      const rowData = {};
      for (let j = 0; j < headers.length; j++) {
        rowData[headers[j]] = row[j];
      }
      data.push(rowData);
    }
    return data;
  }

  return (
    <>
       <div className="container mx-auto mt-8">
      <DocketForm data={poData} onSubmit={handleCreateDocket} />
      <div className="flex justify-center items-center h-screen bg-gray-100">
      <DocketList dockets={dockets} />
    </div>
      
    </div>
    
    </>
  )
}

export default App
