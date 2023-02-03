const nums = [1,2,3,2,4,3];

const res =  nums.reduce((acc, curr)=>{
    return !acc.includes(curr)? [...acc, curr]:acc;
},[]);


console.log(res)