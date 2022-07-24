import React from 'react'
import { SalesCategoriesData, SalesFoodTypesData, SalesMiscelTypesData, SalesTecnoTypesData, SelectClothingOptions, SelectDesktopOptions, SelectDessertsOptions, SelectFoodOptions, SelectHomeOptions, SelectLaptopsOptions, SelectMeatsOptions, SelectMiscelOptions, SelectShoesOptions, SelectTecnoOptions, SelectVegetablesOptions, SelectWomenswearOptions } from './Data';
import { SelectOptions } from "./Data";

let levels = []
const options = SelectOptions.map((data) => data.value)
const tecnoTypes = SelectTecnoOptions.map((data) => data.value)
const miscelTypes = SelectMiscelOptions.map((data) => data.value)
const foodTypes = SelectFoodOptions.map((data) => data.value)
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

let data = []
let label = []

export const generateBarChar = (change) => {
  let level = 0
  let index

  index = levels[level].indexOf(change.value)


  while (index === -1) {
    ++level
    console.log(level)
    levels[level].map((data) => {
      index = data.indexOf(change.value)
      
    })
  }


  console.log(level)
  console.log(index)
  console.log(levels)
  return {
    labels: SalesCategoriesData.map((data) => data.year),
    datasets: generateDataset(level, levels[level][index])
  }

}


export const generateDataset = (level, option) => {

  data = generateDatas(option)
  if (level === 0) {
    label = SelectOptions.map((data) => data.label)
  }
  else if (level === 1) {
    switch (option) {
      case SelectOptions[0].value:
        label = SelectTecnoOptions.map((data) => data.label)
        break
      case SelectOptions[1].value:
        label = SelectMiscelOptions.map((data) => data.label)
        break
      case SelectOptions[2].value:
        label = SelectFoodOptions.map((data) => data.label)
        break
    }
  }
  else if (level === 2) {
    switch (option) {
      case SelectTecnoOptions[0].value:
        label = SelectHomeOptions.map((data) => data.label)
        break
      case SelectTecnoOptions[1].value:
        label = SelectLaptopsOptions.map((data) => data.label)
        break
      case SelectTecnoOptions[2].value:
        label = SelectDesktopOptions.map((data) => data.label)
        break
      case SelectMiscelOptions[0].value:
        label = SelectWomenswearOptions.map((data) => data.label)
        break
      case SelectMiscelOptions[1].value:
        label = SelectClothingOptions.map((data) => data.label)
        break
      case SelectMiscelOptions[2].value:
        label = SelectShoesOptions.map((data) => data.label)
        break
      case SelectFoodOptions[0].value:
        label = SelectDessertsOptions.map((data) => data.label)
        break
      case SelectFoodOptions[1].value:
        label = SelectMeatsOptions.map((data) => data.label)
        break
      case SelectFoodOptions[2].value:
        label = SelectVegetablesOptions.map((data) => data.label)
        break
    }
  }
  return [
    {
      label: label[0],
      data: data[0]
    },
    {
      label: label[1],
      data: data[1]
    },
    {
      label: label[2],
      data: data[2]
    }
  ]

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
  }
}
