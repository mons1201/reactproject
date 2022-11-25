let MyEmployee=[
    {
        "empId":1,
        "empName":"Mohana",
        "empUsername":"Mons",
        "empPassword":"Mon$1201",
        "empDesignation":"Python full stack",
        "empExperience":"1",
        "empSalary":20000
    },
    {
        "empId":2,
        "empName":"Mohan",
        "empUsername":"Badboy",
        "empPassword":"Badboy@1201",
        "empDesignation":"Python core",
        "empExperience":"2",
        "empSalary":30000
    },
    {
        "empId":3,
        "empName":"Dinesh",
        "empUsername":"Swetha",
        "empPassword":"Swe#123",
        "empDesignation":"Java",
        "empExperience":"1",
        "empSalary":15000
    }

]
export const create=(data)=>
{
    MyEmployee.push(data)
}
export const list=()=>
{
    return MyEmployee;
}
export const read=(index)=>
{
    return MyEmployee[index];
}
export const FetchExact=(name)=>
{
    const temp=MyEmployee.filter((element)=>
    {
        return element.empName===name;
    })
    return temp[0];
}
export const alter=(data,place)=>
{
    MyEmployee[place]=data;
}
export const remove=(index)=>
{
    MyEmployee=MyEmployee.filter((d,i)=>
    {
        return i!==index;
    })
    return MyEmployee
 }

        


    

    

    