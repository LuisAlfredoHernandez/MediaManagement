const calculatePagination = (val) => {
    if (val > 1) {
        let val2 = val
        const orgval = val
        while (val2 > 1) {
            val2--;
            val += 10
        }
        return val - orgval
    }
    return val
}


export{
    calculatePagination
}