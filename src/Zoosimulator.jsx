import React, { useEffect } from 'react'
import { useState } from 'react';
import Animal from './Animal';

function Zoosimulator() {
    const initialAnimals = {
        monkeys: Array(5).fill({type: ' 🐒', health: 100.0, status: 'alive'}),
        giraffe: Array(5).fill({type: '🦒', health: 100.0, status: 'alive'}),
        elephant: Array(5).fill({type: '🐘', health: 100.0, status: 'alive'})
    };

    const [animals, setAnimals] = useState(initialAnimals);
    const [time, setTime] = useState(0);

    let newStatus = "   "
    const passTime = () => {
        setTime(prevTime => prevTime + 1);
        setAnimals(prevAnimals => {
            const updatedAnimals = {...prevAnimals};

            for (const type in updatedAnimals){
                updatedAnimals[type] = updatedAnimals[type].map(animal => {
                    if (animal.status === 'Dead') return animal;


                    const randomDamage = Math.floor(Math.random()*20);
                    console.log(randomDamage)
                    
                    const newHealth = Math.floor(animal.health - (animal.health * randomDamage) / 100);

                    newStatus = 'alive';
                    if (animal.type === '🐒' && newHealth < 30) newStatus = 'Dead';
                    if (animal.type === '🦒' && newHealth < 50) newStatus = 'Dead';
                    if(animal.type === '🐘'){
                        if (newHealth < 70){
                            if(animal.health < 70) newStatus = 'Dead';
                            else newStatus = 'cannot walk';
                        }
                    }
                    return {...animal, health: newHealth, status: newStatus};
                });
            }
            return updatedAnimals;
            
        });
    };

    const feedAnimals = () => {
        setAnimals(prevAnimals => {
            const updatedAnimals = {...prevAnimals};

            for (const type in updatedAnimals){
                const healthIncrease = Math.random() * (25 - 10) + 10;
                updatedAnimals[type] = updatedAnimals[type].map(animal => {
                    if (animal.status === 'Dead') return animal;
                    const newHealth = Math.min(animal.health + (animal.health + healthIncrease) , 100);
                    return {...animal, health: newHealth, status: newStatus};
                });
            }
            return updatedAnimals;
        });
    };

    useEffect (()=>{
        const intervalid = setInterval(passTime, 360000);
        return () => clearInterval(intervalid);
    },[]);
    
  return (
    <div className=' p-8'>
        <h1 className=' text-4xl font-bold text-center text-[red] '>ZOO SIMULATOR</h1>
        <p className=' text-center font-semibold'>Time: {time}hours</p>
        <div className=' flex justify-around  space-x-4 mt-4'>
            <button className=' bg-red-500 hover:bg-yellow-300 h-[6vh] w-[10vw]' onClick={passTime}>
                PassTime
            </button>
            <button className=' bg-red-500 hover:bg-yellow-300 h-[6vh] w-[10vw]' onClick={feedAnimals}>FeedAnimals</button>
        </div>
        <div className=' grid grid-cols-3   gap-4 ml-[50px]'>
            {Object.values(animals).flat().map((animal, index)=> (
            <Animal  key={index} type={animal.type} health={animal.health} status={animal.status}/>
        ))}
        </div>
    </div>
  );
}

export default Zoosimulator