import {useParam} from 'react'

const date = [
    {id:1, name:'ann', age: 27},
    {id:2, name:'ann', age: 20},
    {id:3, name:'ann', age: 22},
    {id:4, name:'ann', age: 35}
]

const ParamPage = () => {
    const param = useParam()

    const user = date.find(user => user.factId == param.factId)
    if(!user){
        return <div>user not found</div>
    }
    
    return (
        <div>
            <h1>{user.name}</h1>
            <h1>{user.age}</h1>
            <h2>Param Route (Dynamic)</h2>
        </div>
    )
}

export default ParamPage