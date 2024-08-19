export default function TestComponent({num = Test.testA}){
    return(
        <p>てすとです！{num}</p>
    )
}

export enum Test{
    testA = 0,
    testB = 1,
}