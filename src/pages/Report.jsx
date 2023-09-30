import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useAuth } from '../context/auth'
import toast from 'react-hot-toast'

const Report = () => {
    const [report, setReport] = useState('')
    const [pincodeOfIncident, setpincodeOfIncident] = useState('')
    const [mimeType, setmimeType] = useState('')
    const [note, setext] = useState('')
    const [auth, setAuth] = useAuth()
    const [user, setuser] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setuser(auth.user._id)
            setext(mimeType.split('.')[1])
            const res = await axios.post('https://womensecbackend.onrender.com/api/v1/incidents', {
                user, report, pincodeOfIncident, mimeType, note
            })
            console.log(res)
            console.log(pincodeOfIncident)
            console.log(report)
            toast.success('Report Sended Successfully')
        } catch (err) {
            console.log(err)
            toast.error('Error in Sending Report')
        }
    }
    return (
        <div className='marginStyle '>
            <form method='post' enctype="multipart/form-data">
                <textarea placeholder='Enter the report ' value={report} onChange={(e) => setReport(e.target.value)} type='text' className='form-control my-3' />
                <input
                    type='number'
                    value={pincodeOfIncident}
                    placeholder='Enter the pin of the Incident Place'
                    className='form-control'
                    onChange={(e) => setpincodeOfIncident(e.target.value)}
                    required
                />
                <input type='file' className='form-control my-3' onChange={(e) => setmimeType(e.target.value)} />
                <button className='btn btn-outline-dark' onClick={handleSubmit}>Submit Incident</button>
            </form>

            <div class="container d-flex justify-content-center align-items-center">
                <div class="row border rounded-5 p-3 bg-white shadow box-area reverseCol">
                    <div class="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box">
                        <div class="featured-image mb-3 animateImg">
                            <img src='' class="img-fluid" width={500} />
                        </div>
                    </div>
                    <form method='post' enctype="multipart/form-data" class="col-md-6 right-box">
                        <div class="row align-items-center">
                            <div class="header-text mb-4">
                                <h2>Welcome</h2>
                                <p>We are happy to have you back</p>
                            </div>
                            <div class="input-group d-flex  align-items-center mb-3">
                                <div class="form-outline flex-fill mb-0">
                                </div>
                            </div>
                            <div class="input-group d-flex flex-row align-items-center mb-3">
                                <div class="form-outline flex-fill mb-0">
                                    <input type='number'
                                        value={pincodeOfIncident}
                                        placeholder='Enter the pin of the Incident Place'
                                        className='form-control'
                                        onChange={(e) => setpincodeOfIncident(e.target.value)}
                                        required class="form-control form-control-lg border-dark fs-6" />
                                </div>
                            </div>
                            <div class="d-flex flex-row align-items-center my-3 ">
                                <div class="form-outline flex-fill mb-0 " >
                                    <button className='btn text-white btn-lg btn-block' onClick={handleSubmit} style={{ width: '100%', backgroundColor: 'blueviolet' }} type="button">Submit Incident</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        </div>
    )
}

export default Report
