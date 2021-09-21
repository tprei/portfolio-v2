import {useState} from 'react'

function Tab(props) {
    const {label, selected, onClick} = props;
    const focused = (selected === label);

    return (
        <button onClick={onClick} className={`font-bold p-2 text-red border-2 border-red rounded-lg transform transition duration-200 hover:scale-105 ${focused ? "border-opacity-100" : "border-opacity-40"}`}>{label}</button>
    );
}

function Card(props) {
    const {value} = props;
    return (
        <div className='border-2 border-green text-green p-4 m-2 rounded-lg'>{value}</div>
    );
}

export const Skills = (props) => {
    const {objects} = props;
    const [selected, setSelected] = useState('Backend');
 
    const selectedObject = objects.filter((el) => {
        return el.label === selected;
    })[0];
    
    return (
        <div className='flex flex-row gap-4 justify-center'>
            <div className='flex flex-col gap-4'>
                {objects.map(obj => {
                    return (
                        <Tab key={obj.id} label={obj.label} selected={selected} onClick={()=>{setSelected(obj.label)}}/>
                    );
                })}
            </div>
            <div className='flex w-3/5 align-start flex-wrap justify-start content-start flex-shrink-0 border-2 border-red'>
                {selectedObject.values.map((val, index) => {
                    return (
                        <Card key={index} value={val}></Card>
                    );
                })}
            </div>
        </div>
    );
}