import { getGridSingleSelectOperators } from '@mui/x-data-grid-premium';

const CustomMultiFilterOperators = (filters) => {
    const singleSelectOperators = getGridSingleSelectOperators();
    console.log(">>>",singleSelectOperators)

    const filterOperators = filters.map(filter => {
        const { label, getApplyFilterFn } = filter;
        return {
            label,
            value: label,
            getApplyFilterFn,
            InputComponent: singleSelectOperators?.[2]?.InputComponent,
        };
    });

    return { filterOperators };
}

export default CustomMultiFilterOperators;
