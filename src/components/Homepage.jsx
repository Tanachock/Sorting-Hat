import './Homepage.css'

function Homepage({ teams, addedToTeam }) {
    return (
        <div>
            <div className='team-container'>
                <div className='box-hover'>
                    <label className='label-stinky'>อินทรอาชีวะ</label>
                    <div className={addedToTeam === 0 ? 'name-container animated' : 'name-container'}>
                        {teams[0].map((name, index) => <div key={index}>{name}</div>)}
                    </div>
                </div>
                <div className='box-hover'>
                    <label className='label-stinky'>เทคโนโลยีประชาชล</label>
                    <div className={addedToTeam === 1 ? 'name-container animated' : 'name-container'}>
                        {teams[1].map((name, index) => <div key={index}>{name}</div>)}
                    </div>
                </div>
                <div className='box-hover'>
                    <label className='label-stinky'>กนกอาชีวะ</label>
                    <div className={addedToTeam === 2 ? 'name-container animated' : 'name-container'}>
                        {teams[2].map((name, index) => <div key={index}>{name}</div>)}
                    </div>
                </div>
                <div className='box-hover'>
                    <label className='label-stinky'>ช่างกลบูรณพนธ์</label>
                    <div className={addedToTeam === 3 ? 'name-container animated' : 'name-container'}>
                        {teams[3].map((name, index) => <div key={index}>{name}</div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;