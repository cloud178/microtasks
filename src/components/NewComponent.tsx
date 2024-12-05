// @flow 
import * as React from 'react';

type StudentType = {
    id: number;
    name: string;
    age: number;
}

// type StudentsType = {
//     students: StudentType[];
// }

type TopCarsType = {
    manufacturer: string,
    model: string,
}

type NewComponentType = {
    students: StudentType[],
    topCars: TopCarsType[],
}


export const NewComponent = ({students, topCars}: NewComponentType) => {
    return (
        <>
            <ul>
                {students.map(student => {
                    return (
                        <li key={student.id}><span>{student.name}</span>, <span>{student.age}</span></li>
                    )
                })}
            </ul>
            <table>
                <tr>
                    {topCars.map((car, index) => {
                        return (
                            <td key={index}>{car.model}</td>)
                    })}
                </tr>
            </table>
        </>
    );
};