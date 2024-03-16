import React, { useState } from 'react';
import './Forminput.css';
import Homepage from './Homepage';

function Forminput() {
    const [countname, setCountname] = useState(0);
    const [nameInputs, setNameInputs] = useState('');
    const [teams, setTeams] = useState([[], [], [], []]);
    const [addedToTeam, setAddedToTeam] = useState(null);
    const [numberofpeople, setNumberofpeople] = useState(0);
    const [count, setCount] = useState('')



    const handleCountInputChange = (event) => {
        const inputValue = parseInt(event.target.value, 10);
        setCount(isNaN(inputValue) ? ' ' : inputValue.toString());
    };


    const handleSubmitCount = () => {
        setCountname(count)
        setNumberofpeople(count)
        setTeams([[], [], [], []])
    };

    const inputName = (event) => {
        const newNameInputs = event.target.value;
        setNameInputs(isNaN(newNameInputs) ? newNameInputs : ' ');
    }

    const handleSubmit = () => {
        if (nameInputs.trim() === '') {
            alert('โปรดป้อนชื่อ');
            return;
        }

        // ตรวจสอบว่าได้มาถึงจำนวนสูงสุดของชื่อหรือไม่
        const totalNames = teams.reduce((acc, team) => acc + team.length, 0);
        if (totalNames >= countname) {
            alert('เต็มแล้ว');
            return;
        }

        // ตรวจสอบว่าทุกทีมมีจำนวนชื่อเท่ากันหรือไม่
        const minTeamLength = Math.min(...teams.map(team => team.length));
        const availableTeams = teams.filter(team => team.length === minTeamLength);

        // เลือกทีมหนึ่งที่มีจำนวนน้อยที่สุดแบบสุ่ม
        const randomTeamIndex = Math.floor(Math.random() * availableTeams.length);
        const chosenTeam = availableTeams[randomTeamIndex];
        // เพิ่มชื่อใหม่เข้าไปในทีมที่เลือก
        setTeams(teams => teams.map((team, index) =>
            index === teams.indexOf(chosenTeam) ? [...team, nameInputs] : team
        ));
        setAddedToTeam(teams.indexOf(chosenTeam));
        // เคลียร์ช่องป้อนหลังจากการส่ง
        setNameInputs('');
        //ตรวจสอบต้องใส่ชื่ออีกกี่คน
        const remainingPeople = numberofpeople - 1;
        setNumberofpeople(remainingPeople);

    }


    return (
        <div>
            <div className='container-input'>
                <div className='input-number'>
                    <label>จำนวนคน:</label>
                    <div className='buttom-input'>
                        <input placeholder='Number' className='number' type='text' value={count} onChange={handleCountInputChange}></input>
                        <button onClick={handleSubmitCount}>Submit</button>
                    </div>
                </div>
            </div>
            <div className='inputname-container'>
                <div className='input-box'>
                    <div className='box-input'>
                        <label>ชื่อใส่ได้อีก {numberofpeople} คน:</label>
                        <div className='buttom-input'>
                            {/* <input className='name' type='text' value={nameInputs} onChange={(event) => inputName(event)} /> */}
                            <input placeholder='Name' className='name' type='text' value={nameInputs} onChange={(event) => inputName(event)} onKeyPress={(event) => {
                                    if (event.key === 'Enter') {
                                        handleSubmit();
                                    }
                                }}
                            />
                            <button onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            <Homepage teams={teams} addedToTeam={addedToTeam} />
        </div>
    )
}

export default Forminput;




