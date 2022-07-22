import {
    //Sales Data
    SalesCategoriesData,
    SalesTecnoTypesData,
    SalesMiscelTypesData,
    SalesFoodTypesData,
    //Selects Data
    SelectOptions,
    SelectTecnoOptions,
    SelectMiscelOptions,
    SelectFoodOptions,
    SelectClothingOptions,
    SelectDesktopOptions,
    SelectDessertsOptions,
    SelectHomeOptions,
    SelectLaptopsOptions,
    SelectMeatsOptions,
    SelectShoesOptions,
    SelectVegetablesOptions,
    SelectWomenswearOptions
} from './Data';


export const selectOptions = (change) => {
    switch (change.value) {
        case SelectOptions[0].value:
            return SelectTecnoOptions
        case SelectOptions[1].value:
            return SelectMiscelOptions
        case SelectOptions[2].value:
            return SelectFoodOptions
    }

}

export const selectTypes = (change, option) => {
    console.log(option)
    if (option === SelectOptions[0].value) {
        switch (change.value) {
            case SelectTecnoOptions[0].value:
                return SelectHomeOptions
            case SelectTecnoOptions[1].value:
                return SelectLaptopsOptions
            case SelectTecnoOptions[2].value:
                return SelectDesktopOptions
        }
    }
    else if (option === SelectOptions[1].value) {
        switch (change.value) {
            case SelectMiscelOptions[0].value:
                return SelectWomenswearOptions
            case SelectMiscelOptions[1].value:
                return SelectClothingOptions
            case SelectMiscelOptions[2].value:
                return SelectShoesOptions
        }
    }
    else {
        switch (change.value) {
            case SelectFoodOptions[0].value:
                return SelectDessertsOptions
            case SelectFoodOptions[1].value:
                return SelectMeatsOptions
            case SelectFoodOptions[2].value:
                return SelectVegetablesOptions
        }
    }
}

export const dataOptionsRepresentation = (change) => {

    switch (change.value) {
        case SelectOptions[0].value:
            return SalesTecnoTypesData
        case SelectOptions[1].value:
            return SalesMiscelTypesData
        case SelectOptions[2].value:
            return SalesFoodTypesData
    }

}