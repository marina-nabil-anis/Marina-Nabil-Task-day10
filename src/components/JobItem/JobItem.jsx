import './JobItem.css'

function JobItem({eachJob}){
const combineArray =[...eachJob.languages,...eachJob.tools]

return(
    <div className='JobItem' style={eachJob.featured== true ? {borderLeft: "solid 3px hsl(180, 29%, 50%)"} : null}>
        <img src={eachJob.logo}></img>
        <div className='JobInfo'>
            <div className='firstLine'>
                <label className='Companies'>{eachJob.company}</label>
                {eachJob.new == true ?(<label className='newLabel'>New!</label>): null}
                {eachJob.featured == true ? (<label className='Featured'>featured</label>): null}
                
                
            </div>
            <p className='positions'>{eachJob.position}</p>
            <div className='ThirdLine'>
                <label>{eachJob.postedAt}</label>
                <label>&#x2022; </label>
                <label> {eachJob.contract}</label>
                <label>&#x2022; </label>
                <label> {eachJob.location}</label>
            </div>
        </div>
        <div className='MyBtns'>

            {combineArray.map((name, index)=>{
                return( <button key={index}>{name}</button>)
            })}
           
            
        </div>
    </div>
)
}

export default JobItem

