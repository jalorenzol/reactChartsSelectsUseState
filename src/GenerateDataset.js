import React from 'react'
import { SalesCategoriesData, SalesFoodTypesData, SalesMiscelTypesData, SalesTecnoTypesData, SelectClothingOptions, SelectDesktopOptions, SelectDessertsOptions, SelectFoodOptions, SelectHomeOptions, SelectLaptopsOptions, SelectMeatsOptions, SelectMiscelOptions, SelectShoesOptions, SelectTecnoOptions, SelectWomenswearOptions } from './Data';
import { SelectOptions } from "./Data";

let labels = []
let data = []
const levels = []
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
  let index
  while (index === undefined) {
    index = levels[level].indexOf(change.value)
    if (index === undefined) {
      ++level
    }
  }
  return {
    labels: SalesCategoriesData.map((data) => data.year),
    datasets: generateDataset(level, levels[level][index])
  }

}


export const generateDataset = (level, option) => {

  if (level === '0') {
    labels = SelectOptions.map((data) => data.label)
    data = generateDatas(option)
  }
  else if (level === '1') {
    switch (option) {
      case SelectOptions[0].value:
        labels = SelectTecnoOptions.map((data) => data.label)
        data = generateDatas(option)
      case SelectOptions[1].value:
        labels = SelectMiscelOptions.map((data) => data.label)
        data = generateDatas(option)
      case SelectOptions[2].value:
        labels = SelectFoodOptions.map((data) => data.label)
        data = generateDatas(option)
    }
  }
  else if (level === '2') {
    switch (option) {

    }
  }




  console.log(labels, data)
  return (
    [
      {
        label: labels[0],
        data: data[0]
      },
      {
        label: labels[1],
        data: data[1]
      },
      {
        label: labels[2],
        data: data[2]
      }
    ]
  )
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
