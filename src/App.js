import './App.css';
import { BarChar } from './components/BarChar';
import {
  //Sales Data
  SalesCategoriesData,
  //Selects Data 
  SelectOptions,
} from './Data';
import { useState } from 'react';
import { createLevelOption, generateBarChar, generateDataset } from './GenerateDataset';
import Select from 'react-select';
import { selectOptions, selectTypes,dataOptionsRepresentation } from './SelectOptions';

let option = ''
let type =''

function App() {

  const [salesData, setSalesData] = useState({
    labels: SalesCategoriesData.map((data) => data.year),
    datasets: generateDataset('0', '')
  })


  const [selectCategoriOptions, setSelectOptions] = useState([])

  const [selectProductOptions, setProductOptions] = useState([])


  let onchangeCategoriEvent = (change) => {
    option = change.value
    setSelectOptions(selectOptions(change))
    setSalesData(generateBarChar(change))
  }
  let onchangeTypeEvent = (change) => {
    type = change.value
    setProductOptions(selectTypes(change, option))
    setSalesData(generateBarChar(change))
  }
  let onchangeBrandEvent = (change) => {
    
  }




  return (
    <div style={{ width: '80%', margin: '5%' }}>
      <div>
        <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between' }}>
          <div>
            <Select id='1' placeholder='Categories' options={SelectOptions} onChange={onchangeCategoriEvent} />
          </div>
          <div>
            <Select id='2' placeholder='Types' options={selectCategoriOptions} onChange={onchangeTypeEvent} />
          </div>
          <div>
            <Select id='3' placeholder='Brands' options={selectProductOptions} />
          </div>
        </div>
      </div>
      <BarChar chardata={salesData} />
    </div>
  );
}

export default App;
