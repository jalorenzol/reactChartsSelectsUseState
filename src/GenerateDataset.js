import React from 'react'
import { SalesCategoriesData, SalesDesktopTypesData, SalesFoodTypesData, SalesHomeTypesData, SalesLaptopTypesData, SalesMiscelTypesData, SalesTecnoTypesData, SelectClothingOptions, SelectDesktopOptions, SelectDessertsOptions, SelectFoodOptions, SelectHomeOptions, SelectLaptopsOptions, SelectMeatsOptions, SelectMiscelOptions, SelectShoesOptions, SelectTecnoOptions, SelectVegetablesOptions, SelectWomenswearOptions } from './Data';
import { SelectOptions } from "./Data";

let levels = []
const options = SelectOptions.map((data) => data.value)

const types = [
  SelectTecnoOptions.map((data) => data.value),
  SelectMiscelOptions.map((data) => data.value),
  SelectFoodOptions.map((data) => data.value)
]
const products = [
  SelectHomeOptions.map((data) => data.value),
  SelectLaptopsOptions.map((data) => data.value),
  SelectDesktopOptions.map((data) => data.value),
  SelectWomenswearOptions.map((data) => data.value),
  SelectClothingOptions.map((data) => data.value),
  SelectShoesOptions.map((data) => data.value),
  SelectDessertsOptions.map((data) => data.value),
  SelectMeatsOptions.map((data) => data.value),
]
levels = [options, types, products]



export const generateBarChar = (change) => {
  let level = 0
  let optionNum = 0
  let index = 0
  let labels = []
  let datasets = []

  index = levels[level].indexOf(change.value)


  while (index === -1) {
    ++level
    console.log(level)

    levels[level].every((data) => {
      data.every((arr) => {
        index = arr.indexOf(change.value)
        if (index !== -1) {
          console.log("Entró")
          labels = SalesCategoriesData.map((data) => data.year)
          datasets = generateDataset(level, levels[level][optionNum][index])
          return true
        }
        ++optionNum
      })


    })

  }


  console.log(level)
  console.log(index)

  return {
    labels: SalesCategoriesData.map((data) => data.year),
    datasets: generateDataset(level, levels[level][index])
  }

}


export const generateDataset = (level, option) => {
  let data = []
  let labels = []
  console.log(option)
  data = generateDatas(option)
  if (level === '') {
    labels = SelectOptions.map((data) => data.label)
  }
  else if (level === 0) {
    console.log("aca")
    switch (option) {
      case SelectOptions[0].value:
        labels = SelectTecnoOptions.map((data) => data.label)
        break
      case SelectOptions[1].value:
        labels = SelectMiscelOptions.map((data) => data.label)
        break
      case SelectOptions[2].value:
        labels = SelectFoodOptions.map((data) => data.label)
        break
    }
  }
  else if (level === 1) {
    switch (option) {
      case SelectTecnoOptions[0].value:
        labels = SelectHomeOptions.map((data) => data.label)
        break
      case SelectTecnoOptions[1].value:
        labels = SelectLaptopsOptions.map((data) => data.label)
        break
      case SelectTecnoOptions[2].value:
        labels = SelectDesktopOptions.map((data) => data.label)
        break
      case SelectMiscelOptions[0].value:
        labels = SelectWomenswearOptions.map((data) => data.label)
        break
      case SelectMiscelOptions[1].value:
        labels = SelectClothingOptions.map((data) => data.label)
        break
      case SelectMiscelOptions[2].value:
        labels = SelectShoesOptions.map((data) => data.label)
        break
      case SelectFoodOptions[0].value:
        labels = SelectDessertsOptions.map((data) => data.label)
        break
      case SelectFoodOptions[1].value:
        labels = SelectMeatsOptions.map((data) => data.label)
        break
      case SelectFoodOptions[2].value:
        labels = SelectVegetablesOptions.map((data) => data.label)
        break
    }
  }
  let datasets = []
  labels.map((labeldata) => {
    datasets.push({
      label: labeldata,
      data: data.shift()
    })
  })
  return datasets
}

function generateDatas(option) {
  switch (option) {
    case '':
      return [
        SalesCategoriesData.map((data) => data.tecno),
        SalesCategoriesData.map((data) => data.miscel),
        SalesCategoriesData.map((data) => data.food)
      ]
    case options[0]:
      return [
        SalesTecnoTypesData.map((data) => data.home),
        SalesTecnoTypesData.map((data) => data.laptops),
        SalesTecnoTypesData.map((data) => data.desktop)
      ]
    case options[1]:
      return [
        SalesMiscelTypesData.map((data) => data.womenswear),
        SalesMiscelTypesData.map((data) => data.clothing),
        SalesMiscelTypesData.map((data) => data.shoes)
      ]
    case options[2]:
      return [
        SalesFoodTypesData.map((data) => data.desserts),
        SalesFoodTypesData.map((data) => data.meats),
        SalesFoodTypesData.map((data) => data.vegetables)
      ]
    case types[0][0]:
      return [
        SalesHomeTypesData.map((data) => data.daytron),
        SalesHomeTypesData.map((data) => data.creative),
        SalesHomeTypesData.map((data) => data.samsung)
      ]
    case types[0][1]:
      return [
        SalesLaptopTypesData.map((data) => data.msi),
        SalesLaptopTypesData.map((data) => data.mac),
        SalesLaptopTypesData.map((data) => data.dell)
      ]
    case types[0][2]:
      return [
        SalesDesktopTypesData.map((data) => data.msi),
        SalesDesktopTypesData.map((data) => data.mac),
        SalesDesktopTypesData.map((data) => data.dell)
      ]


  }
}
