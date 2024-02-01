import '../styles/nav.css'

export default function Nav(){
    return (
        <>
        <div className="nav">
            <div className='header_text'>
                <p>Test</p>
            </div>
            <div className='text-center school_name'>
                <p className='fw-bold '>0 / 20</p>
                <p className='text-body-secondary'>Latin Grammatical Constructions</p> 
            </div>
            <div className='bnt_space'>
            <button className="fs-6 fw-bold text-body-secondary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" type='button'>Option</button>
            
            <button className="fs-6 fw-bold text-body-secondary">
            <i class="bi bi-x-lg fs-6 fw-bold"></i>
            </button>
            </div>
        </div>
        </>
    )
}