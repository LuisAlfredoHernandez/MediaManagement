const calculatePagination = (val) => {
    console.log(val)
    if (val > 1) {
        let val2 = val
        while (val2 > 1) {
            val2--;
            val += 10
        }
        return val - 1
    }
    return val
}


export{
    calculatePagination
}