import {add,sub} from "./Arithmetic"
test("check result of addition",()=>{
    expect(add(10,5)).toBe(15)
})
test("check result of sub",()=>{
    expect(sub(10,5)).not.toBe(15)
})